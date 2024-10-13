<script setup lang="ts">
defineProps<{
  stat: string;
  value: number;
}>();
</script>

<template>
  <div class="flex mb-2 flex-col md:flex-row text-center">
    <div class="border border-[3px] border-amber-200 aspect-square w-14 relative mx-auto">
      <div class="absolute top-0.5 left-0.5 right-0.5 bottom-0.5 border-yellow-700 border-[3px]"></div>
      <div class="rounded-full border-2 bg-white w-full h-full text-center vertical-align-center relative z-1 border-black">
        <p class="text-2xl mt-1.5">{{ value > 0 ? '+' : value < 0 ? '-' : ''}}{{ value }}</p>
      </div>
    </div>
    <div class="grow text-center"><p class="text md:pl-2 pt-3 font-bold">{{ stat }}</p></div>
  </div>
</template>