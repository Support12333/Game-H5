const webpack = require('webpack')
const { defineConfig } = require('@vue/cli-service')
// const { VantResolver } = require('unplugin-vue-components/resolvers');
// const ComponentsPlugin = require('unplugin-vue-components/webpack');
const path = require('path');
const resolve = (dir) => path.join(__dirname, dir);

module.exports = defineConfig({
  productionSourceMap: false,
  configureWebpack: {
    // 配置vant组件按需加载
    plugins: [
      // ComponentsPlugin({
      //   resolvers: [VantResolver()],
      // }),

      // 配置全局对象或方法
      new webpack.ProvidePlugin({
        /**
         * @type {Function}
         * @description 埋点事件
         */
        Tracking: ['@utils/tracking.js', 'default'],
      })
    ]
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'))
      .set('@views', resolve('src/views'))
      .set('@utils', resolve('src/utils'))
      .set('@api', resolve('src/api'))
      .set('@i18n', resolve('src/i18n'))

    if (process.env.NODE_ENV === "production") {
      // 去除打印和注释输出
      config.optimization.minimizer('terser').tap(args => {
        Object.assign(args[0].parallel, true)
        Object.assign(args[0].terserOptions, {
          compress: {
            drop_console: true,
            drop_debugger: true,
            pure_funcs: ['console.log', 'console.error', 'alert']
          },
          format: {
            comments: false
          }
        })
        Object.assign(args[0].extractComments, false)
        return args
      })
    }
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)));
  },
  devServer: {
    proxy: {
      '/apis': {
        //解决跨域
        target: 'http://192.168.0.159:8080/',
        changerOrigin: true,  //是否跨域
        pathRewrite: {
          '^/apis': ''  //需要rewrite重写
        }
      }
    }
  }
})

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        resolve('./src/config.less')
      ],
    })
}
