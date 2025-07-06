<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import RoundedSection from '../components/RoundedSection.vue';
</script>

<template>
    <RoundedSection :title="$t('skills')">
        <swiper class="mySwiper" :slides-per-view="5" :space-between="2" :navigation="true"
            :pagination="{ clickable: true }">
            <swiper-slide>
                <v-icon name="co-java" scale="5" />
                <p>Java</p>
            </swiper-slide>
            <swiper-slide>
                <v-icon name="co-python" scale="5" />
                <p>Python</p>
            </swiper-slide>
            <swiper-slide>
                <v-icon name="si-mongodb" scale="5" />
                <p>MongoDB</p>
            </swiper-slide>
        </swiper>
    </RoundedSection>
</template>

<style>
.mySwiper {
    background-color: rgb(96, 168, 157);
    border-radius: 8px;
}

.swiper-slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>