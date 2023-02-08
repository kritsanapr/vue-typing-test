<script lang="ts" setup>
import { score, page } from "../store/game";
import EditConfig from "./EditConfig.vue";

function restartGame() {
  score.value = 0;
  page.value = "home";
}
</script>

<template>
  <EditConfig />
  <button @click="restartGame">
    <slot>Start Game</slot>
  </button>
</template>

<style scoped>
button {
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
}
</style>
