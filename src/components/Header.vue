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
    <button class="menu-icon" @click="handleClick">≡</button>
    <a class="first-anchor">Giv's website</a>
    <nav>
      <RouterLink style="text-decoration: none;" to="/">{{ $t('about') }}</RouterLink>
      <RouterLink style="text-decoration: none;" to="/skills">{{ $t('skills') }}</RouterLink>
      <RouterLink style="text-decoration: none;" to="/music">{{ $t('music') }}</RouterLink>
      <RouterLink style="text-decoration: none;" to="/contact">{{ $t('contact') }}</RouterLink>
      <RouterLink style="text-decoration: none;" to="/about">{{ $t('aboutThisWebsite') }}</RouterLink>
      <select v-model="locale">
        <option v-for="loc in availableLocales" :key="`locale-${loc}`" :value="loc">{{ loc }}</option>
      </select>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: #123435;
  padding: 1rem;
  top: 0;
  left: 0;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }


  a {
    text-decoration: none;
    background-color: #6AD9CA;
    border-radius: 4px;
    color: #000;
    padding: 0.2rem;
  }

  .menu-icon {
    background: none;
    border: none;
    color: #fff;
    font-size: large;
    display: none;

    @media(max-width: 800px) {
      display: block;
    }
  }

  .first-anchor {
    background: none;
    color: #fff;
    font-size: large;

    @media(max-width: 800px) {
      margin: 0 auto;
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

    @media (max-width: 800px) {
      display: none;
    }
  }

  select {
    border: none;
    border-radius: 4px;
    cursor: pointer;
    padding: 0.4rem;
    background-color: #6AD9CA;
    color: #000;
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