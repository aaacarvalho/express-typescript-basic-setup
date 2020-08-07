module.exports = {
  roots: ['<rootDir>/source'],
  collectCoverageFrom: ['<rootDir>/source/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
