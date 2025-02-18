import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import eslintPluginHtml from "eslint-plugin-html";  // Thêm import plugin html

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,vue,html}"] },  // Bao gồm cả HTML
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/essential"],

  // Thêm cấu hình plugin html
  {
    files: ["**/*.html"],  // Cấu hình riêng cho HTML
    plugins: ["html"],
    rules: {
      // Các quy tắc cho HTML nếu cần
    },
  },
];
