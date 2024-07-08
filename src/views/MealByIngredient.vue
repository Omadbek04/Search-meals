<template>


</template>
<script setup>
import { computed , onMounted} from "vue";
import store from "../store";


const meals = computed(()=> store.state.searchedByIngradients)

onMounted(() => {
    // store.dispatch('searchMealsByIngradients',)
})

</script>
