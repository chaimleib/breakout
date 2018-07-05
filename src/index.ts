import './sass/main.scss'
import { hello } from './hello'

document.body.innerHTML = `
<div class="content">
  <h1>Welcome to FuseBox!</h1>
  <p>${hello('CL')}</p>
</div>`

