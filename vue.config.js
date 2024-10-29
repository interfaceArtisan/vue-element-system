const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  devServer: {
    client: {
      overlay: {
        warnings: false, //不显示警告
        errors: false	//不显示错误
      }
    },
    setupMiddlewares: require('./mock/mock-server.js')
  },
  lintOnSave: false, //关闭eslint检查
  transpileDependencies: true,
  configureWebpack: {
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
    module: {
      rules: [
        {
          test: /\.svg$/,
          loader: 'svg-sprite-loader',
          include: [
            path.resolve(__dirname, 'src/icons')
          ],
          options: {
            symbolId: 'icon-[name]'
          }
        }
      ]
    }
  },
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
