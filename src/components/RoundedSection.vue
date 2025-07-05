<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  image: String,
  isFirst: Boolean,
  hasImage: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <div class="wrapper">
    <div class="same-line">
      <img v-if="hasImage && image" :src="image" alt="Section icon" />
      <v-icon scale="7" v-else name="bi-lightbulb-fill" />
      <h1>{{ title }}</h1>
    </div>
    <slot></slot>
  </div>
</template>

<style>
@keyframes colors {
  0% {
    background-color: #458e78;
  }

  100% {
    background-color: #166063;
  }
}

@keyframes goToTop {
  0% {
    transform: translateY(100%);
  }

  100% {
    transform: translateY(0);
  }
}

.wrapper {
  background-color: #166063;
  border-radius: 8px;
  padding: 3rem;
  margin: 5rem 0.2rem 2rem 0.2rem;
  animation: colors 3s;
  @media(max-width: 800px) {
    padding: 0.2rem;
    margin: 6rem 0.2rem 1rem 0.2rem;
  }
}

.same-line {
  display: flex;
  align-items: center;
  justify-content: center;

  @media(max-width: 800px) {
    flex-direction: column;
  }
}

h1 {
  margin: 5rem 3rem;
  font-size: 6rem;
  animation: goToTop 1.2s;

  @media(max-width: 800px) {
    font-size: 3rem;
    margin: 0;
  }
}

p {
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 2rem;
  animation: goToTop 1.2s;

  @media(max-width: 800px) {
    font-size: 1rem;
    margin: 0.5rem;
  }
}

img {
  width: 17%;
  height: 17%;
  border-radius: 50%;
  animation: goToTop 1.2s;
  @media(max-width: 800px) {
    margin-top: 1rem;
    width: 40%;
    height: 40%;
  }
}

v-icon {
  animation: goToTop 1.2s;
}
</style>