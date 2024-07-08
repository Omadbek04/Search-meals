<template>
  <div class="p-8">
    <h1 class="text-5xl font-bold mb-4">Ingredients</h1>
    <input required type="text" class="rounded border-2 border-gray-200 w-full mb-3" placeholder=" Search for Ingredients" v-model="keyword" />

    <router-link :to="{ name: 'byIngredient', params: { ingredient: ingradient.strIngredient } }" class="bg-white p-3 mb-3 rounded shadow block" v-for="ingradient of computedIngredients" :key="ingradient.idIngredient">
      <h3 class="text-2xl font-bold">{{ ingradient.strIngredient }}</h3>
    </router-link>
  </div>
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import axiosClient from "../axiosClient";

const ingradients = ref([]);
const keyword = ref("");

const computedIngredients = computed(() => {
  if (!computedIngredients) return ingradients;
  return ingradients.value.filter((i) => i.strIngredient?.toLowerCase().includes(keyword.value.toLowerCase()));
});

onMounted(() => {
  axiosClient.get(`list.php?i=list`).then(({ data }) => {
    ingradients.value = data.meals;
  });
});
</script>
