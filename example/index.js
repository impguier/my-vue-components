import Vue from 'vue'
import VueRouter from 'vue-router'
import App from 'src/app.vue'
import Index from 'src/index.vue'
Vue.use(VueRouter)
const routes = [{
    path:'/',
    component: Index
}]
const router = new VueRouter({
    routes
})
new Vue({
    el:'#app',
    router,
    render:h=>h(App)
})