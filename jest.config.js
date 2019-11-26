// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html
const tsPreprocessorPath = require.resolve('ts-jest');

module.exports = {
  clearMocks: true,
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "json",
    "jsx",
    "node"
  ],
  roots: [
    "<rootDir>src"
  ],
  testEnvironment: "node",
  transform: {
    '.(j|t)sx?$': tsPreprocessorPath,
    'lodash-es': tsPreprocessorPath,
  },
};
