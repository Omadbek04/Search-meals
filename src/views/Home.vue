<template>
  <div class="p-8 flex flex-col">
    <input type="text" class="rounded border-2 border-gray-200 w-full" placeholder=" Search for Meals" />
    <div class=" flex gap-2 mt-2 justify-center">
      <router-link to="/" v-for="letter in letters" :key="letter">
        {{ letter }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import store from "../store";

const meals = computed(() => store.state.meals);
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
</script>
