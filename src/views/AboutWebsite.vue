<script setup lang="ts">
import RoundedSection from '../components/RoundedSection.vue';
import Package from '../../package.json'
</script>

<template>
  <RoundedSection :title="$t('my')" :subtitle="$t('socialNetworks')" :iconName="'bi-code-slash'" isFirst>
    <p>{{ $t('aboutWebText') }}</p>
    <p>Version: {{ Package.version }}</p>
  </RoundedSection>
</template>