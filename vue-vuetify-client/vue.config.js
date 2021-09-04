module.exports = {
  transpileDependencies: [
    'vuetify'
  ],

  publicPath: process.env.NODE_ENV === 'production' ? '/static/quizie/' : 'http://localhost:8080',

  outputDir: '../django_drf_server/static/quizie',

  indexPath: '../../templates/base-vue.html',

  pluginOptions: {
    cordovaPath: 'src-cordova'
  },

  chainWebpack: config =>{
    config.devServer
        .public('http://localhost:8080')
        .hotOnly(true)
        .headers({'Access-Control-Allow-Origin': '*'})
        .writeToDisk(filePath => filePath.endsWith('index.html'))
  }
}
