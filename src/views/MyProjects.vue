<script setup lang="ts">
import 'swiper/css';
import { onMounted, ref } from 'vue';
import RoundedSection from '../components/RoundedSection.vue';
import { githubApi } from '../lib/api/github';
import type { GithubRepo } from '../interfaces/github';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const repos = ref<GithubRepo[]>([]);
const loading = ref(true);
const error = ref(false);

onMounted(async () => {
  try {
    const params =
      {
        per_page: 8,
        sort: 'updated',
      }
    const request = await githubApi.get('/repos', params);
    repos.value = request.data;
  } catch (err) {
    console.error('Erro ao buscar dados:', err);
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
    <div
      v-else
      :key="repos.length"
      class="projects-grid">
      <div class="project-card" v-for="value in repos" :key="value.id">
        <a class="project-anchor" :href="value.html_url" target="_blank" rel="noopener noreferrer">
          <p class="project-name">{{ value.name }}</p>
          <p class="project-desc">{{ value.description }}</p>
          <div class="stars">
            <v-icon name="bi-star-fill" />
            <span class="count">{{ value.stargazers_count }}</span>
          </div>
        </a>
      </div>
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
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 20px;
  }

  .project-anchor {
    text-decoration: none;
    color: inherit;
    display: block;
  }

.project-card {
    background: linear-gradient(135deg, rgba(124, 58, 237, 0.25), rgba(6, 182, 212, 0.2));
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 16px;
    padding: 28px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .project-name {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 8px;
    letter-spacing: -0.01em;
  }

  .project-desc {
    color: var(--text-secondary);
    font-size: 14px;
    margin-bottom: 20px;
  }

  .project-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--accent-1), var(--accent-2));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s;
  }

  .project-card:hover {
    transform: translateY(-6px);
    border-color: var(--border-glow);
    box-shadow: 0 20px 50px rgba(0,0,0,0.5), 0 0 30px rgba(124, 58, 237, 0.2);
  }

  .project-card:hover::before {
    transform: scaleX(1);
  }

.stars {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 0.5rem;
  color: #fff;
}

.stars .count {
  font-weight: 600;
}

.swiper-button-next,
.swiper-button-prev {
  color: #5fd4c6;
}

.swiper-pagination-bullet {
  background: #0f5a57;
  opacity: 0.7;
  margin: 0;
}

.swiper-pagination-bullet-active {
  background: #5fd4c6;
  opacity: 1;
}

@media (max-width: 870px) {
  .swiper-button-next,
  .swiper-button-prev {
    display: none;
  }

  .swiper-pagination-bullet {
    margin: 0;
  }
}
</style>
