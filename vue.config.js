const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  devServer: {
    client: {
      overlay: false
    },
    setupMiddlewares: require('./mock/mock-server.js')
  },
  lintOnSave: false, //关闭eslint检查
  transpileDependencies: true,
  configureWebpack: {
    base: '/vue-element-system/',

    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src')
      },
      fallback: {
        path: require.resolve('path-browserify'),
        http: false,
        https: false,
        util: false,
        zlib: false,
        stream: false,
        url: false
      }
    },
  },
    chainWebpack(config) {
      // it can improve the speed of the first screen, it is recommended to turn on preload
      // it can improve the speed of the first screen, it is recommended to turn on preload
      // config.plugin('preload').tap(() => [
      //   {
      //     rel: 'preload',
      //     // to ignore runtime.js
      //     // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
      //     fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
      //     include: 'initial'
      //   }
      // ])

      // // when there are many pages, it will cause too many meaningless requests
      // config.plugins.delete('prefetch')

      // set svg-sprite-loader
      config.module
        .rule('svg')
        .exclude.add(path.resolve(__dirname, 'src/icons/svg'))
        .end()
      config.module
        .rule('worker')
        .test(/\.worker\.mjs$/)
        .use('worker-loader')
        .loader('worker-loader')
        .end()
      config.module
        .rule('icons')
        .test(/\.svg$/)
        .include.add(path.resolve(__dirname, 'src/icons/svg'))
        .end()
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
          symbolId: 'icon-[name]'
        })
        .end()
    },
    // module: {
    //   rules: [
    //     {
    //       test: /\.svg$/,
    //       loader: 'svg-sprite-loader',
    //       include: [
    //         path.resolve(__dirname, 'src/icons/svg')
    //       ],
    //       options: {
    //         symbolId: 'icon-[name]'
    //       }
    //     }
    //   ]
    // }
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      scss: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.sass` 这个文件
        // 注意：在 sass-loader v8 中，这个选项名是 "prependData"
        additionalData: `@import "~@/styles/variables.scss";`
      },
    }
  }
})
