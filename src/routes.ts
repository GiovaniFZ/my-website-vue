import { createWebHistory, createRouter } from 'vue-router'
import { i18n } from './i18n'

const routes = [
  { path: '/', component: () => import('./views/AboutMe.vue'), meta: { titleKey: 'home' } },
  { path: '/skills', component: () => import('./views/MySkills.vue'), meta: { titleKey: 'skills' } },
  { path: '/lastFM', component: () => import('./views/LastFM.vue'), meta: { titleKey: 'lastFM' } },
  { path: '/contact', component: () => import('./views/Contact.vue'), meta: { titleKey: 'contact' } },
  { path: '/about', component: () => import('./views/AboutWebsite.vue'), meta: { titleKey: 'aboutThisWebsite' } },
  { path: '/my-projects', component: () => import('./views/MyProjects.vue'), meta: { titleKey: 'my-projects' } },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.afterEach((to) => {
  const key = (to.meta as any)?.titleKey as string | undefined;
  const t = i18n.global.t as (k: string) => string;
  if (key) {
    const page = t(key);
    document.title = `${page} | Giv's Website`;
  } else {
    document.title = "Giv's Website";
  }
});