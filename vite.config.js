// ---------------
// Vite.config
// ---------------

import { defineConfig } from 'vite';
import path from 'path';
import globule from 'globule';
import { ViteEjsPlugin } from 'vite-plugin-ejs';
import sassGlobImports from 'vite-plugin-sass-glob-import';
import { metaData } from './src/assets/ejs/metaData';
import VitePluginWebpAndPath from 'vite-plugin-webp-and-path';

const inputs = {};
const documents = globule.find([`./src/**/*.html`, `./src/assets/**/*.scss`, `./src/assets/js/main.js`], {
  ignore: [`./src/**/_*.scss`],
});

documents.forEach((document) => {
  /**
   * ファイルパスを取得する
   * 例：`index.html`, `about/index.html`, `scss/style.scss`
   * @type {string}
   */
  const filePath = document.replace(`./src/`, '');

  // もしファイル拡張子が`.html`の場合
  if (path.parse(document).ext === '.html') {
    // 配列inputsに格納する
    inputs[filePath] = path.resolve(__dirname, 'src', filePath);
  } else {
    /**
     * ファイル名を取得
     * 例：`src/scss/style.scss` → `style`
     * @type {string}
     */
    const key = path.parse(document).name;

    // 配列inputsに格納する
    inputs[key] = path.resolve(__dirname, 'src', filePath);
  }
});

export default defineConfig({
  // ルートディレクトリ（index.htmlが置かれている場所）を指定
  root: './src',
  // ビルド時の設定
  build: {
    // 生成されるファイルの出力先を指定
    outDir: '../dist',
    // ルートディレクトリを空にする
    emptyOutDir: true,
    // モジュールバンドラー「Rollup」の設定
    rollupOptions: {
      // 入力オプション
      input: { ...inputs },
      // 出力オプション
      output: {
        entryFileNames: `assets/js/[name].js`,
        chunkFileNames: `assets/js/[name].js`,
        // フォルダ名の設定
        assetFileNames: (assetInfo) => {
          /**
           * 渡ってきたファイルの拡張子を取得
           * @type {string}
           */
          let extension = assetInfo.name.split('.')[1];

          // 画像ファイルまたは、フォントファイルの場合
          if (/png|jpe?g|svg|gif|tiff|bmp|webp|avif|ico|ttf|otf|eot|woff|woff2/i.test(extension)) {
            const originalFilePath = assetInfo.originalFileName;
            const fileName = assetInfo.name;
            const filePath = originalFilePath.replace(fileName, '');

            return `${filePath}[name][extname]`;
          }

          // ディレクトリを作成して返す
          return `assets/${extension}/[name][extname]`;
        },
      },
    },
    minify: true, // Minifyの有無（JavaScript）
    cssMinify: true, // Minifyの有無（CSS）
    assetsInlineLimit: 0, // base64 URL としてのインライン化を無効
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  plugins: [ViteEjsPlugin(metaData), sassGlobImports(), VitePluginWebpAndPath()],
  // ローカルサーバーの設定
  server: {
    port: 8080,
    open: 'index.html',
  },
});
