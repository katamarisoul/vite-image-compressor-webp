// -----------
// ES main
// -----------

// modulepreloadのポリフィル
// これを記述していないと、以下の記述のみのjsファイルがビルドされてしまう
import 'vite/modulepreload-polyfill';
import { viewportFixed } from './modules/viewportFixed';
import { SmoothScroll } from './modules/SmoothScroll';

document.addEventListener('DOMContentLoaded', () => {
  viewportFixed();
  new SmoothScroll();
});
