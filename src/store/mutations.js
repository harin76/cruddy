import * as MutationTypes from './mutation-types'

const mutations = {
  [MutationTypes.SET_APPLICATIONS]: (state, applications) => {
    state.application = applications
  },
  [MutationTypes.SET_CURRENT_APPLICATION]: (state, currentApplication) => {
    state.currentApplication = currentApplication
  },
  [MutationTypes.SET_CURRENT_MODEL]: (state, currentModel) => {
    state.currentModel = currentModel
  }
}

export default mutations