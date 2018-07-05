const { FuseBox, SassPlugin, CSSPlugin } = require('fuse-box')

const fuse = FuseBox.init({
  homeDir: 'src',
  output: 'lib/$name.js',
})
fuse.bundle('app')
  .instructions(' > index.ts')
fuse.run()

