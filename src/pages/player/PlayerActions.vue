<script setup lang="ts">
import VButton from '@cmp/VButton.vue';
import { PlayerCharacter } from '@vagabondvault/api';
import { useRoguishFeats } from '@clients/roguishFeat';
import { ref, computed } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const props = defineProps<{
  playerCharacter: PlayerCharacter;
}>();

type ActionFilter = {
  name: string;
  code: string;
};
const actionFilters: ActionFilter[] = [
  { name: 'All', code: 'all' },
  { name: 'Moves', code: 'moves' },
  { name: 'Roguish Feats', code: 'roguish' },
  { name: 'Weapon Skills', code: 'weapon' },
];

const activeFilter = ref<ActionFilter>(actionFilters[0]);

const roguishFeatsClient = useRoguishFeats();
const roguishFeats = ref<RoguishFeat[]>([]);

const listRoguishFeats = async () => {
  roguishFeats.value = await roguishFeatsClient.list();
};

listRoguishFeats();

const playerRoguishFeats = computed(() => props.playerCharacter.roguishFeats.map((roguishFeat) => roguishFeat.code));
</script>

<template>
  <h3 class="text-center mb-2">Your Actions</h3>
  <div class="text-center mb-3">
    <VButton
      v-for="filter in actionFilters"
      :key="filter.code"
      :onClick="() => activeFilter = filter"
      :active="activeFilter.code === filter.code"
      :class="{
        'bg-gray-200': activeFilter.code !== filter.code,
        '!text-gray-800': activeFilter.code !== filter.code
      }"
      class="text-sm !py-1 !px-2 inline-block mx-1"
    >
      {{ filter.name }}
    </VButton>
  </div>
  <div v-if="['all', 'moves'].includes(activeFilter.code)" class="moves mb-6">
    <h4 class="w-full border-b pb-2">Moves</h4>
    <div v-for="move in playerCharacter.moves" :key="move.id" class="detail-block grid border-b py-2">
      <div class="detail-block-icon">
        <FontAwesomeIcon
          v-if="move.isAdvanced"
          :icon="faStar"
          class="text-blue-700"
        />
      </div>
      <div class="detail-block-name">
        <p class="font-bold">{{ move.name }}</p>
      </div>
      <div class="detail-block-details">
        <p class="text-xs italic">{{ move.description }}</p>
      </div>
    </div>
  </div>
  <div v-if="['all', 'roguish'].includes(activeFilter.code)"  class="roguish_feats mb-6">
    <h4 class="w-full border-b pb-2">Roguish Feats</h4>
    <div v-for="roguishFeat in roguishFeats" :key="roguishFeat.id" class="detail-block grid border-b py-2">
      <div class="detail-block-icon">
        <FontAwesomeIcon
          v-if="playerRoguishFeats.includes(roguishFeat.code)"
          :icon="faStar"
          class="text-blue-700"
        />
      </div>
      <div class="detail-block-name">
        <p class="font-bold">{{ roguishFeat.name }}</p>
      </div>
      <div class="detail-block-details">
        <p class="text-xs italic">{{ roguishFeat.description }}</p>
      </div>
    </div>
  </div>
  <div v-if="['all', 'weapon'].includes(activeFilter.code)"  class="weapon_skills mb-6">
    <h4 class="w-full border-b pb-2">Weapon Skills</h4>
    <div v-for="weaponSkill in playerCharacter.skills" :key="weaponSkill.id" class="detail-block grid border-b py-2">
      <div class="detail-block-icon">
        <FontAwesomeIcon
          v-if="weaponSkill.isAdvanced"
          :icon="faStar"
          class="text-blue-700"
        />
      </div>
      <div class="detail-block-name">
        <p class="font-bold">{{ weaponSkill.name }}</p>
      </div>
      <div class="detail-block-details">
        <p class="text-xs italic">{{ weaponSkill.description }}</p>
      </div>
    </div>
  </div>
</template>