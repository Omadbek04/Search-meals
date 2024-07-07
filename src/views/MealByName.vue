<template>
  <div class="p-8 pb-0">
    <input required type="text" class="rounded border-2 border-gray-200 w-full" placeholder=" Search for Meals" v-model="keyword" @change="searchMeal" />
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <div v-for="meal in meals" :key="meal.idMeal" class="bg-white shadow rounded-2xl">
      <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl w-full h-80 object-center object-cover" loading="lazy" />
      <h3 class="p-4 font-bold text-[20px]">{{ meal.strMeal }}</h3>
      <div class="p-4 flex items-center justify-between">
        <a :href="meal.strYoutube" target="_blank " class="text-[18px] text-indigo-600 hover:text-indigo-500 font-medium">YouTube</a>
        <router-link to="/" class="text-red-500 font-medium text-[18px]"> View </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import { useRoute } from "vue-router";

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
