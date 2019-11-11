import Vue from "nativescript-vue"
import Welcome from "./views/Welcome"
import AppSplitter from "./views/AppSplitter"

import store from "./store"
import VueDevtools from "nativescript-vue-devtools"

if (TNS_ENV !== "production") {
  Vue.use(VueDevtools)
}

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = TNS_ENV === "production"

new Vue({
  store,
  render: h => h("frame", [h(Welcome)])
}).$start()
