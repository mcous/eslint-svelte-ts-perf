import ts from 'typescript-eslint';

export default ts.config({
  files: ['**/*.ts'],
  languageOptions: {
    parser: ts.parser,
    parserOptions: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
