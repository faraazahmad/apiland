import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    entries: [],
    categories: [],
    filterTags: ['Animals', 'Development'],
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
    toggleCategory(state, category: string) {
      if (state.filterTags.includes(category)) {
        state.filterTags.splice(state.filterTags.indexOf(category), 1);
      } else {
        state.filterTags.push(category);
      }
    },
  },
  actions: {
    syncEntriesFromApi(context) {
      Axios.get(`${context.state.baseUrl}/entries`)
        .then((response) => {
          context.commit('syncEntriesFromApi', response.data.entries);
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error(error.message);
        });
    },
    syncCategoriesFromApi(context) {
      Axios.get(`${context.state.baseUrl}/categories`)
        .then((response) => {
          context.commit('syncCategoriesFromApi', response.data);
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error(error);
        });
    },
    toggleCategory(context, category) {
      context.commit('toggleCategory', category);
    },
  },
  modules: {
  },
});
