# vite-project

## 作業手順

作業に着手する際は、まずNode.jsのバージョンを`v20.12.2`に合わせ、  
`npm install`でパッケージをインストールしてから着手してください。

作業内容を確認したい場合は、`npm run dev`で開発サーバーが自動で立ち上がります。

Gitにコミットする際は、`npm run build`でコードチェック＆ビルド後にコミットしてください。

## Node.js

このプロジェクトで使用しているNode.jsのバージョンは、`v20.12.2`になります。  
Viteを動作させるためにNode.jsが必要になるので、未インストールの場合はインストールしてください。

### 参考サイト

- [Homebrewのインストール＆使用方法](https://www.kikagaku.co.jp/kikagaku-blog/homebrew-install-howto/#i-5)
- [【Mac】Node開発環境のアップデート](https://0forest.com/npm-update/)

## npmコマンド一覧

以下のコマンドを使用してViteを操作します。

- `npm install`: 必要なパッケージをインストール
- `npm run dev`: 開発サーバーを起動し、srcファイル内をブラウザに表示
- `npm run build`: すべてのリンターとコード整形を実行後、srcファイルをdistファイルにビルド（リンターでエラーが出た場合は、ビルドが実行されません。）
- `npm run preview`: 開発サーバーを起動し、distファイルをブラウザに表示
- `npm run lint`: すべてのリンターを実行
- `npm run markup:lint`: Markuplint（HTMLのリンター）を実行
- `npm run style:lint`: Stylelint（SCSSのリンター）を実行
- `npm run es:lint`: ESLint（JavaScriptのリンター）を実行

## 使用技術一覧

- **Vite**: ビルドツール
- **EJS**: HTMLテンプレートエンジン
- **SCSS**: CSSの拡張言語
- **JavaScript**
- **Markuplint**: HTMLのコード品質を保つためのリンター
- **Stylelint**: CSSのコード品質を保つためのリンター
- **ESLint**: JavaScriptのコード品質を保つためのリンター
- **Prettier**: コード整形ツール
- **vite-plugin-webp-and-path**: ビルド後にjpg・pngをwebpに変換し、読み込みパスをwebpに書き換える

## CSS設計

CSS設計はFLOCSSを使用しています。  
詳しくは以下を参考にしてください。

### 参考サイト

- [FLOCSSドキュメント](https://github.com/hiloki/flocss)
- [FLOCSSを使って破綻しにくいCSS設計を！](https://haniwaman.com/flocss/)

## ディレクトリ構成

基本的なディレクトリ構成は以下になります。  
プロジェクトが進みにつれて多少修正される場合があります。

```
vite-project/
  |─public/  # Viteの処理対象外にしたいファイルを格納する
  |─dist/ 　 # ビルド後に生成される公開用のファイルが格納される
  └─src/　   # 作業フォルダ
      ├─index.html  # ホームページ
      ├─hoge/  # 任意のディレクトリ名
      |    └─hoge.html  # 任意のhtmlファイル
      └─assets/
            ├─ejs/
            |   ├─layout/      # headerやfooterなどのレイアウトパーツを管理
            |   └─metaData.js  # head内のmeta情報を一括管理
            ├─images/ # 画像（ここに保存されている画像は、distではwebpに変換されます）
            ├─js/
            |  ├─modules/    # ページ共通で使用されるjsを管理
            |  ├─pages/      # 特定ページで使用されるjsを管理
            |  ├─ui/         # uiに関わるclassを管理
            |  ├─utils/      # 汎用的な関数または、クラスを管理
            |  ├─globals.js  # 汎用的な変数を管理
            |  └─main.js     # ルートファイル
            └─scss/
               ├─foundation/  # 基本となるスタイル
               |    ├─global/  # SCSSの関数・mixinや変数などを管理
               |    |    ├─_breakpoint.scss  # ブレイクポイントの管理
               |    |    ├─_function.scss    # 関数を管理
               |    |    ├─_mixin.scss       # mixinを管理
               |    |    └─_variable.scss    # 変数を管理
               |    ├─tag/  # タグのみをセレクタする場合のスタイルを管理
               |    ├─_base.scss           # リセットCSSでは足りないスタイルを管理
               |    ├─_css-variable.scss   # CSS変数を管理
               |    ├─_global-bundle.scss  # global/のルートファイル
               |    └─_keyframes.scss      # CSS Keyframesの管理
               ├─layout/  # headerやfooterなどプロジェクト共通のコンテナーブロックを管理
               |─object/  # プロジェクト内で繰り返し使用されるパーツを管理
               |     ├─component/  # 再利用できる小さな単位のモジュールを管理
               |     ├─project/    # 再利用できる大きな単位のモジュールを管理
               |     └─utility/    # わずかなスタイルの調整のための便利クラスを管理
               └─style.scss  # ルートファイル
```