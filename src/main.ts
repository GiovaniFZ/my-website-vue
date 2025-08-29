import { createApp } from "vue";
import App from "./App.vue";

import "./lib/icons";
import { OhVueIcon } from "oh-vue-icons";
import { router } from "./routes";
import { i18n } from "./i18n";


const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.use(router);
app.use(i18n);
app.mount("#app");