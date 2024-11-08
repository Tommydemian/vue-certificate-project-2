<script setup lang="ts">
import { onMounted, ref } from "vue";
import StarIcon from "./icons/StarIcon.vue";

const props = defineProps<{ rating: number }>();

const emit = defineEmits<{
  (e: "update-rating", rating: number): void;
}>();

const stars = ref(
  Array(5)
    .fill(null)
    .map(() => ({
      isActive: false,
    })),
);

function handleRating(index?: number) {
  stars.value.map((el, i) => {
    const condition = index ? i <= index : i < props.rating;
    if (condition) {
      el.isActive = true;
    } else {
      el.isActive = false;
    }
  });
}

onMounted(handleRating());

function handleUpdate(index: number) {
  handleRating(index);
  emit("update-rating", index + 1);
}
</script>

<template>
  <div class="flex items-center">
    <p class="mr-2 font-semibold">Rating: {{ `${rating}/5` }}</p>
    <button
      :key="index"
      v-for="(el, index) in stars"
      @click="handleUpdate(index)"
    >
      <StarIcon class="star-icon" :fill="el.isActive ? 'orange' : 'gray'" />
    </button>
  </div>
</template>
