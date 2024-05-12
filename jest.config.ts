export default {
  rootDir: './tests',
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    // '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/mocks/fileMock.js',
    '\\.scss$': 'identity-obj-proxy',
    '^@shared/(.*)$': '<rootDir>/../src/shared/$1',
    '^@api/(.*)$': '<rootDir>/../src/api/$1',
    '^@components/(.*)$': '<rootDir>/../src/components/$1',
    '^@context/(.*)$': '<rootDir>/../src/context/$1',
    '^@pages/(.*)$': '<rootDir>/../src/pages/$1',
  },
};
