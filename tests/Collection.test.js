import request from 'axios';
import Collection from '../src/Collection';
import Model from '../src/Model';

import { usersData, companiesData } from './fixtures/collections';

let collection;
let rootStore;
let parent;

class UserModel extends Model {
  get restAttributes() {
    return [
      'id',
      'title',
      'firstName',
      'lastName',
      'email',
      'phone',
      'isPending'
    ];
  }
}

class UserCollection extends Collection {
  model() {
    return UserModel;
  }
}

describe('Collection', () => {
  describe('constructor with no initial state', () => {
    let spy;
    beforeEach(() => {
      spy = jest.spyOn(Collection.prototype, 'set');

      //main store of an App
      rootStore = {
        name: 'My App'
      };

      //each model can have it's own collections
      parent = {
        name: 'My Parent Model'
      };

      collection = new Collection([], {
        rootStore: rootStore,
        parent: parent
      });
    });

    it('Creates a models observable array', () => {
      expect(collection.models).toBeDefined();
    });

    it('Sets the request labels to falsey by default', () => {
      expect(collection.fetching).toBeFalsy();
      expect(collection.creating).toBeFalsy();
    });

    it('Does not call set method as there is no initial state', () => {
      expect(spy).not.toHaveBeenCalled();
    });

    it('Creates a reference to an optional parent object', () => {
      expect(collection.parent.name).toBe('My Parent Model');
    });
  });

  describe('constructor with initial state', () => {
    it('Calls set method with the initial state', () => {
      const spy = jest.spyOn(Collection.prototype, 'set');

      collection = new Collection(usersData);

      expect(spy).toHaveBeenCalledWith(usersData);
    });
  });

  describe('url method', () => {
    it('Create the URL for the collection', () => {
      class SubCollection extends Collection {
        url() {
          return 'jsonapi/users';
        }
      }

      collection = new SubCollection();

      expect(collection.url()).toEqual('jsonapi/users');
    });
  });

  describe('model method', () => {
    it('returns the model class by default', () => {
      collection = new Collection();

      expect(collection.model()).toEqual(Model);
    });

    it('can be overridden to return a different model class', () => {
      class SubModel extends Model {}

      class SubCollection extends Collection {
        model() {
          return SubModel;
        }
      }

      collection = new SubCollection();

      expect(collection.model()).toEqual(SubModel);
    });
  });

  describe('length getter', () => {
    beforeEach(() => {
      collection = new Collection(usersData);
    });

    it('returns the length of collection.models', () => {
      expect(collection.length).toEqual(4);
    });
  });

  describe('hasModels getter', () => {
    beforeEach(() => {
      collection = new Collection(usersData);
    });

    it('returns true if the length collection.models is greater than 0', () => {
      expect(collection.length).toEqual(4);
      expect(collection.hasModels).toBeTruthy();
      collection.clear();
      expect(collection.hasModels).toBeFalsy();
    });
  });

  describe('ids method', () => {
    beforeEach(() => {
      collection = new Collection(usersData);
    });

    it('returns the unique ids for every model in the collection', () => {
      expect(collection.ids()).toEqual([1, 2, 3, 4]);
    });
  });

  describe('get method', () => {
    beforeEach(() => {
      collection = new UserCollection(usersData);
    });

    it('returns the the model with the given unique id', () => {
      const model = collection.get(2);
      expect(model.firstName).toEqual('John');
    });
  });

  describe('at method', () => {
    beforeEach(() => {
      collection = new UserCollection(usersData);
    });

    it('returns the the model at the give index', () => {
      const model = collection.at(0);
      expect(model.firstName).toEqual('Bill');
    });
  });

  describe('setRequestLabel action', () => {
    beforeEach(() => {
      collection = new Collection();
    });

    it('Sets the give prop to the boolean value', () => {
      collection.setRequestLabel('creating', true);
      expect(collection.creating).toBeTruthy();
      collection.setRequestLabel('creating', false);
      expect(collection.creating).toBeFalsy();
    });
  });

  describe('set action', () => {
    beforeEach(() => {
      jest.spyOn(Collection.prototype, 'setModels');
    });

    it('Calls the correct set method for each data type', () => {
      collection = new Collection(usersData);

      expect(collection.setModels).toHaveBeenCalledWith(usersData, {
        add: true,
        update: true,
        remove: true,
        merge: false
      });
    });

    it('Resets the models if no collection array is passed in and options.remove is truthy', () => {
      collection = new Collection(usersData);

      expect(collection.length).toBe(4);

      collection.set(
        {
          page: {
            totalElements: 0
          }
        },
        {
          remove: false
        }
      );

      expect(collection.length).toBe(4);

      collection.set(
        {
          page: {
            totalElements: 0
          }
        },
        {
          remove: true
        }
      );

      expect(collection.length).toBe(0);
    });
  });

  describe('setModels action with default options', () => {
    beforeEach(() => {
      collection = new UserCollection();

      collection.setModels([
        {
          id: '3',
          type: 'User',
          title: 'Mr',
          firstName: 'James',
          lastName: 'Thomas',
          email: 'james.thomas@example.com',
          phone: '012345678'
        },
        {
          id: '2',
          type: 'User',
          title: 'Master',
          firstName: 'John',
          lastName: 'Jones',
          email: 'john.jones@example.com',
          phone: '012345678'
        }
      ]);
    });

    it('Should add new models passed in', () => {
      expect(collection.get('3')).toBeDefined();
    });

    it('Should remove existing models that are not passed in', () => {
      expect(collection.get('1')).not.toBeDefined();
    });

    it('Should update existing models that are passed in', () => {
      expect(collection.get('2').title).toEqual('Master');
    });
  });

  describe('setModels action with add option set to falsy', () => {
    beforeEach(() => {
      collection = new Collection(usersData.slice(0, 2));

      collection.setModels(
        [
          {
            id: 3,
            type: 'User',
            title: 'Mr',
            firstName: 'James',
            lastName: 'Thomas',
            email: 'james.thomas@example.com',
            phone: '012345678'
          },
          {
            id: 2,
            type: 'User',
            title: 'Master',
            firstName: 'John',
            lastName: 'Jones',
            email: 'john.jones@example.com',
            phone: '012345678'
          }
        ],
        { add: false, update: true, remove: true }
      );
    });

    it('Should not add new models to the collection', () => {
      expect(collection.length).toEqual(1);
    });
  });

  describe('setModels action with update option set to falsy', () => {
    beforeEach(() => {
      collection = new UserCollection(usersData);

      collection.setModels(
        [
          {
            id: 3,
            type: 'User',
            title: 'Mr',
            firstName: 'James',
            lastName: 'Thomas',
            email: 'james.thomas@example.com',
            phone: '012345678'
          },
          {
            id: 2,
            type: 'User',
            title: 'Master',
            firstName: 'John',
            lastName: 'Jones',
            email: 'john.jones@example.com',
            phone: '012345678'
          }
        ],
        { add: true, update: false, remove: true }
      );
    });

    it('Should not update existing models', () => {
      expect(collection.get(2).title).toEqual('Mr');
    });
  });

  describe('setModels action with remove options set to falsy', () => {
    beforeEach(() => {
      collection = new UserCollection(usersData);

      collection.setModels(
        [
          {
            id: 3,
            type: 'User',
            title: 'Mr',
            firstName: 'James',
            lastName: 'Thomas',
            email: 'james.thomas@example.com',
            phone: '012345678'
          },
          {
            id: 2,
            type: 'User',
            title: 'Master',
            firstName: 'John',
            lastName: 'Jones',
            email: 'john.jones@example.com',
            phone: '012345678'
          }
        ],
        { add: true, update: true, remove: false }
      );
    });

    it('Should not remove models from the collection', () => {
      expect(collection.length).toEqual(4);
    });
  });

  describe('add action', () => {
    beforeEach(() => {
      jest.spyOn(Collection.prototype, 'setModels');

      collection = new UserCollection();
    });

    it('Calls set function with the passed in model(s) with only the add option set to truthy', () => {
      const modelJSON = {
        id: '2',
        type: 'User',
        title: 'Mr',
        firstName: 'Tim',
        lastName: 'Smith',
        email: 'tim.smith@example.com',
        phone: '012345678'
      };

      collection.add(modelJSON);

      expect(collection.setModels).toHaveBeenCalledWith([modelJSON], {
        add: true,
        remove: false,
        update: false,
        merge: false
      });

      expect(collection.at(0).firstName).toEqual('Tim');
    });

    it('Can receive a single JSON representation of a model', () => {
      collection.add({
        id: '1',
        type: 'User',
        title: 'Mr',
        firstName: 'Bill',
        lastName: 'Murray',
        email: 'lostintranslation@example.com',
        phone: '012345678'
      });

      expect(collection.get('1').email).toEqual(
        'lostintranslation@example.com'
      );
    });

    it('Can receive a single model instance', () => {
      collection = new UserCollection();

      const newModel = new UserModel({
        id: '2',
        type: 'users',
        title: 'Mr',
        firstName: 'John',
        lastName: 'Jones',
        email: 'john.jones@example.com',
        phone: '012345678'
      });

      collection.add(newModel);

      expect(collection.get('2').email).toEqual('john.jones@example.com');
    });

    it('Can receive an array of JSON representations', () => {
      collection.add(usersData);

      expect(collection.get(1).email).toEqual('lostintranslation@example.com');
      expect(collection.get(2).email).toEqual('john.jones@example.com');
    });

    it('Can receive an array of model instances', () => {
      collection = new UserCollection();

      const newModel1 = new UserModel(usersData[0]);

      const newModel2 = new UserModel(usersData[1]);

      collection.add([newModel1, newModel2]);

      expect(collection.get(1).email).toEqual('lostintranslation@example.com');
      expect(collection.get(2).email).toEqual('john.jones@example.com');
    });
  });

  describe('getOrAdd action', () => {
    beforeEach(() => {
      collection = new UserCollection(usersData);
    });

    it('Returns an existing model if the id of the passed in attributes is found', () => {
      expect(
        collection.getOrAdd({
          id: 2,
          type: 'User'
        }).lastName
      ).toBe('Jones');
    });

    it('Adds a new model if the id of the passed in attributes is not found', () => {
      collection.getOrAdd({
        id: 5,
        type: 'User',
        title: 'Mrs',
        firstName: 'Aimee',
        lastName: 'Sorrell',
        email: 'aimee@example.com',
        phone: '0211912340',
        company: {
          id: 5
        }
      });

      expect(collection.length).toBe(5);
    });
  });

  describe('updateOrAdd action', () => {
    beforeEach(() => {
      collection = new UserCollection(usersData);
    });

    it('Updates and returns an existing model if the id of the passed in attributes is found', () => {
      expect(collection.at(2).isPending).toBeFalsy();

      expect(
        collection.updateOrAdd({
          id: 2,
          isPending: true
        }).isPending
      ).toBeTruthy();
    });

    it('Adds a new model if the id of the passed in attributes is not found', () => {
      collection.updateOrAdd({
        id: 5,
        type: 'User',
        title: 'Mrs',
        firstName: 'Aimee',
        lastName: 'Sorrell',
        email: 'aimee@example.com',
        phone: '0211912340',
        company: {
          id: 5
        }
      });

      expect(collection.length).toBe(5);
    });
  });

  describe('pushModels action', () => {
    it('Instantiates models from JSON', () => {
      collection = new UserCollection();

      collection.pushModels({
        id: '1',
        title: 'Mr',
        firstName: 'Bill',
        lastName: 'Murray',
        email: 'lostintranslation@example.com',
        phone: '012345678'
      });

      expect(collection.get('1').email).toEqual(
        'lostintranslation@example.com'
      );
    });

    it('Accepts model instances', () => {
      collection = new UserCollection();

      const newModel1 = new UserModel(usersData[0]);

      const newModel2 = new UserModel(usersData[1]);

      collection.pushModels([newModel1, newModel2]);

      expect(collection.get(1).email).toEqual('lostintranslation@example.com');
      expect(collection.get(2).email).toEqual('john.jones@example.com');
    });

    it('Rejects model instances that are not dervied from the correct class', () => {
      collection = new UserCollection();

      const model = new Model();

      expect(() => {
        collection.pushModels(model);
      }).toThrow(new Error('Collection can only hold UserModel models.'));
    });

    it('Sets a reference to the collection on the child models', () => {
      collection = new UserCollection();

      const newModel1 = new UserModel(usersData[0]);

      collection.pushModels([newModel1]);

      expect(collection.at(0).collection).toEqual(collection);
    });

    it('Sets reference to the rootStore on the child models', () => {
      rootStore = {};

      collection = new UserCollection(null, {
        rootStore: rootStore
      });

      const newModel1 = new UserModel(usersData[0]);

      collection.pushModels([newModel1]);

      expect(collection.at(0).rootStore).toEqual(rootStore);
    });
  });

  describe('remove action', () => {
    beforeEach(() => {
      jest.spyOn(Collection.prototype, 'spliceModels');
      collection = new Collection(usersData);
    });

    it('Finds the unique ids of the models(s) and passes them to the spliceModels action', () => {
      collection.remove([collection.at(0)]);

      expect(collection.spliceModels).toHaveBeenCalledWith([1]);
      expect(collection.length).toEqual(3);

      const newModel = new Model();

      // Add a new model with no server Id.
      collection.add(newModel);

      collection.remove([collection.at(3)]);

      expect(collection.spliceModels).toHaveBeenCalledWith([newModel.uniqueId]);
      expect(collection.length).toEqual(3);
    });
  });

  describe('spliceModels action', () => {
    beforeEach(() => {
      collection = new Collection(usersData);
    });

    it('Removes the models with the given ids (or uuid)', () => {
      const newModel = new Model();

      // Add a new model with no server Id.
      collection.add(newModel);

      expect(collection.length).toEqual(5);

      collection.spliceModels([2]);

      expect(collection.length).toEqual(4);

      collection.spliceModels([newModel.uniqueId]);

      expect(collection.length).toEqual(3);
    });
  });

  describe('fetch action', () => {
    beforeEach(() => {
      class SubCollection extends Collection {
        url() {
          return '/api/v1/businesses';
        }
      }

      collection = new SubCollection();
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('Sets the fetching request label to truthy', () => {
      collection
        .fetch()
        .then(() => {})
        .catch(() => {});

      expect(collection.fetching).toBeTruthy();
    });

    it('Calls a get request with the collections url by default', () => {
      jest.spyOn(request, 'get');

      collection
        .fetch()
        .then(() => {})
        .catch(() => {});

      expect(request.get).toHaveBeenCalledWith(collection.url(), {
        cancelToken: expect.anything(),
        params: {},
        paramsSerializer: expect.anything()
      });
    });

    it('Calls a get request with the url passed in though options', () => {
      jest.spyOn(request, 'get');

      collection
        .fetch({
          url: '/api/v1/users/1/businesses'
        })
        .then(() => {})
        .catch(() => {});

      expect(request.get).toHaveBeenCalledWith('/api/v1/users/1/businesses', {
        cancelToken: expect.anything(),
        params: {},
        paramsSerializer: expect.anything()
      });
    });

    it('Sends any params included in the options argument', () => {
      jest.spyOn(request, 'get');

      collection
        .fetch({
          params: {
            included: 'projects'
          }
        })
        .then(() => {})
        .catch(() => {});

      expect(request.get).toHaveBeenCalledWith(collection.url(), {
        cancelToken: expect.anything(),
        params: { included: 'projects' },
        paramsSerializer: expect.anything()
      });
    });

    it('Calls the set action if the request is successful', async () => {
      jest.spyOn(Collection.prototype, 'set');

      jest.spyOn(request, 'get').mockImplementation(function () {
        return {
          then(cb) {
            cb.call(null, {
              status: 200,
              data: companiesData
            });

            return this;
          },
          catch: () => {}
        };
      });

      await collection.fetch();

      expect(collection.set).toHaveBeenCalledWith(companiesData, {
        add: true,
        update: true,
        remove: true,
        merge: false
      });

      expect(collection.fetching).toBeFalsy();
    });

    it('Passes the set options through to the set action', async () => {
      jest.spyOn(Collection.prototype, 'set');

      jest.spyOn(request, 'get').mockImplementation(function () {
        return {
          then(cb) {
            cb.call(null, {
              status: 200,
              data: companiesData
            });

            return this;
          },
          catch: () => {}
        };
      });

      await collection.fetch({
        add: true,
        update: false,
        merge: false,
        remove: false
      });

      expect(collection.set).toHaveBeenCalledWith(companiesData, {
        add: true,
        update: false,
        remove: false,
        merge: false
      });
    });

    it('allows for the individual set options to be overriden', async () => {
      jest.spyOn(Collection.prototype, 'set');

      jest.spyOn(request, 'get').mockImplementation(function () {
        return {
          then(cb) {
            cb.call(null, {
              status: 200,
              data: companiesData
            });

            return this;
          },
          catch: () => {}
        };
      });

      await collection.fetch({ remove: false });

      expect(collection.set).toHaveBeenCalledWith(companiesData, {
        add: true,
        update: true,
        remove: false,
        merge: false
      });
    });

    it('Sets the fetching request label to falsy if the request fails', async () => {
      jest.spyOn(Collection.prototype, 'set');

      jest.spyOn(request, 'get').mockImplementation(() => {
        return new Promise((resolve, reject) => {
          reject(new Error('Request failed'));
        });
      });

      await collection.fetch();

      expect(collection.set).not.toHaveBeenCalled();
      expect(collection.fetching).toBeFalsy();
    });
  });

  describe('create action', () => {
    it('Exits if called with and model id that already exists in collection', () => {
      collection = new Collection();

      collection.add(usersData);

      // No op as model with id exists
      collection.create({
        id: 1,
        type: 'User',
        title: 'Mr',
        firstName: 'Bill',
        lastName: 'Murray',
        email: 'lostintranslation@example.com',
        phone: '012345678'
      });

      expect(collection.length).toEqual(4);
    });

    it('Creates a new model instance with the passed in data, returns instance once promise is resolved.', async () => {
      collection = new Collection();

      jest.spyOn(request, 'post').mockImplementation(function () {
        return {
          then(cb) {
            cb.call(null, {
              status: 201
            });
            return this;
          },
          catch: () => {}
        };
      });

      // No op as model with id exists
      const model = await collection.create({
        type: 'User',
        title: 'Mr',
        firstName: 'Bill',
        lastName: 'Murray',
        email: 'lostintranslation@example.com',
        phone: '012345678'
      });

      expect(collection.length).toBe(1);
      expect(model instanceof Model).toBeTruthy();
    });

    it('Adds the new model to the collection immediately if wait options is falsy', async () => {
      jest.spyOn(Model.prototype, 'create').mockImplementation(function () {
        return {
          then(cb) {
            setTimeout(() => {
              cb.call(null, {
                status: 201
              });
            }, 1000);

            return this;
          },
          catch: () => {}
        };
      });

      collection = new Collection();

      await collection.create(
        {
          type: 'User',
          title: 'Mr',
          firstName: 'Bill',
          lastName: 'Murray',
          email: 'lostintranslation@example.com',
          phone: '012345678'
        },
        { wait: false }
      );

      expect(collection.length).toEqual(1);
    });

    it('Adds the new model only after successful creation on server if wait options is truthy', async () => {
      jest.spyOn(Model.prototype, 'create').mockImplementation(function () {
        return new Promise(resolve => {
          return setTimeout(() => {
            resolve({
              type: 'User',
              title: 'Mr',
              firstName: 'Bill',
              lastName: 'Murray',
              email: 'lostintranslation@example.com',
              phone: '012345678'
            });
          }, 100);
        });
      });

      collection = new Collection();

      const promise = collection.create(
        {
          type: 'User',
          title: 'Mr',
          firstName: 'Bill',
          lastName: 'Murray',
          email: 'lostintranslation@example.com',
          phone: '012345678'
        },
        { wait: true }
      );

      expect(collection.length).toEqual(0);

      // Fast-forward until all timers have been executed
      jest.runOnlyPendingTimers();

      await promise;

      expect(collection.length).toEqual(1);
    });

    it('Sets the creating label to truthy if wait option is truthy', async () => {
      jest.spyOn(Model.prototype, 'create').mockImplementation(() => {
        return new Promise(resolve => {
          resolve();
        });
      });

      collection = new Collection();

      collection.create(
        {
          type: 'User',
          title: 'Mr',
          firstName: 'Bill',
          lastName: 'Murray',
          email: 'lostintranslation@example.com',
          phone: '012345678'
        },
        { wait: true }
      );

      expect(collection.saving).toBeTruthy();
    });

    it('Calls the create action on the model with the collections URL', async () => {
      jest.spyOn(Model.prototype, 'create').mockImplementation(function () {
        return new Promise(resolve => {
          resolve(this);
        });
      });

      collection = new Collection();

      await collection.create({
        type: 'User',
        title: 'Mr',
        firstName: 'Bill',
        lastName: 'Murray',
        email: 'lostintranslation@example.com',
        phone: '012345678'
      });

      expect(Model.prototype.create.mock.lastCall[1].url).toEqual(
        collection.url()
      );
    });

    it('Sets the creating label to falsy after the model.create method completes successfuly', async () => {
      jest.spyOn(Model.prototype, 'create').mockImplementation(function () {
        return new Promise(resolve => {
          return setTimeout(() => {
            resolve({
              type: 'User',
              title: 'Mr',
              firstName: 'Bill',
              lastName: 'Murray',
              email: 'lostintranslation@example.com',
              phone: '012345678'
            });
          }, 100);
        });
      });

      collection = new Collection();

      const promise = collection.create(
        {
          type: 'User',
          title: 'Mr',
          firstName: 'Bill',
          lastName: 'Murray',
          email: 'lostintranslation@example.com',
          phone: '012345678'
        },
        { wait: true }
      );

      expect(collection.saving).toBeTruthy();

      // Fast-forward until all timers have been executed
      jest.runOnlyPendingTimers();

      await promise;

      expect(collection.saving).toBeFalsy();
    });

    it('Sets the creating label to falsy after the model.create method fails', async () => {
      jest.spyOn(Model.prototype, 'create').mockImplementation(function () {
        return new Promise(resolve, reject => {
          reject();
        });
      });

      collection = new Collection();

      await collection.create(
        {
          type: 'User',
          title: 'Mr',
          firstName: 'Bill',
          lastName: 'Murray',
          email: 'lostintranslation@example.com',
          phone: '012345678'
        },
        { wait: true }
      );

      expect(collection.saving).toBeFalsy();
    });
  });

  describe('reset action', () => {
    beforeEach(() => {
      collection = new UserCollection(usersData);
    });

    it('Removes all the models from the collection', () => {
      expect(collection.length).toBe(4);
      collection.reset();
      expect(collection.length).toBe(0);
    });
  });
});
