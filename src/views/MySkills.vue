<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import RoundedSection from '../components/RoundedSection.vue';
import { Navigation, Pagination } from 'swiper/modules';

type Skill = {
  name: string;
  icon: string;
  link?: string;
};

const skills: Skill[] = [
  { name: 'Android', icon: 'co-android', link: 'https://android.com/' },
  { name: 'Java', icon: 'co-java', link: 'https://www.oracle.com/java/' },
  { name: 'Linux', icon: 'co-linux', link: 'https://www.kernel.org/' },
  { name: 'Python', icon: 'co-python', link: 'https://www.python.org/' },
  { name: 'MongoDB', icon: 'si-mongodb', link: 'https://www.mongodb.com/' },
  { name: 'Vue', icon: 'co-vue-js', link: 'https://vuejs.org/' },
  { name: 'React', icon: 'co-react', link: 'https://react.dev/' },
  { name: 'Windows', icon: 'co-windows', link: 'https://www.microsoft.com/windows' },
];
</script>

<template>
  <RoundedSection :title="$t('skills')" :iconName="'bi-lightbulb-fill'">
    <swiper class="mySwiper" :slides-per-view="5" :space-between="8" :navigation="true"
      :pagination="{ clickable: true }" :modules="[Navigation, Pagination]" :breakpoints="{
        1200: { slidesPerView: 5 },
        1000: { slidesPerView: 4 },
        300: { slidesPerView: 3 },
        200: { slidesPerView: 2 },
        0: { slidesPerView: 1 }
      }">
      <swiper-slide v-for="skill in skills" :key="skill.name">
        <a
          v-if="skill.link"
          class="skill-link"
          :href="skill.link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <v-icon :name="skill.icon" scale="5" />
          <p>{{ skill.name }}</p>
        </a>
        <div v-else class="skill-card">
          <v-icon :name="skill.icon" scale="5" />
          <p>{{ skill.name }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </RoundedSection>
</template>

<style>
.mySwiper {
  background-color: rgb(0, 79, 67);
  border-radius: 8px;
  padding: 1rem;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}

.swiper-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 0;
}

.swiper-slide .skill-link,
.swiper-slide .skill-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  color: inherit;
  text-decoration: none;
}

.swiper-button-next,
.swiper-button-prev {
  color: #6AD9CA;
}

.swiper-pagination-bullet {
  background: #166063;
  opacity: 0.7;
  margin: 0;
}

.swiper-pagination-bullet-active {
  background: #6AD9CA;
  opacity: 1;
}

@media (max-width: 870px) {
  .mySwiper {
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

  .swiper-slide v-icon {
    font-size: 3em !important;
  }
}

.mySwiper .swiper-pagination {
  position: static;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding-top: 0.5rem;
}
</style>
