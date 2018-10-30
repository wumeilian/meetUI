module.exports = {
    plugins: {

        // 支持@import
        'postcss-import': {},

        // css体积压缩
        'cssnano': {},

        // 支持nextcss
        'postcss-cssnext': {
            features: {
                rem: false // 禁止rem转px
            }
        },

        // 支持加前缀
        'autoprefixer': {
            "browsers": [
                "last 4 versions",
                "iOS >= 8"
            ]
        }
    }
}