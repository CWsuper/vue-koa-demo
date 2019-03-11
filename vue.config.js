module.exports = {
   // 基本路径
   publicPath: '/',
   // 输出文件目录
   outputDir: 'dist',
   // eslint-loader 是否在保存的时候检查
   lintOnSave: true,
   // css相关配置
   css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // css预设器配置项
    loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
   },
   // webpack-dev-server 相关配置
   devServer: {
    port: 1234,
    proxy: 'http://127.0.0.1:3000', // 设置代理
   },
   // 第三方插件配置
   pluginOptions: {
    // ...
   },
  }