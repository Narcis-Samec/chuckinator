<template>
  <v-card class="ma-2 pa-2 text-h4" height="250px">
    <v-chip
      variant="elevated"
      v-for="category in joke.categories"
      :key="joke.categories"
      color="primary"
      class="mb-2"
    >
      {{ category }}
    </v-chip>
    <p>{{ joke.value }}</p>
  </v-card>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["joke"]),
  },
};
</script>
