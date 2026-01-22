import importHelpers from "eslint-plugin-import-helpers";
import eslintConfigPrettier from "eslint-config-prettier";
import pluginQuery from "@tanstack/eslint-plugin-query";
import prettier from "eslint-plugin-prettier";
import react from "eslint-plugin-react";
import globals from "globals";

import { defineConfig } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettierConfig from "eslint-config-prettier";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettierConfig,
  {
    ignores: [
      "**/node_modules/*",
      "**/coverage/*",
      "**/.swc/*",
      "**/.next/*",
      "**/.cache/*",
      "**/public/*",
      "next-env.d.ts",
      "next.config.ts",
      "tsconfig.json",
      "package-lock.json",
      "package.json",
      "yarn.lock",
      "postcss.config.mjs",
      ".prettierrc",
      "tailwind.config.ts",
      "eslint.config.mjs",
    ],
  },
  {
    plugins: {
      react,
      "import-helpers": importHelpers,
      "@tanstack/query": pluginQuery,
      prettier,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/prop-types": 0,
      "react/react-in-jsx-scope": 0,
      "import-helpers/order-imports": [
        "error",
        {
          newlinesBetween: "ignore",
          groups: [
            "/^react/",
            ["/^next/", "module"],
            "/^@/",
            ["parent", "sibling", "index"]
          ],
          alphabetize: {
            order: "asc",
            ignoreCase: true,
          },
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
        },
      ],
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
        },
      ],
    },
  },
  eslintConfigPrettier,
]);

export default eslintConfig;
