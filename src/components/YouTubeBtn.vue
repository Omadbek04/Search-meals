<template>
  <a :href="href" target="_blank " class="text-[18px] text-indigo-600 hover:text-indigo-500 font-medium">

    <slot></slot>
  </a>
</template>
<script setup>
const props = defineProps({
  href: String,
});
</script>
