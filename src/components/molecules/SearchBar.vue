<template>
  <v-row align="start" no-gutters class="mt-2">
    <v-col>
      <v-form fast-fail @submit.prevent>
        <v-text-field
          class="mx-2"
          label="Search"
          variant="underlined"
          color="primary"
          :rules="[rules.max, rules.min, rules.query]"
          v-model="localQuery"
          @update:modelValue="$store.dispatch('changeQuery', localQuery)"
        />
      </v-form>
    </v-col>
    <v-col cols="3">
      <CatSelector />
    </v-col>
  </v-row>
</template>

<script>
import CatSelector from "../atoms/CatSelector.vue";

export default {
  data: () => ({
    localQuery: "",
    rules: {
      max: (value) => value.length <= 120 || "Max 120 characters",
      min: (value) => value.length > 2 || "Min 3 characters",
      query: (value) => /^\w+$/.test(value) || "Must contain only one word"
    },
  }),
  components: {
    CatSelector,
  },
};
</script>
