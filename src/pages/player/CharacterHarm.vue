<script setup lang="ts">
import {faSquare, faSquareCheck} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
</script>

<template>
  <div class="flex">
    <div class="mr-2">
      <p>Injury</p>
    </div>
    <div>
      <FontAwesomeIcon :icon="faSquareCheck" />
    </div>
    <div>
      <FontAwesomeIcon :icon="faSquareCheck" />
    </div>
    <div>
      <FontAwesomeIcon :icon="faSquare" />
    </div>
    <div>
      <FontAwesomeIcon :icon="faSquare" />
    </div>
    <div>
      <FontAwesomeIcon :icon="faSquare" />
    </div>
    <div>
      <FontAwesomeIcon :icon="faSquare" />
    </div>
  </div>
</template>