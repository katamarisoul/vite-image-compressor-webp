// -----------
// ES main
// -----------

// modulepreloadのポリフィル
// これを記述していないと、以下の記述のみのjsファイルがビルドされてしまう
import 'vite/modulepreload-polyfill';
import { SmoothScroll } from './modules/SmoothScroll';

document.addEventListener('DOMContentLoaded', () => {
  new SmoothScroll();
});
