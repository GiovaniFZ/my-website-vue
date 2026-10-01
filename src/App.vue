<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import './style.css'
</script>

<template>
  <Header @toggle="toggleTheme" />
  <RouterView />
</template>

<script lang="ts">
export default {
  data() {
    return {
      theme: 'light'
    }
  },
  watch: {
    theme(theme) {
      document.documentElement.dataset.theme = theme
    }
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
    }
  }
}
</script>