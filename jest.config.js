module.exports = {
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  fakeTimers: { enableGlobally: true, legacyFakeTimers: true }
};
