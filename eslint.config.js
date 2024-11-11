// -----------------
// ESLint.config
// -----------------

// 参考（ESLint Flat Config）
// https://eslint.org/docs/latest/extend/plugin-migration-flat-config
// https://zenn.dev/pirosikick/scraps/a60e2f086329a0
// https://zenn.dev/keita_hino/articles/798bf62c6db663
// https://qiita.com/Shilaca/items/c494e4dc6b536a5231de

// 参考（eslint-plugin-jsdoc）
// https://github.com/gajus/eslint-plugin-jsdoc#readme
// https://hepokon365.hatenablog.com/entry/2022/08/17/081732

import globals from 'globals';
import js from '@eslint/js';
import jsdoc from 'eslint-plugin-jsdoc';

export default [
  {
    // 対象ファイル
    files: ['**/**.{js,cjs}'],
    // 除外ファイル
    ignores: ['**/dist/**'],
    // 言語設定一覧
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    // プラグイン一覧
    plugins: {
      jsdoc: jsdoc,
    },
    // ルール一覧
    rules: {
      // 基本ルール
      ...js.configs.recommended.rules,
      ...jsdoc.configs['flat/recommended-error'].rules,

      // JSDocの存在を必須にする
      'jsdoc/require-jsdoc': [
        'error',
        {
          publicOnly: true,
          require: {
            ArrowFunctionExpression: true,
            ClassDeclaration: true,
            ClassExpression: true,
            FunctionDeclaration: true,
            FunctionExpression: true,
            MethodDefinition: true,
          },
        },
      ],

      // JSDocの書式チェック
      'jsdoc/require-description': 'error', // 説明を必須にする
      'jsdoc/require-param': 'error', // パラメータの記述を必須にする
      'jsdoc/require-param-description': 'error', // パラメータの説明を必須にする
      'jsdoc/require-param-type': 'error', // パラメータの型を必須にする
      'jsdoc/require-returns': 'error', // 戻り値の記述を必須にする
      'jsdoc/require-returns-description': 'error', // 戻り値の説明を必須にする
      'jsdoc/require-returns-type': 'error', // 戻り値の型を必須にする
      'jsdoc/valid-types': 'error', // 型の妥当性をチェック

      // タグの順序を強制
      'jsdoc/check-tag-names': 'error', // タグ名をチェック
      'jsdoc/check-param-names': 'error', // パラメータ名の整合性をチェック
      'jsdoc/require-asterisk-prefix': 'error', // 各行のアスタリスクを必須に

      // 追加ルール
      'no-console': ['error', { allow: ['warn', 'error'] }], // `console.log()`の使用をエラーにする（`console.warn()`と`console.error()`）は除外
      'spaced-comment': ['error', 'always'], // コメントの直後に半角スペースを強制する
    },
  },
];
