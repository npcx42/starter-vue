import Vue from 'vue';
import App from './App.vue';
import Home from './components/Home.vue';
import Rules from './components/Rules.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/rules', component: Rules },
];

const router = new VueRouter({
  routes,
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
