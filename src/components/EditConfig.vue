<script lang="ts" setup>
import { config } from "../store/game";
</script>

<template>
  <div>
    <div>{{ config.wordPerMS }}</div>
    <input
      v-model="config.wordPerMS"
      type="range"
      min="100"
      max="5000"
      step="100"
    />
  </div>
</template>
