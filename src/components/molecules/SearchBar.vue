<template>
  <v-row align="start" no-gutters>
    <v-col>
      <v-text-field
        class="mx-2"
        label="Search"
        variant="underlined"
        color="primary"
      ></v-text-field>
    </v-col>
    <v-col cols="3">
      <CatSelector />
    </v-col>
  </v-row>
</template>

<script>
import CatSelector from '../atoms/CatSelector.vue'

export default {
   components: {
    CatSelector
  },
};
</script>