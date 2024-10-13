<script setup lang="ts">
import { PlayerCharacter } from '@vagabondvault/api';

defineProps<{
  playerCharacter: PlayerCharacter;
}>();
</script>

<template>
  <div class="drives">
    <h4 class="w-full border-b pb-2">Drives</h4>
    <div v-for="drive in playerCharacter.drives" :key="drive.id" class="detail-block grid border-b py-2">
      <div class="detail-block-icon">
        <!-- <FontAwesomeIcon
          v-if="drive.isAdvanced"
          icon="faStar"
          class="text-yellow-500"
        /> -->
      </div>
      <div class="detail-block-content">
        <p class="font-bold">{{ drive.name }}</p>
        <p class="text-sm italic">{{ drive.description }}</p>
      </div>
    </div>
  </div>
</template>