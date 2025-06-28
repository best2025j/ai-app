import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router"; // now it picks up index.ts
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init(); // Initialize AOS globally

createApp(App).use(router).mount("#app");
