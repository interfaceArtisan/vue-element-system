const { defineConfig } = require("@vue/cli-service");
const path = require("path");
module.exports = defineConfig({
  publicPath:
    process.env.NODE_ENV === "production" ? "/vue-element-system/" : "/",
  devServer: {
    client: {
      overlay: false,
    },
    setupMiddlewares: require("./mock/mock-server.js"),
  },
  lintOnSave: false, //关闭eslint检查
  transpileDependencies: true,
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    resolve: {
      alias: {
        "@": path.join(__dirname, "src"),
      },
      fallback: {
        path: require.resolve("path-browserify"),
        http: false,
        https: false,
        util: false,
        zlib: false,
        stream: false,
        url: false,
      },
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
      .rule("svg")
      .exclude.add(path.resolve(__dirname, "src/icons/svg"))
      .end();
    // config.module
    //   .rule("worker")
    //   .test(/\.worker\.mjs$/)
    //   .use("worker-loader")
    //   .loader("worker-loader")
    //   .end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(path.resolve(__dirname, "src/icons/svg"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      })
      .end();

    config.when(process.env.NODE_ENV !== "development", (config) => {
      config
        .plugin("ScriptExtHtmlWebpackPlugin")
        .after("html")
        .use("script-ext-html-webpack-plugin", [
          {
            // `runtime` must same as runtimeChunk name. default is `runtime`
            inline: /runtime\..*\.js$/,
          },
        ])
        .end();
      config.optimization.splitChunks({
        chunks: "all",
        cacheGroups: {
          libs: {
            name: "chunk-libs",
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: "initial", // only package third parties that are initially dependent
          },
          elementUI: {
            name: "chunk-elementUI", // split elementUI into a single package
            priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
            test: /[\\/]node_modules[\\/]_?element-ui(.*)/, // in order to adapt to cnpm
          },
          commons: {
            name: "chunk-commons",
            test: path.resolve(__dirname, "src/components"), // can customize your rules
            minChunks: 3, //  minimum common number
            priority: 5,
            reuseExistingChunk: true,
          },
        },
      });
    });
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
        additionalData: `@import "~@/styles/variables.scss";`,
      },
    },
  },
});
