<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import RoundedSection from '../components/RoundedSection.vue';
</script>

<template>
    <RoundedSection :title="$t('skills')">
        <Swiper class="mySwiper" :slides-per-view="1" :space-between="10" :navigation="true"
            :pagination="{ clickable: true }">
            <SwiperSlide> <v-icon name="co-python" scale="5" /></SwiperSlide>
            <SwiperSlide> <v-icon name="co-python" scale="5" /></SwiperSlide>
        </Swiper>
    </RoundedSection>
</template>