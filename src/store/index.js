import { createStore } from 'vuex'

export default createStore({
  state: {
    numUsers: 1,
    users: [
      {
        username: 'Raul Jimenez',
        tipo: 'socio'
      },
      {
        username: 'Juan Perez',
        tipo: 'instructor'
      },
      {
        username: 'Daniela Gomez',
        tipo: 'recepcion'
      }
    ],
    passed: {
      name: '',
      email: ''
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
