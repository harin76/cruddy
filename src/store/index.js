
import state from './state'
import * as getters from './getters'
import actions from './actions'
import mutations from './mutations'

const configure = (service) => {
  return {
    namespaced: true,
    state,
    getters,
    mutations,
    actions : actions.configure(service)
  }
}

export default configure
