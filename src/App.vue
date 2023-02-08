<script lang="ts" setup>
import PageHome from "./views/PageHome.vue";
import PagePreStart from "./views/PagePreStart.vue";
import PageGame from "./views/PageGame.vue";
import PageResult from "./views/PageResult.vue";
import { page } from "./store/game";
</script>

<template>
  <PageHome v-if="page === 'home'"></PageHome>
  <PagePreStart v-if="page === 'pre-start'"></PagePreStart>
  <PageGame v-if="page === 'game'"></PageGame>
  <PageResult v-if="page === 'result'"></PageResult>
</template>

<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}

.container {
  padding: 1rem;
}

button {
  padding: 0.5rem;
  font-size: 1.1rem;
}

.center {
  text-align: center;
}
</style>
