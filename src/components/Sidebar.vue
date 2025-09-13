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
            <RouterLink @click="handleClick" style="text-decoration: none;" to="/">{{ $t('home') }}</RouterLink>
          </li>
          <li>
            <RouterLink @click="handleClick" style="text-decoration: none;" to="/skills">{{ $t('skills') }}</RouterLink>
          </li>
          <li>
            <RouterLink @click="handleClick" style="text-decoration: none;" to="/music">{{ $t('music') }}</RouterLink>
          </li>
          <li>
            <RouterLink @click="handleClick" style="text-decoration: none;" to="/contact">{{ $t('contact') }}</RouterLink>
          </li>
          <li>
            <RouterLink @click="handleClick" style="text-decoration: none;" to="/my-projects">{{ $t('my-projects') }}</RouterLink>
          </li>
          <li>
            <RouterLink @click="handleClick" style="text-decoration: none;" to="/about">{{ $t('aboutThisWebsite') }}</RouterLink>
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
  background: linear-gradient(135deg, #124344 80%, #166063 100%);
  opacity: 0.98;
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
  color: #6AD9CA;
  background: rgba(22, 96, 99, 0.18);
  border: 1px solid rgba(106, 217, 202, 0.45);
  border-radius: 10px;
  width: 2.25rem;
  height: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: background 0.2s, color 0.2s, border-color 0.2s;
}

aside > button:hover {
  background: #6AD9CA;
  color: #124344;
  border-color: transparent;
}

aside > button:focus-visible {
  outline: 2px solid #6AD9CA;
  outline-offset: 2px;
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
  background: #6AD9CA;
  color: #124344;
}

.sidebar-enter-active {
  animation: slideIn 0.3s ease-out;
}

.sidebar-leave-active {
  animation: slideOut 0.3s ease-in;
}
</style>