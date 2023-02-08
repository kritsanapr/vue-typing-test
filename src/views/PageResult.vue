<script lang="ts" setup>
import ButtonStartGame from "../components/ButtonStartGame.vue";
import { score, page } from "../store/game";
function restartGame() {
  score.value = 0;
  page.value = "home";
}
</script>

<template>
  <h1>Your score : {{ score }}</h1>
  <ButtonStartGame @click="restartGame">Restart game</ButtonStartGame>
</template>

<style></style>
