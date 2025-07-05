import { createApp } from "vue";
import App from "./App.vue";

import { FaFlag } from "oh-vue-icons/icons/fa";
import { RiZhihuFill } from "oh-vue-icons/icons/ri";
import { addIcons, OhVueIcon } from "oh-vue-icons";
import { BiLightbulbFill, BiMusicPlayer } from "oh-vue-icons/icons";

addIcons(FaFlag, RiZhihuFill, BiLightbulbFill, BiMusicPlayer);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.mount("#app");