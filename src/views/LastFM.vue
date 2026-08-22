<script setup lang="ts">
import { onMounted } from 'vue';
import RoundedSection from '../components/RoundedSection.vue';
import { useLastFM } from '../stores/useLastFM.ts';
const lastFMStore = useLastFM()

onMounted(async () => { await lastFMStore.requestLastFM()})
</script>

<template>
  <RoundedSection :title="''" :subtitle="$t('lastFM')" :iconName="'co-apple-music'">
    <p>{{ $t('myLastDescription') }}</p>
    <div v-if="lastFMStore.loading" class="skeleton-loader">
      <div class="skeleton-text"></div>
    </div>
    <div v-else-if="lastFMStore.error" class="error-message">
      <p>{{ $t('trackLoadError') }}</p>
    </div>
    <div v-else-if="lastFMStore.track">
      <p>{{ lastFMStore.track.artist['#text'] }} - {{ lastFMStore.track.name }}</p>
    </div>
  </RoundedSection>
</template>
