<script setup lang="ts">
import {faSquare, faSquareCheck} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import { Relationship } from '@vagabondvault/api';

defineProps<{
  relationships: Relationship[];
}>();

const blocksPerNotorietyLevel = 3;
const blocksPerPrestigeLevel = 5;

const getPrestigeLevels = (currentBonus: number) => {
  return Math.floor(Math.max(1, currentBonus) * blocksPerPrestigeLevel);
};

const getNotorietyLevels = (currentBonus: number) => {
  return Math.floor((Math.abs(Math.min(0, currentBonus)) + 1) * blocksPerNotorietyLevel);
};
</script>

<template>
  <div class="flex mb-2" v-for="(relationship, key) in relationships" :key="key">
    <div class="grow italic mt-1"><p>{{ relationship.faction?.name }}</p></div>
    <div class="w-16 text-center text-red-800 mt-1">
      <div>
        <p>{{ relationship.notoriety }} / {{ getNotorietyLevels(relationship.bonus ?? 0) }}</p>
      </div>
      <div class="flex text-center text-xs mt-4" v-if="key === relationships.length - 1">
        <p class="text-red-800 w-full font-bold">Notoriety</p>
      </div>
    </div>
    <div class="w-16 text-center"><p class="text-2xl mx-2">{{ relationship.bonus }}</p></div>
    <div class="w-16 text-center text-green-600 mt-1">    
      <div>
        <p>{{ relationship.prestige }} / {{ getPrestigeLevels(relationship.bonus ?? 0) }}</p>
      </div>  
      <div class="flex text-center text-xs mt-4" v-if="key === relationships.length - 1">
        <p class="text-green-600 w-full font-bold">Prestige</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pseudo-checkbox {
  width: 2em;
  height: 2em;

  border: 1px solid black;

  .interior {
    background-color: blue;
  }
}
</style>