import './sass/main.scss'
import { hello } from './hello'
import 'phaser/dist/phaser.min'

document.head.innerHTML = `
<meta charset="utf-8" />
<title>Breakout</title>
`

document.body.innerHTML = `
<div class="content">
  <h1>Welcome to FuseBox!</h1>
  <p>${hello('CL')}</p>
</div>`

