import { createStore } from 'vuex'

describe('Vuex store', () => {
  let store

  beforeEach(() => {
    store = createStore({
      state: {
        joke: {
          categories: ['animal'],
          created_at: '2021-09-01 10:00:00',
          id: 'abc123',
          updated_at: '2021-09-01 11:00:00',
          url: 'https://api.chucknorris.io/jokes/abc123',
          value: 'Chuck Norris once rode a bull, and nine months later it had a calf.'
        },
        categories: ['animal', 'career', 'celebrity'],
        selectedCat: 'animal',
        query: ''
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
          const mockData = {
            categories: ['animal'],
            created_at: '2021-09-01 10:00:00',
            id: 'def456',
            updated_at: '2021-09-01 11:00:00',
            url: 'https://api.chucknorris.io/jokes/def456',
            value: 'Chuck Norris can divide by zero.'
          }
          commit('SET_JOKE', mockData)
        },
        async fetchCategories({ commit }) {
          const mockData = ['animal', 'career', 'celebrity']
          commit('SET_CATEGORIES', mockData)
        },
        changeCat({commit}, selectedCat){
          commit('SET_CATEGORIE', selectedCat);
        },
        changeQuery({commit}, query){
          commit('SET_QUERY', query);
        }
      },
      modules: {},
    })
  })

  it('fetches a random joke', async () => {
    await store.dispatch('fetchJoke')
    expect(store.state.joke.id).toBe('def456')
  })

  it('fetches categories', async () => {
    await store.dispatch('fetchCategories')
    expect(store.state.categories).toEqual(['animal', 'career', 'celebrity'])
  })

  it('changes the selected category', () => {
    store.commit('SET_CATEGORIE', 'career')
    expect(store.state.selectedCat).toBe('career')
  })

  it('changes the search query', () => {
    store.commit('SET_QUERY', 'judo')
    expect(store.state.query).toBe('judo')
  })

})