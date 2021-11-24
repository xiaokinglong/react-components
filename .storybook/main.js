module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "storybook-addon-outline",
    "storybook-addon-designs",
    "@storybook/addon-storysource",
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

    return config;
  },
};
