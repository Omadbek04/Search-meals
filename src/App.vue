<template>
  <div class="bg-gray-100 h-full">
    <header class="bg-white shadow h-16 flex justify-between px-5">
      <router-link :to="{ name: 'home' }" class="flex items-center"> Home </router-link>
      <div class="flex items-center gap-7">
        <router-link :to="{ name: 'byName' }" class="flex items-center px-2 h-full hover:bg-purple-100 transition-colors"> Search Meals </router-link>
        <router-link :to="{ name: 'byLetter' }" class="flex items-center px-2 h-full hover:bg-purple-100 transition-colors"> Meals by Letter </router-link>
        <router-link :to="{ name: 'byIngredient' }" class="flex items-center px-2 h-full hover:bg-purple-100 transition-colors"> Meals by Ingredients </router-link>
      </div>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
