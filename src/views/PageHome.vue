<script lang="ts" setup>
import { page } from "../store/game";
</script>

<template>
  <h1>Welcome to my game</h1>
  <button @click="page = 'pre-start'">Start Game</button>
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
