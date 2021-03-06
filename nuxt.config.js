import colors from 'vuetify/es5/util/colors'

export default {
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
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
    { src: '@/plugins/global-components' },
    { src: '@/plugins/i18n' },
    { src: '@/plugins/vee-validate' }
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://auth.nuxtjs.org
    '@nuxtjs/auth-next',

    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',

    // Doc: https://nuxt-community.github.io/nuxt-i18n
    'nuxt-i18n',

    // Doc: https://pwa.nuxtjs.org
    '@nuxtjs/pwa'
  ],
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/api/auth/login', method: 'post' },
          logout: { url: '/api/auth/logout', method: 'post' },
          user: { url: '/api/auth/user', method: 'get' }
        }
      }
    }
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: 'https://jsonplaceholder.typicode.com'
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** i18n module configuration
  ** See https://nuxt-community.github.io/nuxt-i18n/options-reference.html
  */
  i18n: {
    defaultLocale: 'en',
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json' },
      { code: 'he', iso: 'he-IL', file: 'he.json' }
    ],
    baseUrl: 'http://localhost:3000',
    seo: false,
    lazy: true,
    langDir: 'lang/'
  },
  pwa: {
    manifest: {
      name: 'Users App',
      short_name: 'Users App',
      theme_color: '#4193c0'
    }
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [
      'vee-validate/dist/rules'
    ],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
