<script setup lang="ts">
import { RouterView, RouterLink } from "vue-router";
import MainContainer from "./components/MainContainer.vue";
</script>

<!-- App.vue with layout -->
<template>
  <div class="app">
    <header>
      <MainContainer>
        <nav class="flex text-white">
          <RouterLink to="/"></RouterLink>

          <!-- Other nav links -->
        </nav>
      </MainContainer>
    </header>

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.path" />
      </transition>
    </router-view>
    <!-- Navigation or header if needed -->
    <!-- Footer if needed -->
  </div>
</template>
