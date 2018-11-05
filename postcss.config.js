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
            },
            browsers: [
                "last 4 versions",
                "iOS >= 8"
            ]
        },

        // 支持nest
        'postcss-nesting': {
        },

        // 支持calc
        'postcss-calc': {
        },

    }
}