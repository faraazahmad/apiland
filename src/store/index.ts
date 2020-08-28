import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    entries: [],
    categories: [],
    baseUrl: 'https://api.publicapis.org',
  },
  getters: {},
  mutations: {
    syncEntriesFromApi(state, entries) {
      state.entries = entries;
    },
    syncCategoriesFromApi(state, categories) {
      state.categories = categories;
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
    syncCategoriesFromApi(context) {
      Axios.get(`${context.state.baseUrl}/categories`)
        .then((response) => {
          context.commit('syncCategoriesFromApi', response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  modules: {
  },
});
