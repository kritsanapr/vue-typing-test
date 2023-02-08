<script setup lang="ts">
import { onMounted } from "vue";
import { ref } from "vue";
import { page } from "../store/game";

const countDown = ref(3);
let interval: number;

onMounted(() => {
  setInterval(() => {
    countDown.value--;
    if (countDown.value <= 0) {
      clearInterval(interval);
      page.value = "game";
    }
  }, 1000);
});
</script>

<template>
  <h1>game start in {{ countDown }}</h1>
  <button @click="page = 'home'">back to home</button>
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
