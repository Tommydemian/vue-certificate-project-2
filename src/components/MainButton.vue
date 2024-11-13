<script setup lang="ts">
withDefaults(defineProps<{ onButtonClick: () => void; buttonText: string }>(), {
  buttonText: "Add Movie",
});
</script>

<template>
  <button
    class="bg-purple-300 rounded-lg px-8 py-4 text-gray-800 font-semibold cursor-pointer hover:bg-purple-200 transition-colors active:bg-purple-400"
    @click="onButtonClick"
  >
    {{ buttonText }}
  </button>
</template>
