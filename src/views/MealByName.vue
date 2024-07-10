<template>
  <div class="p-8 pb-0 mb-5">
    <input required type="text" class="rounded border-2 border-gray-200 w-full" placeholder=" Search for Meals" v-model="keyword" @change="searchMeal" />
  </div>
  <Meals :meals="meals"/>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";




const router = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeal() {
  if(keyword.value){
    store.dispatch("searchMeals", keyword.value);
  }else{
    store.commit('setSearchedMeals', []);
  }
}

onMounted(() => {
  keyword.value = router.params.name;
  if (keyword.value) {
    searchMeal();
  }
});
</script>
