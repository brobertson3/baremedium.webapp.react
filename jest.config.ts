export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
      "^.+\\.tsx?$": "ts-jest" 
  // process `*.tsx` files with `ts-jest`
  },
  moduleNameMapper: {
      '\\.(gif|ttf|eot|svg|jpg|jpeg|png|css)$': '<rootDir>/src/tests/mocks/fileMock.js',
  },
}