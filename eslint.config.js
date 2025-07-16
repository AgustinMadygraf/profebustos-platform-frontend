import vuePlugin from 'eslint-plugin-vue';
import prettierPlugin from 'eslint-plugin-prettier';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    ignores: ['dist', 'coverage', 'node_modules'],
  },
  {
    files: ['**/*.js', '**/*.ts', '**/*.vue'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parser: tsParser,
    },
    plugins: {
      vue: vuePlugin,
      prettier: prettierPlugin,
    },
    rules: {
      semi: ['error', 'always'],
      'vue/multi-word-component-names': 'off',
      // Reglas recomendadas para Vue 3
      'vue/no-multiple-template-root': 'off',
      'vue/no-v-html': 'off',
      'vue/no-v-for-template-key': 'off',
      'vue/no-v-text-v-html-on-component': 'off',
      // Reglas recomendadas para Prettier
      'prettier/prettier': [
        'error',
        {
          semi: true,
          singleQuote: false,
          printWidth: 100,
          tabWidth: 2,
          trailingComma: 'es5',
        },
      ],
    },
  },
];
