import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component: () => import('./views/AboutMe.vue') },
  { path: '/skills', component: () => import('./views/MySkills.vue') },
  { path: '/music', component: () => import('./views/Music.vue') },
  { path: '/contact', component: () => import('./views/Contact.vue') },
  { path: '/about', component: () => import('./views/AboutWebsite.vue') },
  { path: '/my-projects', component: () => import('./views/MyProjects.vue') },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})