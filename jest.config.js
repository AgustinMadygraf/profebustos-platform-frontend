module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.ts$': ['ts-jest']
  },
  moduleNameMapper: {
    './helpers/logging.js': '<rootDir>/assets/js/__tests__/__mocks__/helpers/logging.js'
  },
  testMatch: ['<rootDir>/assets/js/__tests__/**/*.test.ts'],
  testPathIgnorePatterns: ['<rootDir>/dist/'],
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  collectCoverageFrom: [
    'assets/js/**/*.ts',
    '!assets/js/**/*.d.ts',
    '!**/node_modules/**'
  ],
  coverageDirectory: 'coverage'
};
