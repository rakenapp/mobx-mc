import omit from 'lodash.omit';
import request from 'axios';
import { observable, makeObservable } from 'mobx';
import Model from '../src/Model';
import Collection from '../src/Collection';
import { userData, companyData } from './fixtures/models';

let model;
let collection;
let rootStore;

describe('Model', () => {
  beforeEach(() => {
    jest.spyOn(Model.prototype, 'set');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('constructor with no initial state', () => {
    beforeEach(() => {
      collection = {};
      rootStore = {};

      model = new Model(null, {
        collection: collection,
        rootStore: rootStore
      });
    });

    it('Sets up a reference to the collection', () => {
      expect(model.collection).toEqual(collection);
    });

    it('Sets up a reference to the rootStore', () => {
      expect(model.rootStore).toEqual(rootStore);
    });

    it('Sets up an client uuid', () => {
      expect(model.cid).toBeDefined();
    });
  });

  describe('constructor with initial state', () => {
    it('Calls set method with the initial state', () => {
      model = new Model({
        name: 'John',
        number: 1
      });

      expect(Model.prototype.set).toHaveBeenCalledWith(
        {
          name: 'John',
          number: 1
        },
        { parse: true, stripUndefined: true, stripNonRest: true }
      );
    });
  });

  describe('url method', () => {
    it('Returns url for the model.', () => {
      class SubModel extends Model {
        url() {
          return '/api/v1/userData';
        }
      }

      model = new SubModel();

      expect(model.url()).toEqual('/api/v1/userData');
    });

    it('can use the urlRoot property as a base.', () => {
      class SubModel extends Model {
        urlRoot = '/api/v1/people';
      }

      model = new SubModel();

      expect(model.url()).toEqual('/api/v1/people');

      model.id = 2;

      expect(model.id).toBe(2);
      expect(model.url()).toEqual('/api/v1/people/2');
    });

    it('can use the collection URL or function.', () => {
      collection = {
        url() {
          return '/api/v1/people';
        }
      };

      model = new Model(null, {
        collection: collection
      });

      expect(model.url()).toEqual('/api/v1/people');

      model.id = 2;

      expect(model.url()).toEqual('/api/v1/people/2');
    });
  });

  describe('urlId', () => {
    it('Overrides the value used for the URL id of the model', () => {
      class SubModel extends Model {
        urlRoot = '/api/v1/users';

        get restAttributes() {
          return ['id', 'date'];
        }

        get urlId() {
          return this.date;
        }
      }

      model = new SubModel({
        id: 1,
        date: '2017-11-13'
      });

      jest.spyOn(request, 'get').mockImplementation(function () {
        return {
          then(cb) {
            cb.call(null, {
              status: 200,
              data: {}
            });

            return this;
          },
          catch: () => {}
        };
      });

      model.fetch();

      expect(request.get).toHaveBeenCalledWith('/api/v1/users/2017-11-13', {
        cancelToken: expect.anything(),
        params: {}
      });
    });
  });

  describe('uniqueId getter', () => {
    it('Returns the model.id property if it exists', () => {
      model = new Model({
        id: '5',
        name: 'bill'
      });

      expect(model.uniqueId).toEqual('5');
    });

    it('Returns the cid property if the model is new', () => {
      const model = new Model();

      expect(model.uniqueId).toEqual(model.cid);
    });
  });

  describe('idAttribute', () => {
    beforeEach(() => {
      class SubModel extends Model {
        idAttribute() {
          return 'date';
        }
      }

      model = new SubModel({
        date: '2017-11-13'
      });
    });

    it('Sets the id to the idAttribute', () => {
      expect(model.idAttribute()).toBe('date');
      expect(model.restAttributes).toEqual(['date']);
      expect(model.id).toBe('2017-11-13');
    });
  });

  describe('restAttributes', () => {
    it('Defines a white list of fieldnames allowed in the attributes map', async () => {
      jest.spyOn(request, 'post').mockImplementation(function () {
        return new Promise(resolve => {
          resolve({
            status: 200,
            data: {
              title: 'Mr',
              firstName: 'John',
              lastName: 'Doe'
            }
          });
        });
      });

      class SubModel extends Model {
        @observable accessor greeting;

        url() {
          return '/api/me';
        }

        get restAttributes() {
          return ['title', 'firstName', 'lastName'];
        }
      }

      model = new SubModel({
        firstName: 'John',
        middleName: 'Joe',
        lastName: 'Shmow'
      });

      model.greeting = 'Hello';

      expect(model.firstName).toBe('John');
      expect(model.middleName).toBeUndefined();
      expect(model.greeting).toBe('Hello');

      model.lastName = 'Doe';

      await model.save();

      expect(request.post).toHaveBeenCalledWith(
        '/api/me',
        {
          firstName: 'John',
          lastName: 'Doe'
        },
        undefined
      );

      expect(model.toJSON()).toMatchObject({
        title: 'Mr',
        firstName: 'John',
        lastName: 'Doe'
      });
    });
  });

  describe('restAttributeDefaults', () => {
    it('Defines default values for fieldnames in the attributes map', () => {
      class SubModel extends Model {
        get restAttributes() {
          return ['title', 'firstName', 'lastName', 'permissions'];
        }

        get restAttributeDefaults() {
          return {
            title: 'Mr',
            permissions: {
              CAN_CREATE_PROJECTS: true
            },
            phone: '123456'
          };
        }
      }

      model = new SubModel();

      expect(model.title).toBe('Mr');
      expect(model.permissions.CAN_CREATE_PROJECTS).toBeTruthy();
      expect(model.phone).not.toBeDefined();

      model = new SubModel({
        permissions: {
          CAN_CREATE_PROJECTS: false
        }
      });

      expect(model.permissions.CAN_CREATE_PROJECTS).toBeFalsy();
    });

    it('Correctly handles falsy values', () => {
      class SubModel extends Model {
        get restAttributes() {
          return ['milesPerHour'];
        }

        get restAttributeDefaults() {
          return {
            milesPerHour: true
          };
        }
      }

      model = new SubModel();

      expect(model.milesPerHour).toBeTruthy();

      model = new SubModel({ milesPerHour: false });

      expect(model.milesPerHour).toBeFalsy();
    });
  });

  describe('request state properties', () => {
    beforeEach(() => {
      model = new Model();
    });

    it('Provides observable properties for models state', () => {
      expect(model.fetching).toBeDefined();
      expect(model.saving).toBeDefined();
    });
  });

  describe('setRequestLabel action', () => {
    beforeEach(() => {
      model = new Model();
    });

    it('Sets the given prop to a boolean value', () => {
      model.setRequestLabel('saving', true);
      expect(model.saving).toBeTruthy();
      model.setRequestLabel('saving', false);
      expect(model.saving).toBeFalsy();
    });
  });

  describe('set action', () => {
    beforeEach(() => {
      class SubModel extends Model {
        get restAttributes() {
          return ['id', 'name', 'phone'];
        }
      }

      model = new SubModel();
    });

    it('Runs the data through the parse method', () => {
      jest.spyOn(Model.prototype, 'parse');

      model.set(
        {
          name: 'John',
          phone: '012345678',
          address: '59 Rua Road'
        },
        { parse: true }
      );

      expect(Model.prototype.parse).toHaveBeenCalledWith({
        name: 'John',
        phone: '012345678',
        address: '59 Rua Road'
      });
    });

    it('Sets the passed in values as observables', () => {
      model.set({
        name: 'John',
        phone: '012345678',
        address: '59 Rua Road'
      });

      expect(model.name).toEqual('John');
      expect(model.phone).toEqual('012345678');
    });

    it('Strips out attributes that are not rest', () => {
      model.set({
        name: 'John',
        phone: '012345678',
        address: '59 Rua Road'
      });

      expect(model.name).toEqual('John');
      expect(model.phone).toEqual('012345678');
      expect(model.address).not.toBeDefined();
    });

    it('Strips out attributes that are undefined', () => {
      model.set({
        name: 'John',
        phone: '012345678',
        address: undefined
      });

      expect(model.name).toEqual('John');
      expect(model.phone).toEqual('012345678');
      expect(model.pick(['address'])).not.toBe({});
    });
  });

  describe('clear action', () => {
    beforeEach(() => {
      class SubModel extends Model {
        get restAttributes() {
          return ['id', 'name', 'phone'];
        }
      }

      model = new SubModel();
    });

    it('Clears all attributes', () => {
      model.set({
        id: '1',
        name: 'John',
        phone: '012345678'
      });

      expect(model.id).toEqual('1');
      expect(model.name).toBe('John');
      expect(model.phone).toBe('012345678');

      model.clear();

      expect(model.id).not.toBeDefined();
      expect(model.name).not.toBeDefined();
      expect(model.phone).not.toBeDefined();
    });
  });

  describe('fetch action', () => {
    beforeEach(() => {
      class SubModel extends Model {
        get restAttributes() {
          return ['id', 'type', 'firstName', 'lastName', 'username', 'phone'];
        }

        url() {
          return '/api/v1/me';
        }
      }

      model = new SubModel(userData);
    });

    it('Sets the fetching request label to truthy', () => {
      jest.spyOn(request, 'get').mockImplementation(function () {
        return new Promise(resolve => {
          resolve({
            status: 200,
            data: userData
          });
        });
      });

      model.fetch();

      expect(model.fetching).toBeTruthy();
    });

    it('Calls a get request with the models url by default', () => {
      jest.spyOn(request, 'get').mockImplementation(function () {
        return new Promise(resolve => {
          resolve({
            status: 200,
            data: userData
          });
        });
      });

      model.fetch();

      expect(request.get).toHaveBeenCalledWith(model.url(), {
        cancelToken: expect.anything(),
        params: {}
      });
    });

    it('Calls a get request with the url passed in though options', () => {
      jest.spyOn(request, 'get').mockImplementation(function () {
        return new Promise(resolve => {
          resolve({
            status: 200,
            data: userData
          });
        });
      });

      model
        .fetch({
          url: '/api/users/1'
        })
        .then(() => {})
        .catch(() => {});

      expect(request.get).toHaveBeenCalledWith('/api/users/1', {
        cancelToken: expect.anything(),
        params: {}
      });
    });

    it('Sends the any params included in the options argument', async () => {
      jest.spyOn(request, 'get').mockImplementation(function () {
        return new Promise(resolve => {
          resolve({
            status: 200,
            data: userData
          });
        });
      });

      await model.fetch({
        params: {
          included: 'companies'
        }
      });

      expect(request.get).toHaveBeenCalledWith(model.url(), {
        cancelToken: expect.anything(),
        params: { included: 'companies' }
      });
    });

    it('Calls the set method if the request is successful', async () => {
      jest.spyOn(request, 'get').mockImplementation(function () {
        return new Promise(resolve => {
          resolve({
            status: 200,
            data: userData
          });
        });
      });

      await model.fetch();

      expect(model.set).toHaveBeenCalledWith(userData, {
        parse: true,
        stripNonRest: true,
        stripUndefined: true
      });
    });

    it('Sets the fetching request label to falsy if the request fails', async () => {
      jest.spyOn(request, 'get').mockImplementation(() => {
        return new Promise((resolve, reject) => {
          reject(new Error('Request failed'));
        });
      });

      await model.fetch();

      expect(model.set).toHaveBeenCalledTimes(1);
      expect(model.fetching).toBeFalsy();
    });
  });

  describe('save action', () => {
    beforeEach(() => {
      class SubModel extends Model {
        get restAttributes() {
          return ['id', 'type', 'firstName', 'lastName', 'username', 'phone'];
        }

        url() {
          return '/api/v1/me';
        }
      }

      model = new SubModel(userData);
    });

    it('Delegates to the create method if the model is new', () => {
      class SubModel extends Model {
        get restAttributes() {
          return [
            'id',
            'type',
            'firstName',
            'lastName',
            'phone',
            'avatar',
            'username',
            'images'
          ];
        }

        url() {
          return '/api/v1/me';
        }
      }

      jest.spyOn(Model.prototype, 'create');

      model = new SubModel();

      model.save(userData, { wait: true });

      expect(Model.prototype.create).toHaveBeenCalledWith(
        omit(userData, 'company'),
        {
          wait: true,
          stripNonRest: true,
          reset: false,
          method: 'patch'
        }
      );
    });

    it('Sends patch request to the URL if model has an ID', () => {
      const patch = jest.spyOn(request, 'patch');

      model
        .save()
        .then(() => {})
        .catch(() => {});

      expect(patch.mock.lastCall[0]).toEqual(model.url());
    });

    it('Sends PUT request to the URL if model has an ID and method option is put', () => {
      const put = jest.spyOn(request, 'put');

      model
        .save(null, {
          method: 'put'
        })
        .then(() => {})
        .catch(() => {});

      expect(put.mock.lastCall[0]).toEqual(model.url());
    });

    it('Sends request to the custom URL if url option exists', () => {
      const put = jest.spyOn(request, 'put');

      model
        .save(null, {
          method: 'put',
          url: '/customUrl'
        })
        .then(() => {})
        .catch(() => {});

      expect(put.mock.lastCall[0]).toEqual('/customUrl');
    });

    it('Sends all attributes if data argument is missing', () => {
      const patch = jest.spyOn(request, 'patch');
      model
        .save()
        .then(() => {})
        .catch(() => {});

      expect(patch.mock.lastCall[1]).toEqual({
        id: 2,
        type: 'User',
        firstName: 'John',
        lastName: 'Doe',
        username: 'projectmem1@rakneapp.com',
        phone: '012345678'
      });
    });

    it('Sends only the attributes in the data argument', () => {
      const patch = jest.spyOn(request, 'patch');
      model
        .save({
          firstName: 'David'
        })
        .then(() => {})
        .catch(() => {});

      expect(patch.mock.lastCall[1]).toEqual({
        firstName: 'David'
      });
    });

    it('Strips out any attributes not flagged in the restAttributes getter', () => {
      const patch = jest.spyOn(request, 'patch');

      model
        .save({
          firstName: 'David',
          age: 26
        })
        .then(() => {})
        .catch(() => {});

      expect(patch.mock.lastCall[1]).toEqual({
        firstName: 'David'
      });
    });

    it('Immediately updates the attributes on the model if the wait option is falsey', () => {
      model
        .save(
          {
            firstName: 'David'
          },
          {
            wait: false
          }
        )
        .then(() => {})
        .catch(() => {});

      expect(model.firstName).toEqual('David');
    });

    it('Does not Immediately update the attributes on the model if the wait option is truthy', () => {
      model
        .save(
          {
            attributes: {
              firstName: 'Rick'
            }
          },
          {
            wait: true
          }
        )
        .then(() => {})
        .catch(() => {});

      expect(model.firstName).toEqual('John');
    });

    it('Sets the saving request label to truthy if the wait option is truthy', () => {
      model
        .save(
          {
            firstName: 'Tim'
          },
          {
            wait: true
          }
        )
        .then(() => {})
        .catch(() => {});

      expect(model.saving).toBeTruthy();
    });

    it('Calls the set method if the request is successful', async () => {
      jest.spyOn(request, 'patch').mockImplementation(function () {
        return new Promise(resolve => {
          resolve({
            status: 200,
            data: userData
          });
        });
      });

      await model.save();

      expect(model.set).toHaveBeenCalledWith(userData, expect.anything());
    });

    it('Resolve a successful Promise with an updated Model ', async () => {
      jest.spyOn(request, 'patch').mockImplementation(function () {
        return new Promise(resolve => {
          resolve({
            status: 200,
            data: {
              firstName: 'Rick'
            }
          });
        });
      });

      expect(model.firstName).toEqual('John');

      const updatedModel = await model.save(
        {
          firstName: 'Rick'
        },
        {
          wait: true
        }
      );

      expect(updatedModel.firstName).toEqual('Rick');
    });

    it('Resets the attributes to the original state if the request fails and wait option is falsy', async () => {
      jest.spyOn(request, 'patch').mockImplementation(() => {
        return new Promise((resolve, reject) => {
          reject();
        });
      });

      await model.save(
        {
          firstName: 'Bill'
        },
        { wait: false }
      );

      expect(model.firstName).toEqual('John');
    });
  });

  describe('create action', () => {
    beforeEach(() => {
      class SubModel extends Model {
        get restAttributes() {
          return [
            'id',
            'type',
            'firstName',
            'lastName',
            'phone',
            'avatar',
            'username',
            'images'
          ];
        }

        url() {
          return '/api/v1/userData';
        }
      }

      model = new SubModel(omit(userData, 'id'));
    });

    it('Posts all existing data if no new data is passed in', async () => {
      jest.spyOn(request, 'post').mockImplementation(() => {
        return new Promise((resolve, reject) => {
          resolve();
        });
      });

      model.create();

      expect(request.post.mock.lastCall[1]).toEqual(
        omit(userData, ['id', 'company'])
      );
    });

    it('Merges in passed in data with any existing data before posting', () => {
      jest.spyOn(request, 'post').mockImplementation(() => {
        return new Promise((resolve, reject) => {
          resolve();
        });
      });

      model
        .create({
          phone: '021191234076'
        })
        .then(() => {})
        .catch(() => {});

      expect(request.post.mock.lastCall[1]).toEqual({
        type: 'User',
        username: 'projectmem1@rakneapp.com',
        firstName: 'John',
        lastName: 'Doe',
        phone: '021191234076',
        images: [
          {
            type: 'Media',
            id: 1565139,
            createdTimestamp: 1500266713000,
            createdBy: 2,
            fileName: 'user.png',
            mediaType: 'IMAGE',
            contentUrl: 'https://cdn.example.com/ui/images/user.png',
            thumbUrl: 'https://cdn.example.com/ui/images/user.png',
            contentType: 'image/png',
            etag: 'image/png',
            fileSize: 5215,
            uploadDate: '2017-07-17T04:45:13+0000',
            takenDate: '2017-06-21T03:44:45+0000'
          }
        ]
      });
    });

    it('Immediately sets the data on the model if wait option is falsy', () => {
      jest.spyOn(request, 'post').mockImplementation(() => {
        return new Promise((resolve, reject) => {
          return setTimeout(() => {
            resolve({
              status: 201,
              data: userData
            });
          }, 100);
        });
      });

      model.create(
        {
          firstName: 'Johnny',
          lastName: 'Doe',
          username: 'lostintranslation@example.com',
          phone: '0211912340'
        },
        { wait: false }
      );

      expect(model.firstName).toEqual('Johnny');
    });

    it('Waits for successful response from server before updating model if wait option is truthy', async () => {
      jest.spyOn(request, 'post').mockImplementation(() => {
        return new Promise((resolve, reject) => {
          return setTimeout(() => {
            resolve({
              status: 201,
              data: {
                firstName: 'Mike',
                lastName: 'Doe',
                username: 'lostintranslation@example.com',
                phone: '0211912340'
              }
            });
          }, 100);
        });
      });

      const promise = model.create(
        {
          firstName: 'Mike',
          lastName: 'Doe',
          username: 'lostintranslation@example.com',
          phone: '0211912340'
        },
        { wait: true }
      );

      expect(model.firstName).toEqual('John');

      // Fast-forward until all timers have been executed
      jest.runAllTimers();

      await promise;

      expect(model.firstName).toEqual('Mike');
    });

    it('Sets the saving request label to truthy if wait option is truthy', () => {
      model.create(
        {
          firstName: 'Timmy',
          lastName: 'Doe',
          username: 'lostintranslation@example.com',
          phone: '0211912340'
        },
        { wait: true }
      );

      expect(model.saving).toBeTruthy();
    });

    it('sends the post request to the model url', () => {
      jest.spyOn(request, 'post').mockImplementation(() => {
        return new Promise((resolve, reject) => {
          resolve();
        });
      });

      model.create();

      expect(request.post.mock.lastCall[0]).toEqual(model.url());
    });

    it('sends the post request to the url passed in as url option', () => {
      jest.spyOn(request, 'post').mockImplementation(() => {
        return new Promise((resolve, reject) => {
          resolve();
        });
      });

      model.create(null, {
        url: '/api/v1/people/1'
      });

      expect(request.post.mock.lastCall[0]).toEqual('/api/v1/people/1');
    });

    it('calls the models set action with the response from successful save to server', async () => {
      jest.spyOn(request, 'post').mockImplementation(() => {
        return new Promise((resolve, reject) => {
          resolve({ status: 201, data: userData });
        });
      });

      await model.create();

      expect(model.set).toHaveBeenCalledWith(userData, expect.anything());
    });

    it('resets to the original attributes on failed save to server if wait option is falsy', async () => {
      jest.spyOn(request, 'post').mockImplementation(() => {
        return new Promise((resolve, reject) => {
          reject();
        });
      });

      await model.create(
        {
          firstName: 'Tom'
        },
        { wait: false }
      );

      expect(model.firstName).toEqual('John');
    });
  });

  describe('destroy action', () => {
    beforeEach(() => {
      class SubCollection extends Collection {
        url() {
          return '/api/v1/companies';
        }
      }

      const newModel = new Model();

      newModel.set({
        name: 'New company'
      });

      collection = new SubCollection();
      collection.add([companyData, newModel]);
    });

    it('should immediately remove the model from the parent collection if the model is new', () => {
      collection.at(1).destroy();
      expect(collection.length).toEqual(1);
    });

    it('should immediately remove the model from the parent collection if the wait option is falsy', () => {
      collection.at(0).destroy({ wait: false });

      expect(collection.length).toEqual(1);
    });

    it('should put the models back in the parent collection if the request fails', async () => {
      jest.spyOn(request, 'delete').mockImplementation(() => {
        return new Promise((resolve, reject) => {
          reject();
        });
      });

      await collection.at(0).destroy({ wait: false });

      expect(collection.length).toEqual(2);
      expect(collection.at(0).deleting).toBeFalsy();
    });

    it('Sends delete request to the URL of the model', () => {
      const deleteRequest = jest
        .spyOn(request, 'delete')
        .mockImplementation(() => {
          return new Promise((resolve, reject) => {
            resolve();
          });
        });

      collection.at(0).destroy();

      expect(deleteRequest).toHaveBeenCalledWith(
        `${collection.url()}/1`,
        undefined
      );
    });

    it('Sets the deleting requestLabel to truthy if wait option if truthy', () => {
      collection.at(0).destroy({ wait: true });

      expect(collection.at(0).deleting).toBeTruthy();
    });

    it('Waits until a successful response from server before removing model from collection if wait options is truthy', async () => {
      jest.spyOn(request, 'delete').mockImplementation(function () {
        return new Promise((resolve, reject) => {
          return setTimeout(() => {
            resolve();
          }, 100);
        });
      });

      const promise = collection.get(1).destroy({ wait: true });

      expect(request.delete).toHaveBeenCalled();

      expect(collection.length).toEqual(2);
      expect(collection.get(1).deleting).toBeTruthy();

      // Fast-forward until all timers have been executed
      jest.runOnlyPendingTimers();

      await promise;

      expect(collection.length).toEqual(1);
    });
  });

  describe('toJSON method', () => {
    it("Returns a plain object representation of the model's attributes", () => {
      class SubModel extends Model {
        get restAttributes() {
          return ['name', 'projects'];
        }
      }

      const newModel = new SubModel({
        name: 'New company',
        projects: [
          {
            id: 1,
            name: 'Project 1'
          },
          {
            id: 2,
            name: 'Project 2'
          }
        ]
      });

      expect(newModel.toJSON()).toEqual({
        name: 'New company',
        projects: [
          {
            id: 1,
            name: 'Project 1'
          },
          {
            id: 2,
            name: 'Project 2'
          }
        ]
      });
    });
  });
});
