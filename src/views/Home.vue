<template>
  <div class="p-8 flex flex-col">

    <input type="text" class="rounded border-2 border-gray-200 w-full" placeholder=" Search for Meals" />
    
    <div class="flex gap-2 mt-2 justify-center">
      <router-link :to="{ name: 'byLetter', params: { letter } }" v-for="letter in letters" :key="letter">
        {{ letter }}
      </router-link>
    </div>
 
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import axiosClient from "../axiosClient.js";
import store from "../store";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const ingredients = ref([]);

onMounted(async () => {
  const response = await axiosClient.get("/list.php?i=list");
  ingredients.value = response.data;
});
</script>
