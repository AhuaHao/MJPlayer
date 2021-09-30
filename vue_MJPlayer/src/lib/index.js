
import vue_MJPlayer from './MJPlayer.vue'

let test = {}
test.install = function (Vue, options) {
  Vue.prototype.$msg = 'Hello I am test.js'
}

export default test


