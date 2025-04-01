const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    proxy: {
      '/api': {
        target: 'http://excelencia.myqnapcloud.com:3002',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
  transpileDependencies: true,
  pages: {
    index:{
      entry:'src/main.js',
      title:'Sistema de Oodntologos',
    }
  },
  publicPath: process.env.NODE_ENV === 'production' 
    ? '/Odontologos/' // prod
    : '/', // dev
})

