import './sass/main.scss';
import './sass/loading-spinner.scss';
import { baseConfig } from './breakout/config';

async function main() {
  document.title = 'Breakout';

  document.body.innerHTML = `
  <div class="content">
    <h1>Play Breakout!</h1>
    <div id="game" style="
      width: ${baseConfig.width}px;
      height: ${baseConfig.height}px;
    ">
      <div class="loading-spinner"></div>
    </div>
  </div>`;

  (await import('./breakout')).init('game');
}

main();

