/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint no-dupe-keys: "error" */

const { defineConfig } = require("eslint/config")

const prettier = require("eslint-plugin-prettier")
const prettierRecommended = require("eslint-plugin-prettier/recommended")
const simpleImportSort = require("eslint-plugin-simple-import-sort")
const js = require("@eslint/js")

const { FlatCompat } = require("@eslint/eslintrc")

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

module.exports = defineConfig([
  {
    // This must be isolated to work a glob pattern because eslint v9 config is stupid.
    // https://github.com/eslint/eslint/discussions/17429#discussioncomment-6579229
    ignores: [
      "package.json",
      ".vscode/",
      ".next/",
      "build/",
      "components/ui/",
      "node_modules/",
      "out/",
    ],
  },

  {
    extends: compat.extends("next/core-web-vitals", "next/typescript"),

    plugins: {
      prettier,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      // Eslint
      "linebreak-style": ["error", "windows"],

      // Typescript
      "@typescript-eslint/no-unused-expressions": [
        "warn",
        {
          allowTernary: true,
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],

      // import sorting
      "simple-import-sort/imports": "error",
    },
  },
  prettierRecommended,
])
