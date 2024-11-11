// ------------------
// EJS / metaData
// ------------------

// 参考サイト
// https://qiita.com/soundweaver/items/78bd6a62263c397f43f5#ejs%E3%81%AE%E8%A8%AD%E5%AE%9A

/**
 * 本番環境のurl
 * @type {string}
 */
const url = 'https://hoge.com';

/**
 * ページメタデータを生成する関数
 * @param {string} path ページパス
 * @param {object} meta タ情報
 * @returns {object} メタデータの配列を返す
 */
const createPageMeta = (path, meta) => ({
  description: meta.description,
  url: `${url}${path}`,
  ogType: meta.ogType || 'website', // 値が存在しない場合、デフォルト値として`website`とする
  ...(meta.title && { title: meta.title }), // titleが存在する場合のみ追加
  ...(meta.image && { image: meta.image }), // imageが存在する場合のみ追加
});

export const metaData = {
  data: {
    // 共通記述
    common: {
      siteName: 'サイト名', // サイト名
      favicon: '#', // ファビコンのパスを指定
      touchIcon: '#', // apple-touch-iconのパスを指定
      locale: 'ja_JP', // 国や地域を設定
      image: '#', // `og:image`と`twitter:image`のパスを指定
      twitterSite: '@X', // Xのアカウント名
      twitterCard: 'summary_large_image', // Xのサムネイル画像のサイズ
    },
    // ホームページ
    index: createPageMeta('', {
      description: 'ディスクリプション',
      ogType: 'website', // 省略可能。省略した場合は`website`となる。
      // image: "#", // 省略可能。省略した場合`data.common.image`と同じ値となる。
    }),
    // モジュールテンプレート
    template: createPageMeta('/template/', {
      title: 'モジュールテンプレート',
      description: 'テンプレートのディスクリプション',
    }),
  },
};
