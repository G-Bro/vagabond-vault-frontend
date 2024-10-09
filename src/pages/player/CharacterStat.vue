<script setup lang="ts">
defineProps<{
  stat: string;
  value: number;
}>();
</script>

<template>
  <div class="flex mb-2">
    <div class="border border-[3px] border-amber-200 aspect-square w-14 relative">
      <div class="absolute top-0.5 left-0.5 right-0.5 bottom-0.5 border-yellow-700 border-[3px]"></div>
      <div class="rounded-full border-2 bg-white w-full h-full text-center vertical-align-center relative z-1 border-black">
        <p class="text-2xl mt-1.5">{{ value > 0 ? '+' : value < 0 ? '-' : ''}}{{ value }}</p>
      </div>
    </div>
    <div class="grow"><p class="text-xl pl-2 py-3">{{ stat }}</p></div>
  </div>
</template>