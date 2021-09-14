import Button from './components/Button.vue'
import './assets/css/index.less'

function install(Vue) {
    Vue.component(Button.name, Button)
}
export default install