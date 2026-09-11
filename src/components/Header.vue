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
    <div class="first-anchor">Giv's Website</div>
    <nav>
      <RouterLink class="taskbar-btn" to="/">{{ $t('home') }}</RouterLink>
      <RouterLink class="taskbar-btn" to="/skills">{{ $t('skills') }}</RouterLink>
      <RouterLink class="taskbar-btn" to="/lastFM">{{ $t('lastFM') }}</RouterLink>
      <RouterLink class="taskbar-btn" to="/contact">{{ $t('socialNetworks') }}</RouterLink>
      <RouterLink class="taskbar-btn" to="/my-projects">{{ $t('my-projects') }}</RouterLink>
      <RouterLink class="taskbar-btn" to="/about">{{ $t('about') }}</RouterLink>
    </nav>
    <div class="language-select">
      <select v-model="locale" aria-label="Select language">
        <option v-for="loc in availableLocales" :key="`locale-${loc}`" :value="loc">{{ loc }}</option>
      </select>
    </div>
  </header>
</template>

<style scoped>
header {
  background: var(--bg-deep);
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
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);

  @media (max-width: 870px) {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 0.5rem;
    padding: 0.6rem calc(0.75rem + env(safe-area-inset-right));
    padding-left: calc(0.75rem + env(safe-area-inset-left));
  }

  a {
    text-decoration: none;
    border-radius: 6px;
    color: var(--text-secondary);
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
    background: var(--bg-mid);
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

  .first-anchor {
    background: none;
    color: var(--text-primary);
    font-size: 1.125rem;
    padding: 0 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .taskbar-btn:hover {
    color: var(--text-primary);
    transform: translateY(-2px);
  }

  .taskbar-btn:hover::before {
    opacity: 0.15;
  }

  nav {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
    display: flex;
    gap: 8px;
    padding: 10px 16px;
    background: var(--bg-taskbar);
    backdrop-filter: blur(20px) saturate(1.5);
    -webkit-backdrop-filter: blur(20px) saturate(1.5);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 18px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255,255,255,0.05);
    @media (max-width: 870px) {
      display: none;
    }
  }

  .taskbar-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 10px 16px;
    background: transparent;
    border: none;
    color: var(--text-secondary);
    font-size: 13px;
    font-weight: 500;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }

  .language-select {
    position: relative;
    flex-shrink: 0;
  }

  .language-select::after {
    position: absolute;
    top: 50%;
    right: 0.75rem;
    color: var(--text-secondary);
    font-size: 0.9rem;
    line-height: 1;
    pointer-events: none;
    transform: translateY(-58%);
  }

  select {
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 10px;
    cursor: pointer;
    padding: 0.5rem;
    background: rgba(255, 255, 255, 0.08);
    font: inherit;
    font-size: 0.8rem;
    font-weight: 700;
    min-width: 4.3rem;
    letter-spacing: 0.04em;
    outline: none;
    transition: background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  }

  select:hover {
    background: rgba(255, 255, 255, 0.14);
    border-color: rgba(58, 237, 195, 0.55);
  }

  select:focus-visible {
    border-color: var(--accent-2);
    box-shadow: 0 0 0 3px rgba(58, 237, 195, 0.2);
  }

  select option {
    background-color: #ffff;
    color: #0f2f30;
  }
}

  
  .taskbar-btn.router-link-active {
    background: linear-gradient(135deg, rgba(124, 58, 237, 0.25), rgba(6, 182, 212, 0.2));
    color: var(--text-primary);
  }

  .taskbar-btn.router-link-active::after {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 2px;
    background: linear-gradient(90deg, var(--accent-1), var(--accent-2));
    border-radius: 2px;
  }
</style>