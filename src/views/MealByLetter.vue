<template>
  <div class="flex gap-2 my-6 justify-center flex-wrap px-8">
    <router-link class=" font-semibold text-2xl" :to="{ name: 'byLetter', params: { letter } }" v-for="letter in letters" :key="letter">
      {{ letter }}
    </router-link>
  </div>
  <Meals :meals="meals" />
</template>
<script setup>
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Meals from "../components/Meals.vue";

const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const meals = computed(() => store.state.searchedByLetter);

watch(route, () => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});

onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
</script>
