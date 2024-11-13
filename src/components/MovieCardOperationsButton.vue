<script setup lang="ts">
type Props = {
  operationType: "delete-movie" | "edit-movie";
};

const props = defineProps<Props>();
const emit = defineEmits<{ (e: Props["operationType"]): void }>();
</script>

<template>
  <div
    class="rounded-full bg-slate-200 p-2 cursor-pointer border border-slate-500 transition-colors hover:bg-slate-100"
    @click="emit(props['operationType'])"
  >
    <slot />
  </div>
</template>
