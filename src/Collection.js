import isEmpty from 'lodash.isempty';
import difference from 'lodash.difference';
import { action, observable, computed, runInAction } from 'mobx';
import request, { CancelToken } from 'axios';
import qs from 'querystringify';
import Model from './Model';

class Collection {
  @observable fetching;
  @observable saving;

  constructor(data = {}, options = {}) {
    this.models = observable([]);
    this.fetching = false;
    this.saving = false;
    this.requestCanceller = null;

    this.applyOptions(options);
    this.instantiateAddOns();

    if (!isEmpty(data)) {
      this.set(data);
    }
  }

  /**
   * Instantiate extensions
   */

  instantiateAddOns() {
    return;
  }

  /**
   * Apply options to a Collection
   */
  applyOptions(options) {
    if (options.parent) {
      this.parent = options.parent;
    }

    if (options.rootStore) {
      this.rootStore = options.rootStore;
    }
  }

  /**
   * Options for models
   */
  @computed
  get modelOptions() {
    return {
      collection: this,
      rootStore: this.rootStore
    };
  }

  /**
   * Specifies the url to request the collection
   */

  url() {
    return '/';
  }

  /**
   * Specifies the model class for that collection
   */
  model() {
    return Model;
  }

  /**
   * Gets idAttribute used by Model
   */
  getModelIdAttribute(type) {
    return this.model(type).prototype.idAttribute();
  }

  /**
   * Gets the unique ids of all the items in the collection
   */
  ids() {
    return this.models.map(model => model.uniqueId);
  }

  /**
   * Getter for the collection length
   */
  @computed
  get length() {
    return this.models.length;
  }

  /**
   * Gets the answer is collection empty or not
   */
  @computed
  get hasModels() {
    return this.models.length > 0;
  }

  /**
   * Get a model at a given position
   */
  at(index) {
    return this.models[index];
  }

  /**
   * Get a model with the given id or uuid
   */
  get(uniqueId) {
    return this.models.find(model => model.uniqueId === uniqueId);
  }

  /**
   * Controls boolean value of request label
   */
  @action
  setRequestLabel(label, state = false) {
    this[label] = state;
  }

  /**
   * Handles full payload and sets data accordingly.
   */

  @action
  set(data, options) {
    // Merge in the any options with the default
    options = Object.assign(
      {
        add: true,
        update: true,
        remove: true,
        merge: false
      },
      options
    );

    if (Array.isArray(data)) {
      this.setModels(data, options);
    } else {
      let parsedData = this.parse(data);

      if (Array.isArray(parsedData)) {
        this.setModels(parsedData, options);
      } else if (options.remove) {
        this.reset();
      }
    }
  }

  /**
   * Return a collection of models. Assume that a payload is a collection by default.
   * Override this in your base collection if you need to work with a preexisting API
   */
  parse(data) {
    return data;
  }

  /**
   * Sets the models into the collection.
   *
   * You can disable adding, merging or removing.
   */
  @action
  setModels(models = [], options) {
    // Merge in the any options with the default
    options = Object.assign(
      {
        add: true,
        update: true,
        merge: false,
        remove: true,
        unshift: false
      },
      options
    );

    if (options.remove) {
      const ids = models.map(model => model.id);

      this.spliceModels(difference(this.ids(), ids));
    }

    models.forEach(data => {
      const model = this.get(data[this.getModelIdAttribute(data.type)]);

      if (model && options.update)
        model.set(data, {
          reset: Boolean(!options.merge)
        });

      if (!model && options.add) this.pushModels(data, options);
    });
  }

  /**
   * Add a model (or an array of models) to the collection
   */
  @action
  add(models, options) {
    // Handle single model
    if (!Array.isArray(models)) models = [models];

    this.setModels(
      models,
      Object.assign(
        {
          add: true,
          update: false,
          merge: false,
          remove: false
        },
        options
      )
    );

    return this.models;
  }

  /**
   * Look up a model or add it to the collection and return it.
   */
  @action
  getOrAdd(attributes) {
    if (this.get(attributes[this.getModelIdAttribute(attributes.type)]))
      return this.get(attributes[this.getModelIdAttribute(attributes.type)]);

    return this.pushModels(attributes)[0];
  }

  /**
   * Update an existing model or add it to the collection and return it.
   */
  @action
  updateOrAdd(attributes) {
    let model = this.get(attributes[this.getModelIdAttribute(attributes.type)]);

    if (model) {
      model.set(attributes);
    } else {
      model = this.pushModels(attributes)[0];
    }

    return model;
  }

  /**
   * Update collection by an array of models
   */
  @action
  batchUpdate(arrayAttributes = [], options) {
    options = Object.assign({}, options);
    const originalAttributes = [];
    this.setRequestLabel('saving', true);

    arrayAttributes.forEach(attributes => {
      const existingModel = this.get(
        attributes[this.getModelIdAttribute(attributes.type)]
      );
      if (existingModel) {
        originalAttributes.push(existingModel.attributes.toJS());
        existingModel.set(attributes);
      }
    });

    return new Promise((resolve, reject) => {
      request.put(options.url ? options.url : this.url(), arrayAttributes).then(
        () => {
          runInAction('update-success', () => {
            this.setRequestLabel('saving', false);
            resolve(this);
          });
        },
        error => {
          runInAction('update-error', () => {
            originalAttributes.forEach(attribute => {
              let updatedModel = this.get(attribute.id);
              updatedModel.set(attribute);
            });
            this.setRequestLabel('saving', false);
            reject(error);
          });
        }
      );
    });
  }

  /**
   * Adds a collection of models.
   * Returns the added models.
   */
  @action
  pushModels(models, options = {}) {
    // Handle single model
    if (!Array.isArray(models)) models = [models];

    const instances = models.map(model => {
      // Get the type of Model
      const CollectionModel = this.model(model.type);

      if (model instanceof Model) {
        if (!(model instanceof CollectionModel)) {
          throw new Error(
            `Collection can only hold ${CollectionModel.name} models.`
          );
        } else {
          const extendedModel = this.applyOptionsToModel(model);

          return extendedModel;
        }
      } else {
        return new CollectionModel(model, this.modelOptions);
      }
    });

    if (options.hasOwnProperty('at')) {
      this.models.splice(options.at, 0, ...instances);
    } else {
      if (options.unshift) {
        this.models.unshift(...instances);
      } else {
        this.models.push(...instances);
      }
    }

    return instances;
  }

  /**
   * Add options to a model
   */
  @action
  applyOptionsToModel(model) {
    if (!model.collection) {
      model.collection = this;
    }

    if (!model.rootStore && this.rootStore) {
      model.rootStore = this.rootStore;
    }

    return model;
  }

  /**
   * Remove a model (or an array of models) from the collection
   */
  @action
  remove(models) {
    // Handle single model
    if (!Array.isArray(models)) models = [models];

    const ids = models.map(model => {
      return model.uniqueId;
    });

    this.spliceModels(ids);
  }

  /**
   * Removes the models with the given ids or uuids
   */
  @action
  spliceModels(ids = []) {
    ids.forEach(id => {
      const model = this.get(id);
      if (!model) return;

      this.models.splice(this.models.indexOf(model), 1);
    });
  }

  /**
   * Fetches the collection data from the backend.
   *
   * It uses `set` internally so you can
   * use the options to disable adding, changing
   * or removing.
   */
  @action
  fetch(options = {}) {
    // Merge in the any options with the default
    options = Object.assign(
      {
        url: this.url(),
        params: {},
        add: true,
        update: true,
        merge: false,
        remove: true
      },
      options
    );

    this.currentFetchOptions = options;

    this.setRequestLabel('fetching', true);

    return new Promise((resolve, reject) => {
      // Optionally the request above could also be done as
      request
        .get(options.url, {
          cancelToken: new CancelToken(cancel => {
            // An executor function receives a cancel function as a parameter
            this.requestCanceller = cancel;
          }),
          params: options.params,
          ...options.axios,
          paramsSerializer: params => {
            return qs.stringify(params);
          }
        })
        .then(
          response => {
            runInAction('fetch-success', () => {
              this.set(response.data, {
                add: options.add,
                update: options.update,
                merge: options.merge,
                remove: options.remove,
                unshift: options.unshift
              });
              this.setRequestLabel('fetching', false);
              resolve(response);
            });
          },
          error => {
            runInAction('fetch-error', () => {
              this.setRequestLabel('fetching', false);
              if (!request.isCancel(error)) {
                reject(error);
              }
            });
          }
        );
    });
  }

  /**
   * Creates the model and saves it on the backend
   *
   * The default behaviour is optimistic but this
   * can be tuned.
   */
  @action
  create(data = {}, options) {
    // Merge in the any options with the default
    options = Object.assign(
      {
        wait: false
      },
      options
    );

    // Don't add/create existing models
    if (data.id && this.get(data.id)) return false;

    const ModelClass = this.model();

    const model = new ModelClass(data, this.modelOptions);

    return new Promise((resolve, reject) => {
      if (!options.wait) {
        this.add(model, options);
        resolve(model);
      } else {
        this.setRequestLabel('saving', true);
      }

      // Model can create itself
      model
        .create(
          null,
          {
            url: options.url ? options.url : this.url()
          },
          options
        )
        .then(
          (savedModel, response) => {
            runInAction('create-success', () => {
              if (options.wait) {
                this.add(savedModel, options);
              }

              this.setRequestLabel('saving', false);

              resolve(savedModel);
            });
          },
          error => {
            runInAction('create-error', () => {
              this.setRequestLabel('saving', false);

              // Remove the model if unsuccessful
              this.remove(model);

              reject(error);
            });
          }
        );
    });
  }

  /**
   * Reset all models to passed in array
   */
  @action
  reset(data = []) {
    this.clearModels();
    this.setModels(data);
  }

  /**
   * Clears models
   */
  @action
  clearModels() {
    this.models.clear();
  }

  /**
   * Clear pagination and models
   */
  @action
  clear() {
    this.clearModels();
  }

  /**
   * Finds a model by id or fetches it
   * before adding it to the collection
   */
  @action
  getOrFetch(id, options = {}) {
    if (this.get(id)) {
      const model = this.get(id);

      if (options.fetchExisting) {
        model.fetch(options).then(
          response => {
            if (options.success) {
              options.success(model, response);
            }
          },
          error => {
            if (options.error) {
              options.error(error.response);
            }
          }
        );
      } else if (options.success) {
        options.success(model);
      }

      return model;
    }

    const CollectionModel = this.model();

    const model = new CollectionModel(
      { [this.getModelIdAttribute()]: id },
      this.modelOptions
    );

    model.fetch(options).then(
      (model, response) => {
        this.add(model);

        if (options.success) {
          options.success(model, response);
        }
      },
      error => {
        if (options.error) {
          options.error(error.response);
        }
      }
    );

    return model;
  }

  /**
   * Cancel the current request
   */
  cancelRequest() {
    this.requestCanceller &&
      this.requestCanceller('Operation canceled by the user.');
  }
}

export default Collection;
