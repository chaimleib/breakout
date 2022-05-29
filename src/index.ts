import './sass/main.scss'
import './sass/loading-spinner.scss'

async function main() {
  document.title = 'Breakout'

  document.body.innerHTML = `
  <div class="content">
    <h1>Welcome to Webpack!</h1>
    <p>${(await import('./hello')).hello('CL')}</p>
    <div id="game">
      <div class="loading-spinner"></div>
      ${await import('./breakout')}
    </div>
  </div>`
}

main()

