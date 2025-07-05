<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useI18n } from 'vue-i18n';

const { locale, availableLocales } = useI18n();
</script>

<template>
  <header>
    <a class="first-anchor">Giv's website</a>
    <nav>
      <RouterLink style="text-decoration: none;" to="/">{{ $t('about') }}</RouterLink>
      <RouterLink style="text-decoration: none;" to="/skills">{{ $t('skills') }}</RouterLink>
      <a>{{ $t('contact') }}</a>
      <select v-model="locale">
        <option v-for="loc in availableLocales" :key="`locale-${loc}`" :value="loc">{{ loc }}</option>
      </select>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: #166063;
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


  a {
    text-decoration: none;
    background-color: #6AD9CA;
    border-radius: 4px;
    color: #000;
    padding: 0.2rem;
  }

  .first-anchor {
    background: none;
    color: #fff;
    font-size: large;
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

    @media (max-width: 600px) {
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