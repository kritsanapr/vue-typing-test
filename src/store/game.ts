import { reactive, ref } from "vue";

export type Page = "home" | "pre-start" | "game" | "result";

export const page = ref<Page>("home");

export const score = ref(0);

export const config = reactive({
  wordPerMS: 3000,
  progressPerMS: 300,
});
