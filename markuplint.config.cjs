/* -----------------------------------------------
  Markuplint.config
----------------------------------------------- */

module.exports = {
  // 基本ルール
  extends: ['markuplint:recommended'],
  parser: {
    '\\.ejs$': '@markuplint/ejs-parser',
  },
  // 追加ルール
  rules: {},
  // 特定の要素にのみルールを適応
  nodeRules: [
    // EJSを使用している場合に発生する、以下のエラーを回避するためのルール
    // title要素が存在しない
    // meta[charset="UTF-8"が存在しない
    {
      selector: 'head',
      rules: {
        'permitted-contents': false,
        'required-element': {
          options: {
            ignoreHasMutableContents: true,
          },
        },
      },
    },
  ],
};
