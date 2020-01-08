1.安装jquery bootstrap(需安装popper.js) (需导入webpack,还需要配置jquery)
plugins: [
    new webpack.optimize.CommonsChunkPlugin('common'),
    new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    Popper: ['popper.js', 'default']
    })
    ],
