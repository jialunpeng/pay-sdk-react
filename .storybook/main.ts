/** .storybook/main.js */

import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-essentials"],
  framework: {
    name: "@storybook/react-vite", // 使用 Vite 构建
    options: {},
  },
  async viteFinal(config) {
    config.plugins?.push({
      name: "react",
      ...require("@vitejs/plugin-react")(),
    });
    return config;
  },
};

export default config;
