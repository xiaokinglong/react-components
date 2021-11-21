const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "storybook-dark-mode",
    // '@storybook/addon-postcss',
    require.resolve("storybook-addon-grid/preset"),
    "@pxblue/storybook-rtl-addon/register",
    "@storybook/addon-viewport",
    "@storybook/addon-measure",
    "storybook-addon-themes",
    "storybook-addon-pseudo-states",
    "storybook-addon-designs",
    "storybook-addon-breakpoints",
    "storybook-color-picker",
    "storybook-addon-playroom",
    "storybook-conditional-toolbar-selector",
    "@storybook/addon-controls",
    "@storybook/addon-actions",
    "@geometricpanda/storybook-addon-badges",
    "@whitespace/storybook-addon-html",
    "@storybook/addon-storysource",
    // 'storybook-vscode-component/register',
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("babel-loader"),
          options: {
            presets: [require.resolve("babel-preset-react-app")],
          },
        },
      ],
    });

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("babel-loader"),
          options: {
            presets: [require.resolve("babel-preset-react-app")],
          },
        },
      ],
    });

    config.module.rules.push({
      test: /\.less$/,
      loaders: [
        "style-loader",
        "css-loader",
        {
          loader: "less-loader",
          options: {
            lessOptions: {
              javascriptEnabled: true,
            },
          },
        },
      ],
      include: [
        path.resolve(__dirname, "../src"),
        /[\\/]node_modules[\\/].*antd/,
      ],
    });

    return config;
  },
};
