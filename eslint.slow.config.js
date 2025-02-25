import ts from 'typescript-eslint';
import svelteParser from 'svelte-eslint-parser';

export default ts.config({
  files: ['**/*.svelte'],
  languageOptions: {
    parser: svelteParser,
    parserOptions: {
      parser: ts.parser,
      projectService: true,
      extraFileExtensions: ['.svelte'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
