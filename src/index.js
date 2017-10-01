// es6 polyfill
import 'core-js/fn/array/find'
import 'core-js/fn/array/find-index'

import crudView from './components/CRUDView'
import configure from './store'

const cruddy = {
  crudView
}

const install = function (Vue, opts = {}) {
  
  // Setup the store
  opts.store.registerModule('cruddy', configure(opts.service))
  Object.keys(cruddy).forEach((key) => {
    Vue.component(key, cruddy[key])
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

module.exports = Object.assign(cruddy, {install})  // eslint-disable-line no-undef