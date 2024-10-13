<script setup lang="ts">
import {faSquare, faSquareCheck} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import { Relationship } from '@vagabondvault/api';

defineProps<{
  relationships: Relationship[];
}>();

const notorietyLevels = 3;
const prestigeLevels = 3;

const blocksPerNotorietyLevel = 3;
const blocksPerPrestigeLevel = 5;
</script>

<template>
  <div class="flex" v-for="(relationship, key) in relationships" :key="key">
    <div class="grow"><p>{{ relationship.faction?.name }}</p></div>
    <div>
      <div v-for="i in notorietyLevels" :key="i" :class="{'text-red-800': i < 3}" class="inline-block">
        <p class="text-lg inline mx-1">{{ i -4 }}</p>
        <FontAwesomeIcon
          v-for="j in blocksPerNotorietyLevel"
          :key="j"
          :icon="((notorietyLevels - i) * blocksPerNotorietyLevel) + (blocksPerNotorietyLevel - j) < (relationship.notoriety ?? 0) ? faSquareCheck : faSquare"
          class="text-xl mx-0.5"
        />
      </div>
      
      <div class="flex gap-3" v-if="key === relationships.length - 1">
        <hr class="grow mt-4 border-0 border-t-2 border-red-800" />
        <h5 class="text-red-800">Notoriety</h5>
        <hr class="grow mt-4 border-0 border-t-2 border-red-800" />
      </div>
    </div>
    <div><p class="text-lg mx-2">0</p></div>
    <div>
      <div v-for="i in prestigeLevels" :key="i" :class="{'text-green-600': i > 1}" class="inline-block">
        <FontAwesomeIcon
          v-for="j in blocksPerPrestigeLevel"
          :key="j"
          :icon="((i - 1) * blocksPerPrestigeLevel) + j <= (relationship.prestige ?? 0) ? faSquareCheck : faSquare"
          class="text-xl mx-0.5"
        />
        <p class="text-lg inline mx-1">{{ i }}</p>
      </div>
      
      <div class="flex gap-3" v-if="key === relationships.length - 1">
        <hr class="grow mt-4 border-0 border-t-2 border-green-600" />
        <h5 class="text-green-600">Prestige</h5>
        <hr class="grow mt-4 border-0 border-t-2 border-green-600" />
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