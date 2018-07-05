const { FuseBox, CSSPlugin, SassPlugin, WebIndexPlugin } = require('fuse-box')

const fuse = FuseBox.init({
  homeDir: 'src',
  output: 'lib/$name.js',
  plugins: [
    [ SassPlugin(), CSSPlugin() ],
    WebIndexPlugin({ path: '.' }),
  ],
})

fuse.dev()

fuse.bundle('app')
  .instructions(' > index.ts')
  .watch()
  .hmr()

fuse.run()

