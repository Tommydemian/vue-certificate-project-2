import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "../style.css";

import { createRouter, createWebHistory } from "vue-router";
import TheHome from "./views/TheHome.vue";
import MoviePage from "./views/MoviePage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "TheHome", component: TheHome },
    {
      path: "/movies/:id",
      name: "MoviePage",
      component: MoviePage,
      props: true,
    },
  ],
});

const app = createApp(App);
const pinia = createPinia();

// Explicitly enable devtools
app.config.performance = true;
app.config.devtools = true;

app.use(pinia);
app.use(router);
app.mount("#app");
