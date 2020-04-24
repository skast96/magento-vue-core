const path = require("path");

module.exports = {
    outputDir: path.resolve(__dirname, './vue-core/dist'),
    chainWebpack: config => {
        config
            .entry("app")
            .clear()
            .add("./vue-core/main.js")
            .end();
        config.resolve.alias
            .set("@", path.join(__dirname, "./vue-core"))

        const svgRule = config.module.rule('svg')
        svgRule.uses.clear()
        svgRule
            .use('vue-svg-loader')
            .loader('vue-svg-loader')

        const jsRule = config.module.rule('js')
        jsRule.uses.clear()
        jsRule.exclude.add(/node_modules/)
        jsRule.use('babel-loader')
            .loader('babel-loader')
    },
    configureWebpack: {
        output: {
            filename: 'index.js'
        },
    }
};
