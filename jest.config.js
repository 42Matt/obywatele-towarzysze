module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  coverageDirectory: '.coverage',
  moduleNameMapper: {
    '^@/components(.*)$': '<rootDir>/src/components$1',
    '^@/context(.*)$': '<rootDir>/src/context$1',
    '^@/pages(.*)$': '<rootDir>/src/pages$1',
    '^@/test(.*)$': '<rootDir>/src/test/$1',
    '^@/theme(.*)$': '<rootDir>/src/theme/$1',
    '^@/utils(.*)$': '<rootDir>/src/utils/$1',
  },

  setupFilesAfterEnv: ['./jest.setup.js'],
};
