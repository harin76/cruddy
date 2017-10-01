import * as MutationTypes from './mutation-types'

const configure = (service) => {
  const getApplications = ({commit}, search) => {
    service
      .applications
      .find(search)
        .then((response) => {
          commit(MutationTypes.SET_APPLICATIONS, response.data.result)
        })
        .catch((error) => {
          commit(MutationTypes.SET_ERROR, error.data.message)
        })
  }
  return {
    getApplications
  }
}

export default {configure}