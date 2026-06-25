// jest-circus (jest 27+) does not auto-restore spies between tests the way the
// old jasmine2 runner did. Restore after each test to match that behaviour so
// prototype spies don't leak across tests.
afterEach(() => {
  jest.restoreAllMocks();
});
