import { createApp } from "vue";
import App from "./App.vue";

import { FaFlag } from "oh-vue-icons/icons/fa";
import { RiZhihuFill } from "oh-vue-icons/icons/ri";
import { addIcons, OhVueIcon } from "oh-vue-icons";
import { BiLightbulbFill, BiMusicPlayer, CoPython } from "oh-vue-icons/icons";
import { router } from "./routes";
import { i18n } from "./i18n";

addIcons(FaFlag, RiZhihuFill, BiLightbulbFill, BiMusicPlayer, CoPython);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.use(router);
app.use(i18n)
app.mount("#app");