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
    selectedCat: "",
    query: ""
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
    SET_QUERY(state, query) {
      state.query = query;
    },
  },
  actions: {
    async fetchJoke({ commit }) {
      let url = "https://api.chucknorris.io/jokes"

      if (this.state.selectedCat != "" && this.state.query == "") {
        url += `/random?category=${this.state.selectedCat}`
      }

      if (this.state.selectedCat == "" && this.state.query == "") {
        url = "https://api.chucknorris.io/jokes/random"
      }

      if (this.state.query != "") {
        url += `/search?query=${this.state.query}`
      }
      
      await axios
        .get(url)
        .then((res) => {
          if(res.data.result == undefined) {
            commit("SET_JOKE", res.data);
          }
          else {
            const randomNumber = Math.floor(Math.random() * res.data.result.length)
            commit("SET_JOKE", res.data.result[randomNumber]);
          }
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
    },
    changeQuery({commit}, query){
      commit("SET_QUERY", query);
    }
  },
  modules: {},
});
