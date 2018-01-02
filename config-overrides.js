const { injectBabelPlugin } = require("react-app-rewired");
const rewireMobX = require("react-app-rewire-mobx");
const rewireVendorSplitting = require("react-app-rewire-vendor-splitting");
// const rewirePreloadPlugin = require("react-app-rewire-preload-plugin");

module.exports = function override(config, env) {
  // use the MobX rewire
  config = rewireMobX(config, env);

  // rewireVendorSplitting
  config = rewireVendorSplitting(config, env);

  // Add preloading support
  // config = rewirePreloadPlugin(config, env);

  return config;
};
