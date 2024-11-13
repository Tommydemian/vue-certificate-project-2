import { ref } from "vue";

export function useToggle(initialValue: boolean) {
  const state = ref(initialValue);

  function toggle() {
    state.value = !state.value;
  }

  return { state, toggle };
}
