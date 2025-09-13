<script setup lang="ts">
import { onMounted, ref } from 'vue';
import RoundedSection from '../components/RoundedSection.vue';
import { githubApi } from '../lib/api/github';
import type { GithubRepo } from '../interfaces/github';

const repos = ref<GithubRepo[] | null>(null);
const loading = ref(true);
const error = ref(false);

onMounted(async () => {
  try {
    const request = await githubApi.get('/repos');
    repos.value = request.data;
  } catch (err) {
    console.error('Erro ao buscar dados:', err);
    //error.value = true;
  } finally {
    loading.value = false;
  }
})
</script>

<template>
  <RoundedSection :title="$t('my-projects')">
    <div v-if="loading" class="skeleton-loader">
      <div class="skeleton-text"></div>
      <div class="skeleton-text"></div>
    </div>
    <div v-else-if="error" class="error-message">
      <p>Failed to load repository data</p>
    </div>
    <div v-else>
      <!--
      <div v-if="repos">
        <p>{{ repos[0].name }}</p>
      </div>
      -->
      <p>Page under construction</p>
    </div>
  </RoundedSection>
</template>