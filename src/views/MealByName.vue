<template>
  <div class="p-8 pb-0">
    <input required type="text" class="rounded border-2 border-gray-200 w-full" placeholder=" Search for Meals" v-model="keyword" @change="searchMeal" />
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
  <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal"/>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import MealItem from "../components/MealItem.vue";
const router = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeal() {
  store.dispatch("searchMeals", keyword.value);
}

onMounted(() => {
  keyword.value = router.params.name;
  if (keyword.value) {
    searchMeal();
  }
});
</script>
