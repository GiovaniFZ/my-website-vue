<script setup lang="ts">
import { onMounted } from 'vue';
import RoundedSection from '../components/RoundedSection.vue';
import { getIconScale, iconScale } from '../utils/get-icon-scale.ts';

onMounted(() => {
  getIconScale()
  window.addEventListener('resize', getIconScale)
})

</script>

<style scoped>
.contact-icons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.contact-icons a {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease-in;
}

.contact-icons a:hover {
  color: #5fd4c6;
}

@media (max-width: 870px) {
  .contact-icons v-icon {
    font-size: 3em !important;
  }
}
</style>

<template>
  <RoundedSection :subtitle="$t('socialNetworks')" :title="$t('my')" :iconName="'io-person'">
    <div class="contact-icons">
      <a href="https://www.linkedin.com/in/giovani-furigo-finazzi-3b1337264/" target="_blank" rel="noopener noreferrer">
        <v-icon name="fa-linkedin" :scale="iconScale" />
      </a>
      <a href="https://github.com/GiovaniFZ" target="_blank" rel="noopener noreferrer">
        <v-icon name="bi-github" :scale="iconScale" />
      </a>
      <a href="https://instagram.com/giovani.finazzi" target="_blank" rel="noopener noreferrer">
        <v-icon name="bi-instagram" :scale="iconScale" />
      </a>
    </div>
  </RoundedSection>
</template>