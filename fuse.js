const {
  FuseBox,
  CSSPlugin,
  SassPlugin,
  Sparky,
  UglifyJSPlugin,
  WebIndexPlugin,
} = require('fuse-box')

let fuse, app, vendor, isProduction = false

Sparky.task('config', () => {
  fuse = FuseBox.init({
    homeDir: 'src',
    output: 'lib/$name.js',
    hash: isProduction,
    sourceMaps: !isProduction,
    plugins: [
      [ SassPlugin(), CSSPlugin() ],
      WebIndexPlugin({ path: '.' }),
      isProduction && UglifyJSPlugin(),
    ],
    log: {
      clearTerminalOnBundle: true,
    },
  })
  app = fuse.bundle('app')
    .instructions(' > index.ts')
  if (!isProduction) {
    fuse.dev()
  }
})

Sparky.task('default', [ 'config' ], () => {
  app.hmr().watch()
  return fuse.run()
})

Sparky.task('dist', [ 'set-production', 'config' ], () => {
  return fuse.run()
})

Sparky.task('set-production', () => {
  isProduction = true
  return Sparky.src('lib/').clean('lib/')
})

Sparky.task('test', [ 'config' ], () => {
  return app.test()
})

