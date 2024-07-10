<template>
  <header class="bg-white shadow h-16 flex justify-between px-5">
    <router-link :to="{ name: 'home' }" class="flex items-center">
      <img src="../../public/title.svg" alt="Logo" class="w-16 h-14 object-contain" />
      <p class="text-xl font-semibold text-LogoColor">Search <span class="text-LogoColor2"> meals </span></p>
    </router-link>
    <div class="flex items-center gap-7">
      <router-link :to="{ name: 'byName' }" class="flex items-center px-2 h-full hover:bg-purple-100 transition-colors"> Search Meals </router-link>
      <router-link :to="{ name: 'byLetter' }" class="flex items-center px-2 h-full hover:bg-purple-100 transition-colors"> Meals by Letter </router-link>
      <router-link :to="{ name: 'ingredient' }" class="flex items-center px-2 h-full hover:bg-purple-100 transition-colors"> Meals by Ingredients </router-link>
    </div>
  </header>
</template>

<script setup></script>
