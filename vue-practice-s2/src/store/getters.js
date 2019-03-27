import state from './state'

const getters = {
    isAuth (state) {
      return !!state.token
    }
  }

export default getters