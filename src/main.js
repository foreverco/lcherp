import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 守卫路由
import "./router/permit";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

import Avue from "@smallwei/avue";
import "@smallwei/avue/lib/index.css";
Vue.use(Avue);
//如果使用字典需要赋值axios为全局
import axios from "axios";
window.axios = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
