<script setup lang="ts">
import RoundedSection from '../components/RoundedSection.vue';
</script>

<template>
  <RoundedSection image="https://github.com/GiovaniFZ.png" :title="$t('greeting')" :subtitle="$t('introduction')" isFirst hasImage>
    <p>{{ $t('aboutMeText') }}</p>
  </RoundedSection>
</template>