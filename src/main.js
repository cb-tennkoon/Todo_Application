import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;
Vue.component("alert",require('./components/alert.vue').default);
Vue.component("todo",require('./components/toDo.vue').default);

// Define a new component called button-counter
Vue.component('button-counter',{
  data() {
    return {
      count:0
    }
  },
  template:'<button v-on:click="count++">You clicked me {{count}} time.</button>'
})
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
