const { mergeConfig } = require('vite');
const svgr = require("vite-plugin-svgr");

module.exports = {
  async viteFinal(config) {
    // return the customized config
    return mergeConfig(config, {
      plugins: [svgr()]
    });
  },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  }
}