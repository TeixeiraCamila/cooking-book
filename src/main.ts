import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// TypeScript may not have declarations for importing CSS files in this project setup
// @ts-ignore: Allow side-effect import of CSS
import "./style.css";

createApp(App).use(router).mount("#app");
