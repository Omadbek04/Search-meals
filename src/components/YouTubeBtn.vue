<template>
  <a :href="href" target="_blank " class="">
    <img :src="YoutubeBtnIcon " alt=" youtube icon"  width="50" height="40" class=" object-contain " />
    <!-- <slot></slot> -->
  </a>
</template>
<script setup>
import YoutubeBtnIcon from "../assets/youtube.svg";
const props = defineProps({
  href: String,
});
</script>
