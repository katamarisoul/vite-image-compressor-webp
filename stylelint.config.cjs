// --------------------
// Stylelint.config
// --------------------

/**
 * FLOCSSの命名規則に一致する正規表現
 * @type {string}
 */
const FLOCSS_PATTERN = '^(l|c|p|u|is)(-[a-z0-9]+)+$|^(l|c|p|u)(-[a-z0-9]+)+__[a-z0-9]+(-[a-z0-9]+)*$|^(l|c|p|u)(-[a-z0-9]+)+-(-[a-z0-9]+)+$|^(l|c|p|u)(-[a-z0-9]+)+__[a-z0-9]+(-[a-z0-9]+)*-(-[a-z0-9]+)+$';

/**
 * 任意のクラス名を使用可能にするための正規表現
 * 記述例: 1つの場合 'hoge|' 1つ以上の場合 'hoge|hoge2|'
 * @type {string}
 */
const CUSTOM_PATTERN = '';

module.exports = {
  // 基本ルール
  extends: [
    // 標準となるルール
    'stylelint-config-standard-scss',
    // プロパティの順番を並び替える
    'stylelint-config-recess-order',
  ],
  // 追加ルール
  rules: {
    // 使用可能なセレクタを指定
    'selector-class-pattern': [
      // セレクタを調べるための正規表現（FLOCSSのルールと一致するか調べる）
      `${CUSTOM_PATTERN + FLOCSS_PATTERN}`,
      // エラー時のメッセージ
      { message: 'FLOCSSの命名規則を守ってください。' },
    ],
    // 疑似要素のコロンを2個にする「::before, ::after」
    'selector-pseudo-element-colon-notation': 'double',
    // 「&__element」「&--modifier」を無効にする（クラスと疑似クラスは許容される「&.c-block」「:hover」など）
    'scss/selector-no-union-class-name': true,
    'scss/dollar-variable-pattern': null,
    'scss/at-mixin-pattern': null,
    'scss/at-function-pattern': null,
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-blockless', 'first-nested'],
        ignore: ['after-comment'],
        ignoreAtRules: ['include', 'media'],
      },
    ],
  },
  // ルールを適用しないファイルを設定
  ignoreFiles: [],
};
