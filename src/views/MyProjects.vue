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
  <RoundedSection :title="$t('some-of')" :subtitle="$t('my-projects')" :iconName="'bi-kanban-fill'">
    <div v-if="loading" class="skeleton-loader">
      <div class="skeleton-text"></div>
      <div class="skeleton-text"></div>
    </div>
    <div v-else-if="error" class="error-message">
      <p>{{ $t('repositoryLoadError') }}</p>
    </div>
    <div class="grid" v-else>
      <a v-if="repos" v-for="value in repos" class="roundedLink" :href="value.html_url" target="_blank" rel="noopener noreferrer">
        <p>{{ value.name }}</p>
        <p>{{ value.description }}</p>
        <div class="stars">
          <v-icon name="bi-star-fill" />
          <span class="count">{{ value.stargazers_count }}</span>
        </div>
      </a>
    </div>
  </RoundedSection>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media(max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media(max-width: 400px) {
    grid-template-columns: 1fr;
  }
}
.roundedLink {
  display: block;
  border-radius: 12px;
  text-decoration: none;
  background-color: #ffffff;
  color: #123435;
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: transform 0.15s ease, box-shadow 0.15s ease, background-color 0.15s ease, color 0.15s ease;
}

.roundedLink:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.18);
  background-color: #f2fbf9;
}

.roundedLink:focus-visible {
  outline: 2px solid #6AD9CA;
  outline-offset: 3px;
}

.roundedLink p {
  margin: 0;
}

.roundedLink p + p {
  margin-top: 0.35rem;
}

.roundedLink p:first-child {
  font-weight: 700;
  color: #0f3d3e;
}

.roundedLink p:nth-child(2) {
  color: #475569;
}

.roundedLink p:last-child {
  color: #166063;
  font-weight: 600;
}

.roundedLink + .roundedLink {
  margin-top: 0.75rem;
}

.stars {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 0.5rem;
  color: #166063;
}

.stars .count {
  font-weight: 600;
}
</style>
