import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "../style.css";

const app = createApp(App);
const pinia = createPinia();

// Explicitly enable devtools
app.config.performance = true;
app.config.devtools = true;

app.use(pinia);
app.mount("#app");
