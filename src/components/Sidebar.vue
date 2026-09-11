<script setup lang="ts">
import { RouterLink } from 'vue-router';
const emit = defineEmits(['close']);

function handleClick() {
  emit('close');
}

defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
});

</script>

<template>
  <Transition name="sidebar">
    <aside v-if="isOpen" role="dialog" aria-modal="true" aria-label="Site menu">
      <button @click="handleClick" aria-label="Close menu">
        <v-icon name="bi-x" scale="1.2" />
      </button>
      <nav>
        <ul>
          <li>
            <RouterLink @click="handleClick" class="navlink" to="/">{{ $t('home') }}</RouterLink>
          </li>
          <li>
            <RouterLink @click="handleClick" class="navlink" to="/skills">{{ $t('skills') }}</RouterLink>
          </li>
          <li>
            <RouterLink @click="handleClick" class="navlink" to="/lastFM">{{ $t('lastFM') }}</RouterLink>
          </li>
          <li>
            <RouterLink @click="handleClick" class="navlink" to="/contact">{{ $t('socialNetworks') }}</RouterLink>
          </li>
          <li>
            <RouterLink @click="handleClick" class="navlink" to="/my-projects">{{ $t('my-projects') }}</RouterLink>
          </li>
          <li>
            <RouterLink @click="handleClick" class="navlink" to="/about">{{ $t('about') }}</RouterLink>
          </li>
        </ul>
      </nav>
    </aside>
  </Transition>

  <div v-if="isOpen" class="sidebar-backdrop" @click="handleClick" aria-hidden="true"></div>
</template>

<style>
@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0);
  }
}

@keyframes slideOut {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-100%);
  }
}

aside {
  background: var(--bg-mid);
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 150px;
  box-shadow: 2px 0 16px rgba(0, 0, 0, 0.18);
  padding: 2rem 1rem 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  transition: transform 0.3s cubic-bezier(.4, 2, .6, 1), box-shadow 0.2s;
  border-top-right-radius: 18px;
  border-bottom-right-radius: 18px;
}

.sidebar-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  z-index: 999;
}

aside > button {
  all: unset;
  align-self: flex-end;
  cursor: pointer;
  color: var(--accent-2);
  background: rgba(15, 90, 87, 0.18);
  border: 1px solid rgba(95, 212, 198, 0.45);
  border-radius: 10px;
  width: 2.25rem;
  height: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: background 0.2s, color 0.2s, border-color 0.2s;
}

nav ul {
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: flex-start;
}

li {
  list-style: none;
}

li a {
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0.4rem 1.2rem;
  border-radius: 6px;
  transition: background 0.2s, color 0.2s;
  display: block;
}

li a:hover,
li a.router-link-exact-active {
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.25), rgba(6, 182, 212, 0.2));
}

.sidebar-enter-active {
  animation: slideIn 0.3s ease-out;
}

.sidebar-leave-active {
  animation: slideOut 0.3s ease-in;
}
</style>