/* -----------------------------------------------
  ES Modules / viewportFixed
----------------------------------------------- */

/**
 * デバイス幅が375px未満の場合、viewportを固定
 * @function
 * @see https://zenn.dev/tak_dcxi/articles/690caf6e9c4e26
 */
export function viewportFixed() {
  !(function () {
    /**
     * viewportを設定するmeta要素を取得
     * @type {HTMLElement}
     */
    const viewport = document.querySelector('meta[name="viewport"]');

    /**
     * ビューポートを切り替える関数
     * @function
     */
    const switchViewport = () => {
      /**
       * ビューポートの設定値
       * @type {string}
       */
      const value = window.outerWidth > 375 ? 'width=device-width,initial-scale=1' : 'width=375';

      if (viewport.getAttribute('content') !== value) {
        viewport.setAttribute('content', value);
      }
    };

    addEventListener('resize', switchViewport, false);
    switchViewport();
  })();
}
