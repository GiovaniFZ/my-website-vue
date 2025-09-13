<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import RoundedSection from '../components/RoundedSection.vue';
import { Navigation, Pagination } from 'swiper/modules';
</script>

<template>
  <RoundedSection :title="$t('skills')" :iconName="'bi-lightbulb-fill'">
    <swiper class="mySwiper" :slides-per-view="5" :space-between="2" :navigation="true"
      :pagination="{ clickable: true }" :modules="[Navigation, Pagination]" :breakpoints="{
        1200: { slidesPerView: 5 },
        1000: { slidesPerView: 4 },
        300: { slidesPerView: 3 },
        200: { slidesPerView: 2 },
        0: { slidesPerView: 1 }
      }">
      <swiper-slide>
        <v-icon name="co-android" scale="5" />
        <p>Android</p>
      </swiper-slide>
      <swiper-slide>
        <v-icon name="co-java" scale="5" />
        <p>Java</p>
      </swiper-slide>
      <swiper-slide>
        <v-icon name="co-linux" scale="5" />
        <p>Linux</p>
      </swiper-slide>
      <swiper-slide>
        <v-icon name="co-python" scale="5" />
        <p>Python</p>
      </swiper-slide>
      <swiper-slide>
        <v-icon name="si-mongodb" scale="5" />
        <p>MongoDB</p>
      </swiper-slide>
      <swiper-slide>
        <v-icon name="co-vue-js" scale="5" />
        <p>Vue</p>
      </swiper-slide>
      <swiper-slide>
        <v-icon name="co-react" scale="5" />
        <p>React</p>
      </swiper-slide>
      <swiper-slide>
        <v-icon name="co-windows" scale="5" />
        <p>Windows</p>
      </swiper-slide>
    </swiper>
  </RoundedSection>
</template>

<style>
.mySwiper {
  background-color: rgb(0, 79, 67);
  border-radius: 8px;
  padding: 1.5rem;
}

.swiper-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 0;
}

.swiper-button-next,
.swiper-button-prev {
  color: #6AD9CA;
}

.swiper-pagination-bullet {
  background: #166063;
  opacity: 0.7;
  margin: 1rem;
}

.swiper-pagination-bullet-active {
  background: #6AD9CA;
  opacity: 1;
}
</style>