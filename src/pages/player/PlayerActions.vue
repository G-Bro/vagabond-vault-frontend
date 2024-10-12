<script setup lang="ts">
import { PlayerCharacter } from '@vagabondvault/player-character';

defineProps<{
  playerCharacter: PlayerCharacter;
}>();
</script>

<template>
  <div class="moves">
    <h2>Your Moves</h2>
    <ul>
      <li v-for="move in playerCharacter.moves" :key="move.id">
        <h3>{{ move.name }}</h3>
        <p>{{ move.description }}</p>
      </li>
    </ul>
  </div>
  <div class="roguish_feats">
    <h2>Roguish Feats</h2>
    <ul>
      <li v-for="roguishFeat in playerCharacter.roguishFeats" :key="roguishFeat.id">
        {{ roguishFeat.name }}
      </li>
    </ul>
  </div>
  <div class="weapon_skills">
    <h2>Your Weapon Skills</h2>
    <ul>
      <li v-for="weaponSkill in playerCharacter.skills" :key="weaponSkill.id">
        {{ weaponSkill.name }}
      </li>
    </ul>
  </div>
</template>