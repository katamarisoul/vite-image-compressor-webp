// --------------
// ES globals
// --------------

/** css変数からPCサイズのブレイクポイントを取得 */
export const BREAKPOINT_PC = getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-pc');

/** css変数からSPサイズのブレイクポイントを取得 */
export const BREAKPOINT_SP = getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-sp');
