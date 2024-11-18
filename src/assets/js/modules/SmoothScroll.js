// -----------------------------
// ES Modules / SmoothScroll
// -----------------------------

/**
 * スムーススクロールを初期化
 */
export class SmoothScroll {
  /**
   * SmoothScrollクラスのインスタンス
   * @class
   * @see https://www.tak-dcxi.com/article/smooth-scroll-implementation-example/ 参考サイト
   */
  constructor() {
    /** ページ内リンクをすべて取得 */
    this._anchorElements = document.querySelectorAll('a[href*="#"]:not([href="#"])');

    this.#initialize();
  }

  /**
   * クラス初期化時に発火するメソッド
   * @private
   */
  #initialize() {
    this._anchorElements.forEach((anchorElement) => {
      // アンカー要素をクリックした時
      anchorElement.addEventListener('click', (event) => this.#clickHandler(event, anchorElement));
    });
  }

  /**
   * クリック時の処理まとめ
   * @private
   * @param {Event} event クリックイベント
   * @param {HTMLElement} anchorElement アンカー要素
   * @returns {void}
   */
  #clickHandler(event, anchorElement) {
    /** href属性に設定されているidを取得 */
    const hash = anchorElement.hash;

    /** 対象要素を取得 */
    const targetElement = document.getElementById(decodeURIComponent(hash.slice(1))) || (hash === '#top' && document.body);

    // 対象要素が存在しない場合、処理を終了
    if (!targetElement) return;

    // クリック時のデフォルト挙動を無効化
    event.preventDefault();

    // 対象要素までスクロール
    this.#scrollHandler(targetElement);

    // 対象要素のフォーカス
    this.#focusHandler(targetElement);

    // ハッシュ値が`#top`の場合、処理を終了
    if (hash === '#top') return;

    // ブラウザの履歴にアンカーリンクのハッシュを追加
    history.pushState({}, '', hash);
  }

  /**
   * 対象要素までスクロール
   * @private
   * @param {HTMLElement} targetElement 対象要素
   */
  #scrollHandler(targetElement) {
    // 対象要素にヘッダー要素のブロックサイズを`scrollMarginBlockStart`に設定
    targetElement.style.scrollMarginBlockStart = this.#getHeaderBlockSize();

    // 対象要素までスクロール
    targetElement.scrollIntoView({ inline: 'end', behavior: 'smooth' });
  }

  /**
   * 対象要素にフォーカスする
   * @private
   * @param {HTMLElement} targetElement 対象要素
   */
  #focusHandler(targetElement) {
    // ターゲット要素にフォーカス
    targetElement.focus({ preventScroll: true });

    // もしアクティブ要素がターゲット要素ではない場合
    if (document.activeElement !== targetElement) {
      // ターゲット要素のtabindexを一時的に-1に設定
      targetElement.setAttribute('tabindex', '-1');

      // 再度フォーカス
      targetElement.focus({ preventScroll: true });
    }
  }

  /**
   * ヘッダー要素の高さを取得して返す
   * @private
   * @returns {string | number} headerの高さを返す。headerが固定されていない場合は0を返す
   */
  #getHeaderBlockSize() {
    /** ヘッダー要素を取得 */
    const header = document.querySelector('[data-fixed-header]');

    // ヘッダー要素が存在しない場合、戻り値として0を返す
    if (!header) return 0;

    /** ヘッダー要素の`position`, `blockSize`の値を取得 */
    const { position, blockSize } = window.getComputedStyle(header);

    /** positionの値が`fixed`または、`sticky`場合はtrueとなる */
    const isFixed = position === 'fixed' || position === 'sticky';

    // isFixedがtrueの場合、BlockSizeを返す。falseの場合は0を返す
    return isFixed ? blockSize : 0;
  }
}
