<script lang="ts" setup>
import { callWithErrorHandling, ref, watch } from "vue";
import { faker } from "@faker-js/faker";
import { sample } from "lodash";
import { config, page, score } from "../store/game";
import ButtonStartGame from "../components/ButtonStartGame.vue";

interface WordItem {
  word: string;
  progress: number;
}

const words = ref<WordItem[]>([]);
const wordInput = ref("");
let interval: number;

setInterval(() => {
  const select = sample([
    "adjective",
    "verb",
    "conjunction",
    "interjection",
    "preposition",
    "noun",
  ]) as
    | "adjective"
    | "verb"
    | "conjunction"
    | "interjection"
    | "preposition"
    | "noun";

  const word = faker.word[select]();
  // console.log(word);
  const currentIndex = words.value.length;
  words.value.push({
    word,
    progress: 0,
  });

  setInterval(() => {
    // words.value[currentIndex].progress += 1;
    const currentWord = words.value[currentIndex];
    if (currentWord) {
      currentWord.progress += 1;
    } else {
      clearInterval(interval);
    }
  }, config.progressPerMS);
}, config.wordPerMS);

function onTyped() {
  const correctWordCount = words.value.filter(
    (item) => item.word == wordInput.value
  ).length;

  score.value += correctWordCount <= 0 ? -1 : correctWordCount;

  words.value = words.value.filter((item) => item.word != wordInput.value);
  // console.log(wordInput.value);
  wordInput.value = "";
  words;
}

watch(
  words,
  (newVal) => {
    const shouldGameOver = newVal.some((item) => item.progress >= 100);
    if (shouldGameOver) {
      page.value = "result";
    }
  },
  { deep: true }
);
</script>

<template>
  <button @click="page = 'home'">Reset Game</button>
  <form @submit.prevent="onTyped">
    <h1>Score {{ score }}</h1>
    <div class="game-box">
      <input class="input-word" v-model="wordInput" type="text" />
      <button style="display: none"></button>
      <pre>{{ words }}</pre>
    </div>
  </form>
</template>

<style scoped>
.game-box {
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  flex-direction: column;
  margin: 2rem;
}
.input-word {
  font-size: 1.5rem;
  padding: 0.5rem;
}
</style>
