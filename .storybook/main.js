const path = require('path');

module.exports = {
  stories: ["../src/components/**/*.stories.tsx"],
  addons: [
    '@storybook/addon-knobs',
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-viewport/register'
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    config.resolve.modules.push(path.resolve(__dirname, '../src'));

    
    // Return the altered config
    return config;
  }

};
