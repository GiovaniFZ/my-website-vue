<script setup>
defineProps({
  title: {
    type: String,
    required: false
  },
  subtitle: {
    type: String,
    required: false
  },
  image: String,
  iconName: String,
  isFirst: Boolean,
  hasImage: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <div class="same-line" :class="{ 'align-start': isFirst }">
        <img v-if="hasImage && image" :src="image" alt="Section icon" />
        <v-icon scale="7" v-else :name="iconName" aria-hidden="true" />
        <div v-if="subtitle" class="title-container">
          <span v-if="title" class="greeting">{{ title }}</span>
          <h1>{{ subtitle }}</h1>
        </div>
        <h1 v-else>{{ title }}</h1>
      </div>
      <div class="slot-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes colors {
  0% {
    background-color: #1a6b64;
  }

  100% {
    background-color: #166063;
  }
}

@keyframes goToTop {
  0% {
    transform: translateY(12px);
    opacity: 0;
    filter: blur(2px);
  }

  100% {
    transform: translateY(0);
    opacity: 1;
    filter: blur(0);
  }
}

.wrapper {
  background-color: #166063;
  border-radius: 8px;
  padding: 3rem;
  box-sizing: border-box;
  margin: 5rem 0.75rem 2rem 0.75rem;
  animation: colors 800ms ease-out both;
  @media(max-width: 870px) {
    padding: 1rem;
    margin: 6rem 0.75rem 1.25rem 0.75rem;
  }
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

.same-line {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media(max-width: 870px) {
    flex-direction: column;
  }
}

.title-container {
  display: flex;
  flex-direction: column;
  margin: 0;
  text-align: center;
  animation: goToTop 600ms cubic-bezier(0.22, 1, 0.36, 1) both;

  @media(max-width: 870px) {
    margin: 0.5rem 0 0 0;
  }
}

.greeting {
  font-size: 2.5rem;
  line-height: 1.05;

  @media(max-width: 870px) {
    font-size: 1.5rem;
    display: block;
    text-align: center;
  }
}

h1 {
  font-size: 6rem;
  margin: 0;
  text-align: center;
  animation: goToTop 600ms cubic-bezier(0.22, 1, 0.36, 1) both;

  @media(max-width: 870px) {
    font-size: 3rem;
    margin: 0;
  }
}

.same-line.align-start .title-container,
.same-line.align-start h1 {
  text-align: left;
}

.title-container h1 {
  margin: 0;
}

.slot-content {
  display: block;
  margin-top: 2rem;
  width: 100%;
}

:slotted(.mySwiper),
:slotted(.swiper) {
  display: block;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
}

.greeting + h1 {
  margin-top: 0.25rem;
  line-height: 1.05;
}

:slotted(p) {
  font-size: 2rem;
  text-align: center;
  animation: goToTop 550ms cubic-bezier(0.22, 1, 0.36, 1) both;

  @media(max-width: 870px) {
    font-size: 1rem;
    margin: 0.5rem;
  }
}

img {
  width: 17%;
  height: 17%;
  border-radius: 50%;
  animation: goToTop 650ms cubic-bezier(0.22, 1, 0.36, 1) both;
  @media(max-width: 870px) {
    margin-top: 1rem;
    width: 40%;
    height: 40%;
  }
}

v-icon {
  animation: goToTop 600ms cubic-bezier(0.22, 1, 0.36, 1) both;
}

@media (prefers-reduced-motion: reduce) {
  .wrapper,
  h1,
  img,
  v-icon,
  :slotted(p) {
    animation: none !important;
  }
}

@media (max-width: 870px) {
  .same-line > v-icon {
    font-size: 4em !important;
  }
}
</style>
