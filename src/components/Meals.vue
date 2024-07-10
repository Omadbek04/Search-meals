<template>
  <div v-if="!meals.length" class="text-center text-[24px] font-semibold text-red-500 ">There are no meals </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>
<script setup>
import MealItem from "./MealItem.vue";
const { meals } = defineProps({
  meals: {
    required: true,
    type: Array,
  },
});
</script>
