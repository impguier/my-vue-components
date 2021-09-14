import Button from './components/Button.vue'
import './css/index.less'
function install(Vue) {
    Vue.component(Button.name, Button)
}
export default install