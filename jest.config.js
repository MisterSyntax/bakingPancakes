module.exports = {
  coverageDirectory: '<rootDir>/build/coverage/',
  coveragePathIgnorePatterns: ['.styles.js'],
  moduleNameMapper: {
    '\.(css|less)$': 'identity-obj-proxy',
    '^/(.*)$': '<rootDir>/src/$1'
  },
  setupFilesAfterEnv: ['<rootDir>/jestEnzymeSetup.js']
};
