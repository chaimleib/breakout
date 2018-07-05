const { FuseBox, CSSPlugin, SassPlugin, WebIndexPlugin } = require('fuse-box')

const fuse = FuseBox.init({
  homeDir: 'src',
  output: 'lib/$name.js',
  plugins: [
    [ SassPlugin(), CSSPlugin() ],
    WebIndexPlugin({ path: '.' }),
  ],
})
fuse.bundle('app')
  .watch()
  .instructions(' > index.ts')
fuse.run()

