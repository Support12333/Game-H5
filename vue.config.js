const { defineConfig } = require('@vue/cli-service')
const path = require('path');
const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  productionSourceMap: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'))
      .set('@views', resolve('src/views'))

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
}

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        resolve('./src/config.less')
      ],
    })
}
