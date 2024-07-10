<template>


  <div class="bg-white shadow-xl rounded-3xl pb-4 ">
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-3xl w-full h-80 object-center object-cover" loading="lazy" />
    <div class=" px-4 pt-2 flex  flex-col gap-2">
      <h3 class="font-bold text-[20px] line-clamp-1">{{ meal.strMeal }}</h3>
      <p class="mb-4">
        {{ truncateWords(meal.strInstructions, 20) }}
      </p>
      <div class="flex items-center justify-between">
        <YouTubeBtn :href="meal.strYoutube">YouTube</YouTubeBtn>
        <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }" class="text-red-500 font-medium text-[18px]"> View </router-link>
      </div>
    </div>
  </div>
</template>









<script setup>
import YouTubeBtn from "../components/YouTubeBtn.vue";

function truncateWords(str, count) {
  if (!str) return str;
  return str.split(" ").slice(0, count).join(" ");
}

const { meal } = defineProps({
  meal: {
    required: true,
    type: Object,
  },
});

</script>