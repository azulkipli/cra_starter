const { injectBabelPlugin } = require("react-app-rewired");
const rewireMobX = require("react-app-rewire-mobx");
// const rewireVendorSplitting = require("react-app-rewire-vendor-splitting");
// const rewirePreloadPlugin = require("react-app-rewire-preload-plugin");
const CriticalPlugin = require("webpack-plugin-critical").CriticalPlugin;

module.exports = function override(config, env) {
  // remove console.log
  if (env === "production") {
    console.log("⚡ Console.log removed on Production");
    const optionRemoveConsole = {
      plugins: [["transform-remove-console", { exclude: ["error", "warn"] }]]
    };
    config = injectBabelPlugin(["transform-remove-console", optionRemoveConsole], config);
  }

  if (env === "production") {
    // && arg === "--bundle-report"?
    config.plugins.push(
      new CriticalPlugin({
        src: "index.html",
        inline: true,
        minify: true,
        dest: "index.html"
      })
    );
  }

  // use the MobX rewire
  config = rewireMobX(config, env);

  // rewireVendorSplitting
  // config = rewireVendorSplitting(config, env);

  // Add preloading support
  // config = rewirePreloadPlugin(config, env);

  return config;
};
