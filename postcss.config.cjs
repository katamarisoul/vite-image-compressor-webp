/* -----------------------------------------------
  PostCSS.config
----------------------------------------------- */

module.exports = {
  // プラグイン一覧
  plugins: {
    // Vendor Prefixを自動付与するプラグイン
    // ブラウザ範囲の設定は「package.json」の「browserslist」に記述
    autoprefixer: {},

    // メディアクエリをソートして1つにまとめるプラグイン
    'postcss-sort-media-queries': {},
  },
};
