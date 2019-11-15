import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store/store";
import VueIconFont from "vue-icon-font-pro";
import ElementUI from "element-ui";
import { Input } from "element-ui";
import Vant from "vant";
import "@/assets/iconfont";

Vue.config.productionTip = false;
Vue.use(VueIconFont);
Vue.use(ElementUI);
Vue.use(Input);
Vue.use(Vant);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
