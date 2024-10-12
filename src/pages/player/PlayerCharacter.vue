<script setup lang="ts">
import { PlayerCharacter } from '@vagabondvault/player-character';
import { usePlayerCharacter } from '../../clients/playerCharacter';
import { ref } from 'vue';
import FactionRelationships from './FactionRelationships.vue';
import CharacterStat from './CharacterStat.vue';
import CharacterHarm from './CharacterHarm.vue';
import TabSelectMenu from './TabSelectMenu.vue';
import PlayerActions from './PlayerActions.vue';
import { faPersonRunning, faFeather, faBriefcase, faMedal, faLeaf } from '@fortawesome/free-solid-svg-icons';
import type { InformationCategory } from './types';

const playerCharacterClient = usePlayerCharacter();
const playerCharacter = ref<PlayerCharacter | null>(null);

const getPlayerCharacter = async (id: number) => {
    playerCharacter.value = await playerCharacterClient.get(id);
};

getPlayerCharacter(1);

const categories: InformationCategory[] = [
    { name: 'Moves, Skills & Feats', code: 'moves', icon: faPersonRunning },
    { name: 'Drives & Nature', code: 'drives', icon: faLeaf },
    { name: 'Reputation & Relationships', code: 'reputation', icon: faMedal },
    { name: 'Equipment', code: 'equipment', icon: faBriefcase },
    { name: 'Background, Connections & Details', code: 'background', icon: faFeather },
];

const activeCategory = ref<InformationCategory>(categories[0]);

const onSelectCategory = (category: InformationCategory) => {
  console.log('Selected category:', category);
  activeCategory.value = category;
};
</script>

<template>
  <div class="container mx-auto">
    <div class="flex flex-col h-[100vh]" v-if="playerCharacter">
      <div class="playbook flex v-[100vw]">
        <div class="header grow grid gap-2 p-4">
          <div class="image">
            <img src="https://via.placeholder.com/150" alt="Character Image" class="rounded-full"/>
          </div>
          <div class="player-name">
            <h3>{{ playerCharacter.name }}</h3>
          </div>
          <div class="playbook-name">
            <p>{{ playerCharacter.playbook?.name }}</p>
          </div>
        </div>
        <div class="harm p-4">
          <CharacterHarm />
          <CharacterHarm />
          <CharacterHarm />
        </div>
      </div>
      <div class="stats p-3">
        <div class="grid grid-cols-5 md:grid-cols-1 pt-6 bg-blue-100 border-blue-300 border-4 rounded-xl">
          <CharacterStat stat="Charm" :value="playerCharacter.stats?.charm" />
          <CharacterStat stat="Cunning" :value="playerCharacter.stats?.cunning" />
          <CharacterStat stat="Finesse" :value="playerCharacter.stats?.finesse" />
          <CharacterStat stat="Luck" :value="playerCharacter.stats?.luck" />
          <CharacterStat stat="Might" :value="playerCharacter.stats?.might" />
        </div>
      </div>
      <div class="body grow overflow-y-auto p-4">
        <TransitionGroup name="fade" mode="out-in">
          <div v-if="activeCategory?.code === 'moves'">
            <PlayerActions :playerCharacter="playerCharacter" />
          </div>
          <div v-else-if="activeCategory?.code === 'drives'">
            <div class="natures">
              <h2>Your Nature</h2>
              <ul>
                <li v-for="nature in playerCharacter.natures" :key="nature.id">
                  <h3>{{ nature.name }}</h3>
                  <p>{{ nature.description }}</p>
                </li>
              </ul>
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
          </div>
          <div v-else-if="activeCategory?.code === 'reputation'">
            <div class="reputation">
              <h2>Your Reputation</h2>
              <FactionRelationships :relationships="playerCharacter.relationships" />
            </div>
          </div>
          <div v-else-if="activeCategory?.code === 'equipment'">
            <div class="equipment">
              <h2>Your Equipment</h2>
              <p>...TBD</p>
            </div>
          </div>
          <div v-else-if="activeCategory?.code === 'background'">
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
            <div class="background">
              <h2>Your Background</h2>
              <p>...TBD</p>
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
          </div>
        </TransitionGroup>
      </div>
    </div>
  </div>

  <TabSelectMenu
    :categories="categories"
    @select="onSelectCategory"
  />
</template>

<style scoped lang="scss">
@media (max-width: 768px) {
  .header {
    display: grid;
    grid-template-areas:
      "image player-name"
      "image playbook-name";
    grid-template-columns: 30% 70%;

    .image {
      grid-area: image;
    }

    .player-name {
      grid-area: player-name;
    }

    .playbook-name {
      grid-area: playbook-name;
    }
  }
}
</style>