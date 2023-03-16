<template>
  <v-combobox
    label="Category"
    variant="underlined"
    color="primary"
    :items="categories"
    class="mr-2"
    v-model="localCat"
    @update:modelValue="$store.dispatch('changeCat', localCat)"
    data-testid="combobox"
  ></v-combobox>
</template>

<script>
import { mapState } from "vuex";

export default {
  data: () => ({
    localCat: null,
  }),
  computed: {
    ...mapState(["categories"]),
  },
  mounted() {
    this.$store.dispatch("fetchCategories");
  },
};
</script>
