import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    joke: {
      categories: null,
      created_at: null,
      id: null,
      updated_at: null,
      url: null,
      vaule: null,
    },
    categories: [],
    selectedCat: null

  },
  getters: {
    getJoke: (state) => state.joke,
  },
  mutations: {
    SET_JOKE(state, joke) {
      state.joke = joke;
    },
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
    SET_CATEGORIE(state, selectedCat) {
      state.selectedCat = selectedCat;
    },
  },
  actions: {
    async fetchJoke({ commit }) {
      let url = "https://api.chucknorris.io/jokes/random"

      if (this.state.selectedCat != null) {
        url += `?category=${this.state.selectedCat}`
      }

      if (this.state.selectedCat == "") {
        url = "https://api.chucknorris.io/jokes/random"
      }
      
      await axios
        .get(url)
        .then((res) => {
          commit("SET_JOKE", res.data);
        })
        .catch((err) => console.log(err));
    },
    async fetchCategories({ commit }) {
      await axios
        .get("https://api.chucknorris.io/jokes/categories")
        .then((res) => {
          commit("SET_CATEGORIES", res.data);
        })
        .catch((err) => console.log(err));
    },
    changeCat({commit}, selectedCat){
      commit("SET_CATEGORIE", selectedCat);
    }
  },
  modules: {},
});
