/* -----------------------------------------------
  Prettier.config
----------------------------------------------- */

// 参考サイト
// https://zenn.dev/rescuenow/articles/c07dd571dfe10f
// https://ma-vericks.com/blog/vscode-prettier/

module.exports = {
  printWidth: 9999, // 自動折返し文字数
  trailingComma: 'es5', // 複数行の場合、可能な限り末尾のコンマを出力
  tabWidth: 2, // タブサイズ
  semi: true, // ステートメントの最後にセミコロンを付与
  singleQuote: true, // 単一引用符に統一
  endOfLine: 'lf', // 改行コードの指定

  // ファイル単位の設定
  overrides: [
    {
      // 拡張子がcss,scss,htmlの場合
      files: ['**/*.css', '**/*.scss', '**/*.html'],
      options: {
        singleQuote: false, // 単一引用符を無効にして二重引用符を使用する。
      },
    },
  ],
};
