<script setup lang="ts">
import type { InformationCategory } from './types';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import VButton from '@cmp/VButton.vue';
import { ref } from 'vue';

const emit = defineEmits(['close', 'select']);

defineProps<{
  categories: InformationCategory[],
}>();

const showTabSelectDialog = ref(false);

const onChooseCategory = (category: InformationCategory) => {
  showTabSelectDialog.value = false;
  emit('select', category);
};

</script>

<template>
  <Transition name="fade">
    <div v-if="showTabSelectDialog" class="fixed top-0 right-0 left-0 bottom-0 bg-black opacity-50 z-10" @click="showTabSelectDialog = false"></div>
  </Transition>
  <Transition name="fade">
    <div v-if="showTabSelectDialog" class="fixed bottom-20 left-4 right-4 z-20">
      <VButton v-for="category in categories" @click.prevent="onChooseCategory(category)" class="text-xl w-full mt-4 py-3">
        <FontAwesomeIcon :icon="category.icon" class="mr-2 fa-fw" />{{ category.name }}
      </VButton>
    </div>
  </Transition>

  <div class="fixed bottom-4 right-4 flex z-20 text-2xl">
    <VButton @click.prevent="showTabSelectDialog = !showTabSelectDialog" class="rounded-full w-18 h-18">
      <FontAwesomeIcon :icon="faBars" />
    </VButton>
  </div>
</template>