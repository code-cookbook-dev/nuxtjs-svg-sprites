
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/svg-sprite-extract.js',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@/modules/svg-sprite-inject.js',
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      // Find existing rule for images and svg files
      const svgRule = config.module.rules.find((rule) => rule.test.test('.svg'))

      // Replace regex pattern of existing rule to match only images
      svgRule.test = /\.(png|jpe?g|gif|webp)$/

      // Add new rule for svg files
      config.module.rules.push({
        test: /\.svg$/,
        loader: 'raw-loader',
        options: {
          esModule: false
        }
      })
    }
  }
}
