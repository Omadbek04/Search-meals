<template>
  <div class="bg-white shadow rounded-2xl">
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl w-full h-80 object-center object-cover" loading="lazy" />
    <h3 class="p-4 font-bold text-[20px]">{{ meal.strMeal }}</h3>
    <div class="p-4 flex items-center justify-between">
      <YouTubeBtn :href="meal.strYoutube">YouTube</YouTubeBtn>
      <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }" class="text-red-500 font-medium text-[18px]"> View </router-link>
    </div>
  </div>
</template>

<script setup>
import YouTubeBtn from "../components/YouTubeBtn.vue";

const { meal } = defineProps({
  meal: Object,
});
</script>
