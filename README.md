![](https://img.shields.io/npm/v/mobx-mc) ![CircleCI](https://img.shields.io/circleci/build/github/rakenapp/mobx-mc)

## Installation

`npm install mobx-mc`

`yarn add mobx-mc`

## Introduction

Mobx MC is a library inspired by both [Backbone](https://backbonejs.org/) and the approach of using domain stores and domain objects as described in the [Mobx Best Practices Documentation](https://mobx.js.org/best/store.html).

Out of the box, Mobx MC:

- Separates your server state cache from your global state.
- Makes the data observable so you can track values and derive from it.
- Communicates with the server to fetch, save, and delete.
- Manages observable states like fetching, saving, and deleting.

The basic concept is that of a `Model` and a `Collection` of models. State is managed automatically, and CRUD is built-in. A classic example would be a to-do list, where each todo would be a model and the list of todos would be a collection.

Mobx MC is pre-configured to sync with a RESTful API. Simply create a new Collection with the url of your resource endpoint:

```javascript
class Todo extends Model {}

class Todos extends Collection {
  model() {
    return Todo;
  }

  url() {
    return '/todos';
  }
}
```

The Collection and Model components together form a direct mapping of REST resources using the following methods:

```javascript
GET  /todos .... collection.fetch();
POST /todos .... collection.create();
GET  /todos/1 ... model.fetch();
PATCH  /todos/1 ... model.save();
DELETE  /todos/1 ... model.destroy();
```

## Documentation

- [Model](#model)
  - [constructor(data, options)](#constructordata-options)
  - [applyOptions(options)](#applyoptionsoptions)
  - [get restAttributes()](#get-restattributes)
  - [attributes](#attributes)
  - [set(data, options)](#setdata-options)
    - [Options](#options)
  - [parse(data)](#parsedata)
  - [clear()](#clear)
  - [toJSON()](#tojson)
  - [get restAttributeDefaults()](#get-restattributedefaults)
  - [idAttribute()](#idattribute)
  - [cid](#cid)
  - [uniqueId](#uniqueid)
  - [isNew](#isnew)
  - [collection](#collection)
  - [urlRoot](#urlroot)
  - [url()](#url)
  - [CRUD Operations](#crud-operations)
  - [fetch(options)](#fetchoptions)
    - [Options](#options-1)
- [save(data, options)](#savedata-options)
  - [Options](#options-2)
- [destroy(options)](#destroyoptions)
  - [Options](#options-3)
- [Collection](#collection-1)
  - [constructor(attributes, options)](#constructorattributes-options)
  - [applyOptions(options)](#applyoptionsoptions-1)
  - [model(type)](#modeltype)
  - [models](#models)
  - [length](#length)
  - [set(data, options)](#setdata-options-1)
    - [Options](#options-4)
  - [parse(data)](#parsedata-1)
  - [get(id)](#getid)
  - [at(index)](#atindex)
  - [add(models, options)](#addmodels-options)
    - [Options](#options-5)
  - [getOradd(data)](#getoradddata)
  - [remove(models)](#removemodels)
  - [reset(array)](#resetarray)
  - [url()](#url-1)
  - [CRUD Operations](#crud-operations-1)
  - [fetch(options)](#fetchoptions-1)
    - [Options](#options-6)
  - [create(data, options)](#createdata-options)
    - [Options](#options-7)
  - [getOrFetch(id, options)](#getorfetchid-options)
- [Where is it used?](#where-is-it-used)
- [License](#license)

## Model

To create a **Model** class of your own, you extend **Model** and provide instance properties and options for your class. Typically, this is when you'll define the `restAttributes`, and any computed properties or actions to be attached to instances of your class.

```javascript
import { computed } from 'mobx';
import { Model } from 'mobx-mc';

class User extends Model {
  get restAttributes() {
    return ['firstName', 'lastName'];
  }

  @computed get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
```

### constructor(data, options)

When creating an instance of a model, you can pass in the initial values of the **attributes**. You will need to have defined these attributes in `restAttributes`.

```javascript
const me = new User({
  firstName: 'Tony',
  lastName: 'Stark'
});
```

As a second argument you can pass in a configuration object with options to pass through to the `set` method and the `applyOptions` method used to set up references to other class instances.

```javascript
import rootStore from 'stores/index';

const me = new User(
  {
    firstName: 'Tony',
    lastName: 'Stark'
  },
  {
    parse: true,
    rootStore: rootStore
  }
);
```

### applyOptions(options)

Override this method to customise how you would like to handle any additional options passed in when a model is initialized.

```javascript
applyOptions(options) {
  if (options.rootStore) {
    this.rootStore = options.rootStore;
  }
}
```

### get restAttributes()

Defines a white-list of fields that you expect to receive from your backend API. Any fields not defined here will be stripped out when reading or writing from the server (however this can be overridden by setting the `stripNonRest: false` option on any CRUD method).

```javascript
import { computed } from 'mobx';
import { Model } from 'mobx-mc';

class User extends Model {
  get restAttributes() {
    return ['firstName', 'lastName'];
  }
}

const user = new User();

// Only firstName and lastName sent in request
user.save({
  title: 'Mr',
  firstName: 'Tony',
  lastName: 'Stark'
});

// title, firstName and lastName sent in request
user.save(
  {
    title: 'Mr',
    firstName: 'Tony',
    lastName: 'Stark'
  },
  {
    stripNonRest: false
  }
);
```

### attributes

The **attributes** property is a reference to a [Mobx Observable Map](https://mobx.js.org/refguide/map.html#observable-maps) that holds the values for the fields defined in `restAttributes` . The model's `set` method will keep this map updated when fetching and saving data to the server.

You can use any of the methods available for Maps, or access properties directly using dot syntax because the model provides dynamic getter/setters to the map's keys.

```javascript
import { computed } from 'mobx';
import { Model } from 'mobx-mc';

class User extends Model {
  get restAttributes() {
    return ['firstName', 'lastName'];
  }

  @computed get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const user = new User();

// Use the underlying map's methods
user.attributes.set('firstName', 'Peter');

// Alternatively modify properties directly
user.lastName = 'Parker';

console.log(user.firstName); // 'Peter'
console.log(user.attributes.get('lastName')); // 'Parker'

// The map is observable so anything that referenes the keys will be stay up to date
console.log(user.fullName); // 'Peter Parker'
```

### set(data, options)

Sets a value, or multiple values, on the `attributes` map. The Model's constructor and CRUD related methods (`save,` `fetch` etc) call this method when new data is received.

#### Options

- `parse` (_Boolean_) - If `{parse: true}` is passed as an **option**, the `data` will first be run through the model's `parse()` method before being `set` on the map. The default for this option is `true`.

- `stripNonRest` (_Boolean_) - If `{stripNonRest: false}` is passed as an **option**, keys that are not specified in `restAttributes` will still be set on the `attributes` map. The default for this option is `true`.

- `reset` (_Boolean_) - If `{reset: true}` is passed as an **option**, the entire `attributes` map will be reset with the passed in `data` (Equivalent of `attributes.clear()` && `attributes.merge(data)`). The default for this option is `false`, which results in a merge operation (Equivalent of `attributes.merge(data`)). See the [Mobx documentation on Maps](https://mobx.js.org/refguide/map.html#observable-maps) for more information.

### parse(data)

Called internally by the `set` method before applying `data` to the `attributes` map.

The default implementation is a no-op, simply passing through the `data`. Override this if your data needs to be modified, remapped, renamed, etc.

```javascript
class User extends Model {
  get restAttributes() {
    return ['firstName', 'lastName'];
  }

  parse(data) {
    // Use the parse method to remap the company data into a company model
    this.company = new Company(data.company);

    // Remove the company from the data.
    delete data.company;

    // First name and last name will be set on the attributes.
    return data;
  }
}
```

### clear()

Clear all the attributes from `attributes` map. Equivalent of calling `model.attributes.clear()`

### toJSON()

Returns a deep plain object representation of the `attributes` map.

### get restAttributeDefaults()

Use this to define default values for your model. If the value for a key in `attributes` is set to `undefined` it will fall back to the value specified here.

```javascript
class User extends Model {
  get restAttributes() {
    return ['title', 'firstName', 'lastName'];
  }

  get restAttributeDefaults() {
    return {
      title: 'Dr'
    };
  }
}

const user = new User();

console.log(user.title); // 'Dr';
```

### idAttribute()

Returns the attribute that should be used as the unique id of the model. This is used to determine the `id` when constructing a model's `url` for saving to the server.

Defaults to `'id'`.

```javascript
class User extends Model {
  urlRoot = '/users';

  idAttribute() {
    return 'uuid';
  }

  get restAttributes() {
    return ['firstName', 'lastName'];
  }
}

const me = new User({ uuid: 'b5eb81ef-26ff-4df7-bfa3-0d1b7feccbc1' });

console.log(me.url()); // '/users/b5eb81ef-26ff-4df7-bfa3-0d1b7feccbc1'
```

### cid

A unique identifier automatically assigned to all models when they are first created. Client IDs are handy when the model has not been saved to the server so does not yet have its true `id`, but still needs a unique id (e.g for usage as a `key` when mapping over and rendering React Components).

```javascript
const user = new User();
console.log(user.cid); // '6b910175-1f56-48de-9fae-0e152629d535'
```

### uniqueId

Returns the model's `id` if it's available, otherwise falling back to the `cid`. This proerpty is provided for convienence so you don't have to write conditionals throughout your codebase.

```javascript
render() {
  return this.props.users.map(user => <User key={user.uniqueId} />)
}
```

### isNew

Has this model been saved to the server yet? If the model does not yet have an `id`, it is considered to be new.

### collection

A reference to the collection the model belongs to, if in a collection. This is used for building the default `url` for a model.

### urlRoot

The base url to use for fetching this model. This is useful if the model is _not_ in a collection and you still want to set a fixed "root" but have a dynamic model.url().

```javascript
class User extends Model {
  urlRoot = '/users';
}

const user = new User({
  id: 1
});

console.log(user.url()); // '/users/1'
```

### url()

The relative url that the model should use to edit the resource on the server. By default, `url` is constructed by finding the model's `urlRoot` or the model's collection `url`, then appending the `idAttribute`. However, if the model does not follow normal REST endpoint conventions, you may overwrite it. In such a case, `url` may be absolute.

```javascript
class User extends Model {
  urlRoot = '/users';
}

const user = new User({
  id: 1
});

console.log(user.url()); // '/users/1'

class Me extends User {
  url() {
    return '/me''
  }
}

const me = new Me({
  id: 2
})

console.log(me.url()); // '/me'
```

### CRUD Operations

Mobx MC relies on the [Axios](https://github.com/axios/axios) library for making http requests. All CRUD related methods return a promise that will resolve to either the model instance or an error object.

You can pass in Axios specific configuration by passing an additional `axios` object inside `options` for any method.

```javascript
model
  .fetch({
    axios: {
      timeout: 1000
    }
  })
  .then(model => {})
  .catch(error => {});
```

### fetch(options)

Resets the model's `attributes` with data fetched from the server. Useful if the model has never been populated with data, or if you'd like to ensure that you have the latest server state.

Calling `model.fetch` will toggle a `fetching` observable property so you can respond accordingly to the status of the http `GET` request (e.g. To show a loading animation).

##### Options

- `params` (Object) - Used to dynamically add query parameters to the url when fetching.
- `url` (String) - On some occasions it may be desirable to override the `url` for a single request. The request will default to `model.url()` when this is not explicitly configured.

In addition to the above, you can also pass in any options supported by the `set` method and these will be passed through to that method when handling the response from the server.

```javascript
class User extends Model {
  urlRoot = '/users';
}

const user = new User({
  id: 1
});

user.fetch(); // GET request to '/users/1'

user.fetch({
  url: '/me'
  params: {
    includeRole: true
  }
});  // GET request to '/me?includeRole=true'
```

### save(data, options)

The `data` argument should contain the attributes you'd like to change - attributes that aren't provided will not be sent in the resulting request. You can pass `null` to send a copy of all the attributes currently in memory.

If the model `isNew`, the save will be a "create" (`POST`). If the model already exists on the server, the save will be an "update" (`PATCH`).

Calling `model.save` will toggle a `saving` observable property so you can respond accordingly to the status of the http request.

#### Options

- `wait` (Boolean) - Pass `{wait: true}` if you'd like to wait for the server to respond before updating the model's attributes. The default for this option is `false` which performs an optimistic update.
- `method` (String) - Passed down to Axios to override the request method. e.g. Your API may require a `PUT` request so you could pass `method: PUT` in the options when calling `save`.
- `url` (String) - On some occasions it may be desirable to override the `url` for a single request. The request will default to `model.url()` when this is not explicitly configured.

In addition to the above, you can also pass in any options supported by the `set` method and these will be passed through to that method when handling the response from the server.

```javascript
const user = new User({
  firstName: 'Clark',
  lastName: 'Kent'
});

user.save();

// Sends a POST request to /users with all of the model's attributes
{
  "firstName": "Clark",
  "lastName": "Kent"
}

// Subsequent saves update the model
user.save({
  firstName: "Super"
});

// Sends a PATCH request to /users/1
{
  "firstName": "Super"
}

```

### destroy(options)

Sends an `DELETE` request to the model's URL, and if the request is successful it also removes the model from the collection it belongs to.

Calling `model.delete` will toggle a `deleting` observable property so you can respond accordingly to the status of the http request.

#### Options

- Pass `{wait: true}` if you'd like to wait for the server to respond before removing the model from it's collection.

```javascript
user.destroy(); // Sends a DELETE request to the model's url.
```

---

## Collection

To create a **Collection** class of your own, you extend **Collection** and provide instance properties and options for your class. Typically, this is when you'll define the `url` for the related resource and a `model` class that you would like your collection to contain.

```js
import { computed } from 'mobx';
import { Collection } from 'mobx-mc';

class Users extends Collection {
  url() {
    return '/users';
  }

  model() {
    return User;
  }
}
```

### constructor(attributes, options)

When creating an instance of a collection you can pass in a data object (or JSON) to populate the models.

```javascript
const users = new Users([
  {
    id: '1',
    firstName: 'Clark',
    lastName: 'Kent'
  },
  {
    id: '2',
    firstName: 'Tony',
    lastName: 'Stark'
  }
]);

console.log(users.length); // 2
```

As a second argument you can pass in a configuration object with options to pass through to the `set` method, and the `applyOptions` method used to set up references to other class instances.

```javascript
import rootStore from 'stores/index';

const users = new Users(
  [
    {
      id: '1',
      firstName: 'Clark',
      lastName: 'Kent'
    },
    {
      id: '2',
      firstName: 'Tony',
      lastName: 'Stark'
    }
  ],
  {
    rootStore: rootStore
  }
);
```

### applyOptions(options)

Override this method to customize how you would like to handle any additional options passed in when a collection is initialized.

```javascript
applyOptions(options) {
  if (options.rootStore) {
    this.rootStore = options.rootStore;
  }
}
```

### model(type)

Override this method to specify the model class that the collection contains. If defined, you can pass raw objects (and arrays) to `add` and `reset`, and the attributes will be converted into a model of the proper type.

### models

The **models** property is a reference to a [Mobx Observable Array](https://mobx.js.org/refguide/array.html) that holds an instance of each model in the collection. The collection's `set` method will keep this array updated when fetching and saving data to the server.

You can use any of the methods available for ES6 Arrays and Mobx Arrays.

### length

Shortcut property equivalent to `models.length`

### set(data, options)

The **set** method performs a "smart" update of the the **models** array with the passed list of models:

- If a model in the list isn't in the collection, it will be added.
- If the collection contains any models that aren't in the list, they'll be removed.
- If a model in the list is in the collection already, its attributes will be updated.

If you'd like to customize the behavior, you can configure it with options:

#### Options

- `add` (Boolean)
- `remove` (Boolean)
- `update`(Boolean)

When using the `update` option, the default behaviour is a full reset of each model's attributes, deleting any keys not specifed in `data`. Pass `merge:true` if you would like to merge in the `data` and keep all existing keys in-tact.

- `merge`(Boolean)

### parse(data)

Called internally by the `set` method before applying `data` to the `models` array.

The default implementation is a no-op, simply passing through the `data`. Override this if your data needs to be modified, remapped, renamed, etc.

```javascript
class Users extends Collection {
  model() {
    return User;
  }

  parse(data) {
    return data.collection;
  }
}

const users = new Users({
  collection: [
    {
      id: '1',
      firstName: 'Clark',
      lastName: 'Kent'
    },
    {
      id: '2',
      firstName: 'Tony',
      lastName: 'Stark'
    }
  ]
});

console.log(users.length); // 2
```

### get(id)

Get a model from a collection, specified by an `id` or `cid`.

```javascript
const users = new Users([
  {
    id: '1',
    firstName: 'Clark',
    lastName: 'Kent'
  },
  {
    id: '2',
    firstName: 'Tony',
    lastName: 'Stark'
  }
]);

console.log(users.get('2').firstName); // Tony
```

### at(index)

Get a model from a collection, specified by `index`. Equivalent of `collection.models[index]`. i.e. `collection.at(0)` returns the first model in the collection.

### add(models, options)

Add a model (or an array of models) to the collection. If a Model class is defined, you may also pass raw model data and options, and have them be vivified as instances of the model using the provided options. Returns the updated `models` array.

#### Options

- `at` Pass `{at: index}` to splice the model into the collection at the specified `index`

You can also pass in any options supported by the `set` method and these will be passed through to that method when adding the new models to the collection.

### getOrAdd(data)

Attempts to find a model with the same `idAttribute` passed in the `data` object and return it. If no pre-existing model is found, it will add the new model, then return it.

### remove(models)

Remove a model (or an array of models) from the collection. The models object/array can be references to actual models, or raw data objects.

### reset(array)

Call `reset(array)` to replace a collection with a new list of models (or attribute hashes). Calling `collection.reset()` without passing any models as arguments will empty the entire collection.

### url()

Set the **url** method on a collection to reference its location on the server. Models within the collection will use **url** to construct URLs of their own.

```javascript
import { computed } from 'mobx';
import { Collection } from 'mobx-mc';

class Users extends Collection {
  url() {
    return '/users';
  }

  model() {
    return User;
  }
}

const users = new Users();

const user = users.add({
  {
    "firstName": "Clark",
    "lastName": "Kent"
  }
});

user.save(); // POST request sent to /users

users.fetch() // GET request sent to /users
```

### CRUD Operations

Mobx MC relies on the [Axios](https://github.com/axios/axios) library for making http requests. All CRUD related methods return a promise that will resolve to either the collection, newly created model instance or an error object.

You can pass in Axios specific configuration by passing an additional `axios` object inside `options` for any method.

### fetch(options)

Fetch the a set of models for the collection from the server, setting them on the collection's `models` array when they arrive.

You can pass in any options supported by the `set` method and these will be passed through to that method when handling the response from the server.

Calling `model.fetch` will toggle a `fetching` observable property so you can respond accordingly to the status of the http `GET` request (e.g. To show a loading animation).

#### Options

- `params` (Object) - Used to dynamically add query parameters to the url when fetching.
- `url` (String) - On some occasions it may be desirable to override the `url` for a single request. The request will default to `collection.url()` when this is not explicitly configured.

```javascript
users.fetch({
  params: {
    page: 2
  }
});

// GET request to '/users?page=2'.
```

### create(data, options)

Convenience to create a new instance of a model within a collection. Equivalent to instantiating a model with new data, saving the model to the server, and adding the model to the collection after being successfully created. Returns a promise that resolves with the newly created model.

#### Options

- Pass `{wait: true}` if you'd like to wait for the server before adding the new model to the collection.
- `url` (String) - On some occasions it may be desirable to override the `url` for a single request. The request will default to `collection.url()` when this is not explicitly configured.

You can pass in any options supported by the `set` method and these will be passed through to that method when handling the response from the server.

```javascript
const newUser = users.create({
  firstName: 'Peter',
  lastName: 'Parker'
});

// POST request to '/users'.  New model added to the collection
```

### getOrFetch(id, options)

Convenience method. Gets a model from the server or from the collection if a model with that `id` already exists.

## Where is it used?

Developed and tested in production at [Raken](https://www.rakenapp.com/)

## License

MIT

## Credits

Many of the ideas here should be credited to [Jeremy Ashkenas](https://github.com/jashkenas) and the rest of the Backbone.js authors.

Thanks to [Michel Westrate](https://github.com/mweststrate) for Mobx.
