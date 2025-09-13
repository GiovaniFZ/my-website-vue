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
    <aside v-if="isOpen">
      <button @click="handleClick">X</button>
      <nav>
        <ul>
          <li>
            <RouterLink style="text-decoration: none;" to="/">{{ $t('about') }}</RouterLink>
          </li>
          <li>
            <RouterLink style="text-decoration: none;" to="/skills">{{ $t('skills') }}</RouterLink>
          </li>
          <li>
            <RouterLink style="text-decoration: none;" to="/music">{{ $t('music') }}</RouterLink>
          </li>
          <li>
            <RouterLink style="text-decoration: none;" to="/contact">{{ $t('contact') }}</RouterLink>
          </li>
          <li>
            <RouterLink style="text-decoration: none;" to="/my-projects">{{ $t('my-projects') }}</RouterLink>
          </li>
          <li>
            <RouterLink style="text-decoration: none;" to="/about">{{ $t('aboutThisWebsite') }}</RouterLink>
          </li>
        </ul>
      </nav>
    </aside>
  </Transition>
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

button {
  all: unset;
  align-self: flex-end;
  cursor: pointer;
  color: #000;
  font-size: 1.5rem;
  background: #166063;
  border-radius: 50%;
  width: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: background 0.2s, color 0.2s;
}

button:hover {
  background: #6AD9CA;
  color: #124344;
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