<template>
  <v-card
    variant="tonal"
    title="Chuckinator"
    subtitle="They're just jokes, people. They can't all be funny."
    class="mx-auto"
    max-width="800"
  >
    <v-img
      src="https://www.seekpng.com/png/detail/110-1104356_chuck-norris-wall-sticker-chuck-norris-png.png"
      alt="Chuck Norris Wall Sticker - Chuck Norris Png@seekpng.com"
    />
    <searchBar />
    <jokeCard />

    <div class="text-center">
      <v-btn tonal color="primary" class="ma-5" @click="this.$store.dispatch('fetchJoke')"
        >Next Joke</v-btn
      >
    </div>

    <v-divider></v-divider>
    <p class="ma-2 text-subtitle-2 text-center">
      Made by Alan Kovac for CGI interview task.
    </p>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
import SearchBar from "../components/molecules/SearchBar.vue";
import JokeCard from "../components/atoms/JokeCard.vue";

export default {
  components: {
    SearchBar,
    JokeCard,
  },
  computed: {
    joke() {
      return this.$store.state.joke;
    },
  },
  mounted() {
    this.$store.dispatch("fetchJoke");
  },
};
</script>
