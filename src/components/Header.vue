<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useI18n } from 'vue-i18n';
import Sidebar from './Sidebar.vue';
import { ref } from 'vue';

const { locale, availableLocales } = useI18n();
const isOpen = ref(false);
function handleClick() {
  isOpen.value = true;
}
</script>

<template>
  <Sidebar :is-open="isOpen" @close="isOpen = false" />
  <header>
    <button class="menu-icon" @click="handleClick" aria-label="Open menu">≡</button>
    <RouterLink class="first-anchor" to="/">Giv's Website</RouterLink>
    <nav>
      <RouterLink style="text-decoration: none;" to="/">{{ $t('home') }}</RouterLink>
      <RouterLink style="text-decoration: none;" to="/skills">{{ $t('skills') }}</RouterLink>
      <RouterLink style="text-decoration: none;" to="/lastFM">{{ $t('lastFM') }}</RouterLink>
      <RouterLink style="text-decoration: none;" to="/contact">{{ $t('socialNetworks') }}</RouterLink>
      <RouterLink style="text-decoration: none;" to="/my-projects">{{ $t('my-projects') }}</RouterLink>
      <RouterLink style="text-decoration: none;" to="/about">{{ $t('about') }}</RouterLink>
    </nav>
    <select v-model="locale">
      <option v-for="loc in availableLocales" :key="`locale-${loc}`" :value="loc">{{ loc }}</option>
    </select>
  </header>
</template>

<style scoped>
header {
  background-color: #123435;
  padding: 0.75rem calc(1rem + env(safe-area-inset-right));
  padding-left: calc(1rem + env(safe-area-inset-left));
  top: 0;
  left: 0;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  box-sizing: border-box;
  z-index: 900;
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);

  @media (max-width: 870px) {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 0.5rem;
    padding: 0.6rem calc(0.75rem + env(safe-area-inset-right));
    padding-left: calc(0.75rem + env(safe-area-inset-left));
  }

  a {
    text-decoration: none;
    background-color: #6AD9CA;
    border-radius: 6px;
    color: #000;
    padding: 0.25rem 0.5rem;
    line-height: 1.2;
  }

  .menu-icon {
    all: unset;
    display: none;
    color: #fff;
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 8px;
    background: #166063;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    cursor: pointer;
    transition: background 0.2s ease;

    @media(max-width: 870px) {
      display: inline-flex;
    }
  }

  .menu-icon:hover {
    background: #1a6b64;
  }

  .first-anchor {
    background: none;
    color: #fff;
    font-size: 1.125rem;
    padding: 0 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media(max-width: 870px) {
      margin: 0 auto;
      text-align: center;
      max-width: 65vw;
    }
  }

  a:hover {
    background-color: #55bfb1;
    cursor: pointer;
  }

  nav {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    @media (max-width: 870px) {
      display: none;
    }
  }

  select {
    border: none;
    border-radius: 8px;
    cursor: pointer;
    padding: 0.45rem 0.6rem;
    background-color: #6AD9CA;
    color: #000;
    font-weight: 600;
    min-width: 3.2rem;
    letter-spacing: 0.02em;
  }

  select:hover {
    background-color: #55bfb1;
  }

  select option {
    background-color: #fff;
    color: #000;
  }
}
</style>