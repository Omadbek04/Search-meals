<template>
  <div class="container mx-auto  mt-5 px-8">
    <h3 class=" text-2xl md:text-5xl font-bold mb-5">{{ meal.strMeal }}</h3>
    <div class=" h-[400px] md:h-[600px] mb-5 ">
      <img :src="meal.strMealThumb" :alt="meal.strMeal"  class=" w-full  h-full object-contain md:object-cover object-center"/>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
      <div><strong>Category: </strong> {{ meal.strCategory }}</div>
      <div><strong>Area: </strong> {{ meal.strArea }}</div>
      <div><strong>Tags: </strong> {{ meal.strTags }}</div>
    </div>

     <div class=" my-4">{{ meal.strInstructions }}</div>

    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h2 class="text-2xl mb-3 font-semibold">Ingredients</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)">
            <li v-bind:key="ind" v-if="meal[`strIngredient${ind + 1}`]">{{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}</li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl mb-3 font-semibold">Measures</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)">
            <li v-bind:key="ind" v-if="meal[`strMeasure${ind + 1}`]">{{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }}</li>
          </template>
        </ul>
      </div>
    </div>

    <div class="mt-4 flex items-center justify-between mb-2">
      <YouTubeBtn :href="meal.strYoutube">Go to YouTube</YouTubeBtn>
      <a v-if="meal.strSource" :href="meal.strSource" target="_blank" class="text-red-500 font-medium text-[18px]"> View Orginal Source</a>
    </div>

  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
import YouTubeBtn from "../components/YouTubeBtn.vue";

const meal = ref({});
const route = useRoute();

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {};
  });
});
</script>
