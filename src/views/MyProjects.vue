<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { onMounted, ref } from 'vue';
import RoundedSection from '../components/RoundedSection.vue';
import { githubApi } from '../lib/api/github';
import type { GithubRepo } from '../interfaces/github';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
    <swiper class="projectsSwiper" :slides-per-view="3" :space-between="10" :navigation="true"
      :pagination="{ clickable: true }" :modules="[Navigation, Pagination, Autoplay]" :autoplay="{
        delay: 3000,
        disableOnInteraction: false
      }">
      <swiper-slide v-for="value in repos">
        <a v-if="repos" class="roundedLink" :href="value.html_url" target="_blank" rel="noopener noreferrer">
          <p>{{ value.name }}</p>
          <p>{{ value.description }}</p>
          <div class="stars">
            <v-icon name="bi-star-fill" />
            <span class="count">{{ value.stargazers_count }}</span>
          </div>
        </a>
      </swiper-slide>
    </swiper>
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
  color: #0f2f30;
  padding: 1rem;
  height: 15rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.roundedLink:hover {
  background-color: #a3fff4;
}

.roundedLink:focus-visible {
  outline: 2px solid #5fd4c6;
  outline-offset: 3px;
}

.roundedLink p {
  margin: 0;
  font-size: 20px;
}

.roundedLink p+p {
  margin-top: 0.35rem;
}

.roundedLink p:first-child {
  font-weight: 700;
  color: #0e3a3b;
}

.roundedLink p:nth-child(2) {
  color: #475569;
}

.roundedLink p:last-child {
  color: #0f5a57;
  font-weight: 600;
}

.roundedLink+.roundedLink {
  margin-top: 0.75rem;
}

.stars {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 0.5rem;
  color: #0f5a57;
}

.stars .count {
  font-weight: 600;
}

.projectsSwiper {
  border-radius: 8px;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  padding: 4rem;
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
  .projectsSwiper {
    padding: 0.75rem;
    border-radius: 6px;
  }

  .swiper-button-next,
  .swiper-button-prev {
    display: none;
  }

  .swiper-pagination-bullet {
    margin: 0;
  }
}
</style>
