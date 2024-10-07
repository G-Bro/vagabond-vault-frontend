<script setup lang="ts">
import { PlayerCharacter } from '@vagabondvault/player-character';
import { usePlayerCharacter } from '../../clients/playerCharacter';
import { ref } from 'vue';

const playerCharacterClient = usePlayerCharacter();
const playerCharacter = ref<PlayerCharacter | null>(null);

const getPlayerCharacter = async (id) => {
    playerCharacter.value = await playerCharacterClient.get(id);
};

getPlayerCharacter(1);
</script>

<template>
  <div class="container mx-auto">
    <div class="playbook p-3 gap-2" v-if="playerCharacter">
      <div class="header grid grid-cols-2">
        <div>
          <h1>{{ playerCharacter.playbook?.name }}</h1>
        </div>
        <div>
          <p>{{ playerCharacter.playbook?.description }}</p>
        </div>
      </div>
      <div class="details">
        <div class="name">
          <p>Name:</p>
          <p>{{ playerCharacter.name }}</p>
        </div>
        <div class="species">
          <p>Species:</p>
          <p>...TBD</p>
        </div>
        <div class="details">
          <p>Details:</p>
          <p>...TBD</p>
        </div>
        <div class="demeanor">
          <p>Demeanor:</p>
          <p>...TBD</p>
        </div>
      </div>
      <div class="image">
        <p>Image goes here</p>
      </div>
      <div class="natures">
        <h2>Your Nature</h2>
        <ul>
          <li v-for="nature in playerCharacter.natures" :key="nature.id">
            <h3>{{ nature.name }}</h3>
            <p>{{ nature.description }}</p>
          </li>
        </ul>
      </div>
      <div class="background">
        <h2>Your Background</h2>
        <p>...TBD</p>
      </div>
      <div class="drives">
        <h2>Your Drives</h2>
        <ul>
          <li v-for="drive in playerCharacter.drives" :key="drive.id">
            <h3>{{ drive.name }}</h3>
            <p>{{ drive.description }}</p>
          </li>
        </ul>
      </div>
      <div class="connections">
        <h2>Your Connections</h2>
        <ul>
          <!-- <li v-for="connection in playerCharacter.connections" :key="connection.id">
            {{ connection.name }}
          </li> -->
          <li>...TBD</li>
        </ul>
      </div>
      <div class="reputation">
        <h3>Your Reputation</h3>
        <div v-for="relationship in playerCharacter.relationships" :key="relationship.id">
          <div class="flex">
            <div><p>{{ relationship.faction?.name }}</p></div>
            <div><input type="checkbox" v-for="i in 9" :key="i" :checked="i > 9 -( relationship.notoriety ?? 0) "/></div>
            <div><p>{{ relationship.bonus }}</p></div>
            <div><input type="checkbox" v-for="i in 15" :key="i" :checked="i <= (relationship.prestige ?? 0) "/></div>
          </div>
        </div>
      </div>
      <div class="stats">
        <div>
          <h2>Charm: {{ playerCharacter.stats?.charm }}</h2>
          <h2>Cunning: {{ playerCharacter.stats?.cunning }}</h2>
          <h2>Finesse: {{ playerCharacter.stats?.finesse }}</h2>
          <h2>Luck: {{ playerCharacter.stats?.luck }}</h2>
          <h2>Might: {{ playerCharacter.stats?.might }}</h2>
        </div>
      </div>
      <div class="moves">
        <h2>Your Moves</h2>
        <ul>
          <li v-for="move in playerCharacter.moves" :key="move.id">
            <h3>{{ move.name }}</h3>
            <p>{{ move.description }}</p>
          </li>
        </ul>
      </div>
      <div class="harm">
        <p>...TBD</p>
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
      <div class="equipment">
        <h2>Equipment</h2>
        <p>...TBD</p>
      </div>  
    </div>
    
  </div>
</template>

<style scoped lang="scss">
.playbook {
  display: grid;
  grid-template-columns: 33%;
  grid-template-rows: auto;
  grid-template-areas:
    "header header header"
    "details image natures"
    "background drives connections"
    "reputation reputation reputation"
    "stats moves moves"
    "harm moves moves"
    "roguish_feats moves moves"
    "weapon_skills moves moves"
    "equipment equipment equipment";
  .header {
    grid-area: header;
  }
  .details {
    grid-area: details;
  }
  .image {
    grid-area: image;
  }
  .natures {
    grid-area: natures;
  }
  .background {
    grid-area: background;
  }
  .drives {
    grid-area: drives;
  }
  .connections {
    grid-area: connections;
  }
  .reputation {
    grid-area: reputation;
  }
  .stats {
    grid-area: stats;
  }
  .moves {
    grid-area: moves;
  }
  .harm {
    grid-area: harm;
  }
  .roguish_feats {
    grid-area: roguish_feats;
  }
  .weapon_skills {
    grid-area: weapon_skills;
  }
  .equipment {
    grid-area: equipment;
  }
}
</style>