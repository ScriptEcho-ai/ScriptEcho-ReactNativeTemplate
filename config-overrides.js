const path = require("path");

const {
  override,
  addBabelPlugins,
  babelInclude,
  addWebpackAlias,
  addBabelPresets,
  removeModuleScopePlugin,
} = require("customize-cra");

module.exports = override(
  ...addBabelPlugins([
    "@babel/plugin-proposal-class-properties",
    {
      loose: true,
    },
  ]),
  ...addBabelPresets([
    "@babel/preset-env",
    {
      loose: true,
      targets: {
        browsers: ["> 1%", "last 2 versions"],
      },
      modules: "commonjs",
    },
  ]),
  removeModuleScopePlugin(),
  babelInclude(
    [
      path.resolve(__dirname, "node_modules/react-native-vector-icons"),
      path.resolve(__dirname, "node_modules/react-native-ratings"),
      path.resolve(__dirname, "src"),
    ],
    addWebpackAlias({
      "react-native$": "react-native-web",
      "react-native-linear-gradient": "react-native-web-linear-gradient",
    })
  )
);