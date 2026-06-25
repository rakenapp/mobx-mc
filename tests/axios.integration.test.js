import request from 'axios';
import Model from '../src/Model';
import Collection from '../src/Collection';
import { companiesData } from './fixtures/collections';

// Inject a custom axios adapter via mobx-mc's `options.axios` passthrough so the
// real axios 1.x pipeline runs (config merge, transforms, paramsSerializer, settle)
// with only the network transport replaced.
function recordingAdapter(response = { data: {}, status: 200 }) {
  const requests = [];
  const adapter = config => {
    // Mirror axios's transport adapters: serialize params via the wired serializer and append to the URL.
    const serialize =
      config.paramsSerializer && config.paramsSerializer.serialize;
    const queryString = serialize ? serialize(config.params) : '';
    const fullUrl = queryString ? `${config.url}?${queryString}` : config.url;
    requests.push({ ...config, fullUrl });
    return Promise.resolve({
      data: response.data,
      status: response.status || 200,
      statusText: 'OK',
      headers: {},
      config,
      request: {}
    });
  };
  return { adapter, requests };
}

const tick = () => new Promise(resolve => setTimeout(resolve, 0));

class CompanyModel extends Model {
  get restAttributes() {
    return ['id', 'name', 'status'];
  }
}

class CompanyCollection extends Collection {
  url() {
    return '/api/v1/companies';
  }
  model() {
    return CompanyModel;
  }
}

class UserModel extends Model {
  urlRoot = '/api/v1/users';
  get restAttributes() {
    return ['id', 'firstName', 'lastName'];
  }
}

describe('axios 1.x integration', () => {
  // These await genuine async settlement, so opt out of the suite-wide fake timers.
  beforeEach(() => jest.useRealTimers());

  it('Collection.fetch issues a real GET and applies the object-form paramsSerializer', async () => {
    const { adapter, requests } = recordingAdapter({ data: companiesData });
    const collection = new CompanyCollection([]);

    await collection.fetch({
      params: { included: 'projects' },
      axios: { adapter }
    });

    expect(requests).toHaveLength(1);
    const config = requests[0];

    expect(config.method).toBe('get');
    expect(config.url).toBe('/api/v1/companies');
    expect(config.fullUrl).toBe('/api/v1/companies?included=projects');

    expect(collection.length).toBe(companiesData.length);
    expect(collection.models[0].name).toBe('Company_1');
  });

  it('Model.fetch serializes params through the same querystringify paramsSerializer', async () => {
    const { adapter, requests } = recordingAdapter({ data: { id: 2 } });
    const model = new UserModel({ id: 2 });

    await model.fetch({
      params: { included: 'projects' },
      axios: { adapter }
    });

    expect(requests).toHaveLength(1);
    const config = requests[0];

    expect(config.method).toBe('get');
    expect(config.url).toBe('/api/v1/users/2');
    expect(config.fullUrl).toBe('/api/v1/users/2?included=projects');
  });

  it('Model.save issues a real PATCH with the request body and merges the response', async () => {
    const { adapter, requests } = recordingAdapter({
      data: { lastName: 'Smith' }
    });
    const model = new UserModel({ id: 2, firstName: 'John', lastName: 'Doe' });

    await model.save({ firstName: 'Jane' }, { axios: { adapter } });

    expect(requests).toHaveLength(1);
    const config = requests[0];

    expect(config.method).toBe('patch');
    expect(config.url).toBe('/api/v1/users/2');

    const body =
      typeof config.data === 'string' ? JSON.parse(config.data) : config.data;
    expect(body).toEqual({ firstName: 'Jane' });

    expect(model.firstName).toBe('Jane');
    expect(model.lastName).toBe('Smith');
  });

  it('still wires request cancellation through axios CancelToken + isCancel', async () => {
    const adapter = config =>
      new Promise((resolve, reject) => {
        config.cancelToken.promise.then(reject);
      });
    const collection = new CompanyCollection([]);

    let rejected = false;
    collection.fetch({ axios: { adapter } }).catch(() => {
      rejected = true;
    });

    expect(collection.fetching).toBe(true);
    expect(typeof collection.requestCanceller).toBe('function');

    collection.cancelRequest();
    await tick();

    expect(collection.fetching).toBe(false);
    expect(rejected).toBe(false);
  });
});
