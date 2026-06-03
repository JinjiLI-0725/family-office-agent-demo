const eslintConfig = [
  {
    ignores: [".next/**", "node_modules/**", "out/**", "src/**/*.ts", "src/**/*.tsx", "next-env.d.ts"],
  },
  {
    files: ["*.js", "*.mjs", "*.cjs"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
];

export default eslintConfig;
