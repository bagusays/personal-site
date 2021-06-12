export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Bagus Panggalih Agung | Personal Web',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: "Bagus Panggalih Agung | Personal Full-stack Developer Portfolio. I'm a Front-End & Back-End Software Developer and more based in Jakarta, Indonesia. Check out my work and my portfolio"
      },
      {
        hid: "og:title",
        name: "og:title",
        content: "Bagus Panggalih Agung | Personal Web"
      },
      {
        hid: "og:site_name",
        name: "og:site_name",
        content: "bagus.in"
      },
      {
        hid: "og:url",
        name: "og:url",
        content: "https://bagus.in"
      },
      {
        hid: "og:description",
        name: "xxx",
        content: "Bagus Panggalih Agung | Personal Full-stack Developer Portfolio. I'm a Front-End & Back-End Software Developer and more based in Jakarta, Indonesia. Check out my work and my portfolio"
      },
      {
        hid: "og:type",
        name: "og:type",
        content: "website"
      },
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/icon/icon-96x96.png'
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&display=swap"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',

    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  bootstrapVue: {
    icons: false,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      "name": "Bagus.in",
      "short_name": "Bagus.in",
      "theme_color": "#212731",
      "background_color": "#212731",
      "display": "standalone",
      "orientation": "portrait",
      "Scope": "/",
      "start_url": "/",
      "icons": [{
          "src": "/icon/icon-72x72.png",
          "sizes": "72x72",
          "type": "image/png"
        },
        {
          "src": "/icon/icon-96x96.png",
          "sizes": "96x96",
          "type": "image/png"
        },
        {
          "src": "/icon/icon-128x128.png",
          "sizes": "128x128",
          "type": "image/png"
        },
        {
          "src": "/icon/icon-144x144.png",
          "sizes": "144x144",
          "type": "image/png"
        },
        {
          "src": "/icon/icon-152x152.png",
          "sizes": "152x152",
          "type": "image/png"
        },
        {
          "src": "/icon/icon-192x192.png",
          "sizes": "192x192",
          "type": "image/png"
        },
        {
          "src": "/icon/icon-384x384.png",
          "sizes": "384x384",
          "type": "image/png"
        },
        {
          "src": "/icon/icon-512x512.png",
          "sizes": "512x512",
          "type": "image/png"
        }
      ],
      "splash_pages": null
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true
      }
    },
    optimization: {
      minimize: true,
      splitChunks: {
        chunks: 'all',
        maxSize: 128000
      }
    },
    babel: {
      compact: true,
    },
  }
}
