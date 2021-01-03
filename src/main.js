// Import main css
import config from '../gridsome.config'
import '~/assets/style/index.scss'

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, {router, head, isClient}) {
  head.meta.push(
    {key: "og:type", property: "og:type", content: 'website'},
    {key: "og:description", property: "og:description", content: config.siteDescription},
    {key: "og:image", property: "og:image", content: 'https://example.com/nn.jpg'},
    {key: "og:site_name", property: "og:site_name", content: config.siteName}
  )

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
