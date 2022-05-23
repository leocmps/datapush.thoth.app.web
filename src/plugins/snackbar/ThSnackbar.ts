import { PluginFunction } from 'vue'
import Snackbar from './Snackbar.vue'

export class ThSnackbar {
  install: PluginFunction<any> = (Vue) => {
    Vue.component('th-snackbar', Snackbar)
  }
}
