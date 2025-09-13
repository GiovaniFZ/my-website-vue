<script setup lang="ts">
import { onMounted, ref } from 'vue';
import RoundedSection from '../components/RoundedSection.vue';
import { api } from '../lib/api/lastfm';
import type { Track } from '../interfaces/lastFM';

const track = ref<Track | null>(null);
const loading = ref(true);
const error = ref(false);

onMounted(async () => {
  try {
    const request = await api.get('/latest-song');
    track.value = request.data.track;
  } catch (err) {
    console.error('Erro ao buscar dados:', err);
    error.value = true;
  } finally {
    loading.value = false;
  }
})
</script>

<template>
  <RoundedSection :title="$t('music')" :iconName="'co-apple-music'">
    <p>{{ $t('myLastDescription') }}</p>
    <div v-if="loading" class="skeleton-loader">
      <div class="skeleton-text"></div>
    </div>
    <div v-else-if="error" class="error-message">
      <p>Failed to load track data</p>
    </div>
    <div v-else-if="track">
      <p>{{ track.artist['#text'] }} - {{ track.name }}</p>
    </div>
  </RoundedSection>
</template>