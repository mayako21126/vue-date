import Vue from 'vue'
import Main from './main.vue'
import show from './components/show.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

//引入组件并使用2个模块
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI)

Vue.http.options.emulateJSON = true;

//hash路由开启
var router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', redirect: '/show'},
    { path: '/show', components: {
      a: show
    } }
  ]
});
//路由切换前后钩子函数
router.beforeEach(function (transition, form, next) {
  var toPath = transition.path;
  console.info(toPath);
  next()
});

router.afterEach(function (transition) {
  console.log('成功浏览到: ' + transition.path + this)
});

var vm = new Vue({
  el: '#app',
  router: router,
  render: h => h(Main)
});

