import { createApp } from "vue";
import App from "./App.vue";

import { addIcons, OhVueIcon } from "oh-vue-icons";
import { BiLightbulbFill, CoJava, CoPython, SiMongodb, CoAndroid, CoVueJs, CoReact, CoWindows, CoAppleMusic, IoPerson, BiTelegram, BiGithub } from "oh-vue-icons/icons";
import { router } from "./routes";
import { i18n } from "./i18n";

addIcons(BiLightbulbFill, CoPython, CoJava, SiMongodb, CoAndroid, CoVueJs, CoReact, CoWindows, CoAppleMusic, IoPerson, BiTelegram, BiGithub);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.use(router);
app.use(i18n)
app.mount("#app");