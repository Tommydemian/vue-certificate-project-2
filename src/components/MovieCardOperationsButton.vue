<script setup lang="ts">
import { RouterLink } from "vue-router";
type Props = {
  operationType?: "delete-movie" | "edit-movie";
  linkto?: boolean;
  id?: number;
};

const props = defineProps<Props>();
const emit = defineEmits<{ (e: Props["operationType"]): void }>();
</script>

<template>
  <RouterLink
    v-if="linkto"
    :to="{
      name: 'MoviePage',
      params: { id: id },
    }"
  >
    <div
      class="rounded-full bg-slate-200 p-2 cursor-pointer border border-slate-500 transition-colors hover:bg-slate-100"
    >
      <slot />
    </div>
  </RouterLink>

  <div
    v-else
    class="rounded-full bg-slate-200 p-2 cursor-pointer border border-slate-500 transition-colors hover:bg-slate-100"
    @click="emit(props['operationType'])"
  >
    <slot />
  </div>
</template>
