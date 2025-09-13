<script setup lang="ts">
import { onMounted, ref } from 'vue';
import RoundedSection from '../components/RoundedSection.vue';
import { githubApi } from '../lib/api/github';
import type { GithubRepo } from '../interfaces/github';

const repos = ref<GithubRepo[] | null>(null);

onMounted(async () => {
  try {
    const request = await githubApi.get('/repos');
    repos.value = request.data;
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
  }
})
</script>

<template>
  <RoundedSection :title="$t('my-projects')">
    <!--
    <div v-if="repos">
      <p>{{ repos[0].name }}</p>
    </div>
    -->
    <p>Page under construction</p>
  </RoundedSection>
</template>