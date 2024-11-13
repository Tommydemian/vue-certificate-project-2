<!-- MainModal.vue -->
<script setup lang="ts">
defineProps<{ isOpen: boolean }>();
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <article
        v-if="isOpen"
        class="grid fixed-center bg-gray-900 rounded-md p-4 text-gray-50 w-[60%] h-fit border border-gray-300"
        ref="modal"
      >
        <slot></slot>
      </article>
    </Transition>
  </Teleport>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
