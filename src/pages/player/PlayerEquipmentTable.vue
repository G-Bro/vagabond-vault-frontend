<script setup lang="ts">
import { PlayerCharacter } from '@vagabondvault/api';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSquare } from '@fortawesome/free-regular-svg-icons';

defineProps<{
  playerCharacter: PlayerCharacter;
}>();
</script>

<template>
  <h4 class="w-full border-b pb-2">Your Equipment</h4>
  <div v-for="equipment in playerCharacter.equipment" class="detail-block grid border-b py-2">
    <div class="detail-block-icon">
      <!-- <FontAwesomeIcon
        v-if="drive.isAdvanced"
        icon="faStar"
        class="text-yellow-500"
      /> -->
      <p>V</p>
    </div>
    <div class="detail-block-name">
      <div class="flex">
        <p class="font-bold grow">{{ equipment.name }}</p>
        <div>
          <FontAwesomeIcon v-for="i in equipment.wearSlots" :key="i" :icon="faSquare" />
        </div>
      </div>
    </div>
    <div class="detail-block-details">
      <p class="text-sm italic">{{ equipment.range?.map((r) => r.name).join(', ') }}</p>
      <p>
        <template v-for="tag in equipment.tags">
          <FontAwesomeIcon
            :icon="tag.isPositive ? faPlusCircle : faMinusCircle"
            :class="tag.isPositive ? 'text-green-700' : 'text-red-800'"
            class="text-xs"
          /> {{ tag.name }}
        </template>
    </p>
    </div>
  </div>
</template>