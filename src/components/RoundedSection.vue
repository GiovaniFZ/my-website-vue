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
  <div class="wrapper" :style="{ marginTop: isFirst ? '5rem' : '1rem' }">
    <div class="same-line">
      <img v-if="hasImage && image" :src="image" alt="Section icon" />
      <v-icon scale="3" v-else name="bi-lightbulb-fill" />
      <h1>{{ title }}</h1>
    </div>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis modi dolores voluptatem, minima quia nostrum
      voluptate consequatur sint. Id cum obcaecati enim voluptates nemo voluptatem saepe doloremque animi alias nam.</p>
  </div>
</template>

<style>
.wrapper {
  display: block;
  background-color: #e9f5f3;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem;
  align-items: center;
}

.same-line {
  display: flex;
  align-items: center;
  justify-content: center;
}

h1 {
  margin: 1rem;
}

p {
  align-items: center;
  justify-content: center;
  display: flex;
}

img {
  width: 5%;
  height: 5%;
  border-radius: 50%;
}
</style>