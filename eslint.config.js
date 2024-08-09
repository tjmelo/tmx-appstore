import react from "@typescript-eslint/eslint-plugin"
import globals from "globals";
import parser from "@typescript-eslint/parser"

export default [
    {
        rules: {
            "no-undef": 0,
            "react/prop-types": 0,
            "no-unused-vars": 0,
            "@typescript-eslint/no-explicit-any": ["off"]
        },
        plugins: {
            react: react
        },
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module",
            globals: {
                ...globals.browser,
                myCustomGlobal: "readonly"
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            },
            parser: parser
        }
    }
];
  