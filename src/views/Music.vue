<script setup lang="ts">
import { onMounted, ref } from 'vue';
import RoundedSection from '../components/RoundedSection.vue';
import { api } from '../lib/api/lastfm';
import type { Track } from '../interfaces/lastFM';

const track = ref<Track | null>(null);

onMounted(async () => {
  try {
    const request = await api.get('/latest-song');
    track.value = request.data.track;
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
  }
})
</script>

<template>
  <RoundedSection :title="$t('music')" :iconName="'co-apple-music'">
    <p>{{ $t('myLastDescription') }}</p>
    <div v-if="track">
      <p>{{ track.artist['#text'] }} - {{ track.name }}</p>
    </div>
    <p v-else>Carregando...</p>
  </RoundedSection>
</template>