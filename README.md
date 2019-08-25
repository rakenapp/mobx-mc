# Mobx-mc
Mobx model-collection library

mobx-mc 1.0.0  supports  Mobx v.4
A demo-application and documentation will be available soon

### Installation

```
npm install mobx-mc
yarn add mobx-mc
```
## `Collections`

* Base Class 
```
import { Collection } from 'mobx-mc'
```

Heavily inpsired by Backbone Collections. These normally map directly to a single resource on the API. They are used to fetch and store models from the API. Collections closely resembles the concept of a Domain Store described here in the mobx best practices section here:

https://mobx.js.org/best/store.html#domain-stores.

### Properties

* ### collection.url

Defines a URL (normally an API endpoint) to fetch models from. Models within the collection will use url to construct URLs of their own.

* ### collection.model

Defines a reference to a Class which will be used to instanitate any models added to it. When defined, you can pass raw attributes objects (and arrays) to add, create, and reset, and the attributes will be converted into a model of the proper type.

* ### collection.models

An observable array containing all of the individual models that belongin the collection.

* ### collection.length

Convienience property to get the number of models currently in the collection. Equivalent to `collections.models.length`.

### Methods / Actions

**Note:** All of the methods/actions below return a `Promise` so you can associate handlers with an asynchronous action's eventual success value or failure reason.

* ### collection.set(models, options)

The set method performs a "smart" update of the collection with the passed list of models. If a model in the list isn't yet in the collection it will be added; if the model is already in the collection its attributes will be merged; and if the collection contains any models that aren't present in the list, they'll be removed.

If you'd like to customize the behavior, you can disable it with options: {add: false}, {remove: false}, or {merge: false}.

* ### collection.fetch(options)

Fetch the models for this collection from the server, setting them on the collection when they arrive. The behavior of fetch can be customized by using the available **set** options.

* ### collection.at(index)

Get a model from a collection, specified by index. Useful if your collection is sorted, and if your collection isn't sorted, at will still retrieve models in insertion order. When passed a negative index, it will retrieve the model from the back of the collection.

* ### collection.get(id)

Get a model from a collection, specified by an id.

* ### collection.add(models, options)

Add a model (or an array of models) to the collection.

* ### collection.remove(models, options)

Remove a model (or an array of models) from the collection, and return them.

* ### collection.create(json, options)

Convenience to create a new instance of a model within a collection. Equivalent to instantiating a model with a hash of attributes, saving the model to the server, and adding the model to the set after being successfully created.

## `Models`

* Base Class 
```
import { Model } from 'mobx-mc'
```

Heavily inpsired by Backbone Models. Models closely resembles the concept of a Domain Object described here: https://mobx.js.org/best/store.html#domain-objects

### Properties

* ### model.restAttribtues

Defines a white-label list of attributes which be read from and written to to the server/API. Any attributes not defined in this list will be ignored when performing actions such as `fetch` and `save`. This ensures the payload is always kept to a minimum and the server does not receive non-supported fieldnames.

* ### model.restAttributeDefaults

Defines a map of default values for attributes that may not always be available from the server.

* ### model.url

If a model does not belong to a collection you can define a url directly on the model. An example would be model for the authenticated user with an url of `api/me`.

* ### model.isNew

Has this model been saved to the server yet? If the model does not yet have an id, it is considered to be new.

### Methods / Actions

**Note:** All of the methods/actions below return a `Promise` so you can associate handlers with an asynchronous action's eventual success value or failure reason.

* ### model.fetch()

Fetches the model's latest state from the server. Useful if a model does not belong to a collection or you simply waht to get the latest state of a model independantly.

* ### model.save(attributes, options)

If the model `isNew`, the save will be a "create" (HTTP POST), if the model already exists on the server, the save will be an "update" (HTTP PATCH).

Pass `{wait: true}` if you'd like to wait for the server to respond before updating the models attributes.

* ### model.destroy(options)

Sends an HTTP DELETE request to the models URL, then if the request is successful it also removes the model from the collection it belongs to.

Pass `{wait: true}` if you'd like to wait for the server to respond before removing the model from the collection.

* ### model.parse(attributes)

Parse is called whenever a model's data is returned by the server, in fetch, and save. The function is passed the raw response object, and should return the attributes hash to be set on the model. The default implementation is a no-op, simply passing through the JSON response. Override this if you need parse attributes into further child models and/or collections or simply modify the data in some way before it gets set in the models attributes map.

