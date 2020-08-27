import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    entries: [],
    baseUrl: 'https://api.publicapis.org',
  },
  getters: {
    // allEntries: (state) => state.entries,
  },
  mutations: {
    syncEntriesFromApi(state, entries) {
      state.entries = entries;
    },
  },
  actions: {
    syncEntriesFromApi(context) {
      Axios.get(`${context.state.baseUrl}/entries`)
        .then((response) => {
          context.commit('syncEntriesFromApi', response.data.entries);
        })
        .catch((error) => {
          console.error(error.message);
        });
    },
  },
  modules: {
  },
});
