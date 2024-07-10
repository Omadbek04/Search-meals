<template>
  <header class="bg-white shadow  flex flex-col md:flex-row md:items-center justify-between px-5 py-[15px] gap-2">
    <router-link :to="{ name: 'home' }" class="flex items-center gap-1">
      <img src="../../public/title.svg" alt="Logo" class=" w-14 h-12 md:w-16 md:h-14 object-contain" />
      <p class=" text-[16px] md:text-xl font-semibold text-LogoColor">Search <span class="text-LogoColor2"> meals </span></p>
    </router-link>
    <div class="flex items-center gap-5 md:gap-7 flex-wrap">
      <router-link :to="{ name: 'byName' }" class="flex items-center text-[14px] md:text-[16px] text-black px-2  font-semibold  border-b-2 border-white h-full hover:border-gray-500 rounded-r-3xl hover:text-gray-600 transition-all duration-200"> Search Meals </router-link>
      <router-link :to="{ name: 'byLetter' }" class="flex items-center text-[14px] md:text-[16px] text-black px-2 font-semibold border-b-2 border-white h-full hover:border-gray-500 rounded-r-3xl hover:text-gray-600 transition-all duration-200"> Meals by Letter </router-link>
      <router-link :to="{ name: 'ingredient' }" class="flex items-center text-[14px] md:text-[16px] text-black px-2 font-semibold border-b-2 border-white h-full hover:border-gray-500 rounded-r-3xl hover:text-gray-600 transition-all duration-200"> Meals by Ingredients </router-link>
    </div>
  </header>
</template>

<script setup></script>
