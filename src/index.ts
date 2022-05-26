import './sass/main.scss'

async function main() {
  document.head.innerHTML = `
  <meta charset="utf-8" />
  <title>Breakout</title>
  `

  document.body.innerHTML = `
  <div class="content">
    <h1>Welcome to Webpack!</h1>
    <p>${(await import('./hello')).hello('CL')}</p>
  </div>`
}

main()

