import { PluginFunction } from 'vue'
import Loader from './Loader.vue'

export class ThLoader {
  install: PluginFunction<any> = (Vue) => {
    Vue.component('th-loader', Loader)
  }
}
