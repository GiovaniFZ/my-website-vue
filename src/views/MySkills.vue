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
            :pagination="{ clickable: true }" :modules="[Navigation, Pagination]">
            <swiper-slide>
                <v-icon name="co-android" scale="5" />
                <p>Android</p>
            </swiper-slide>
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
    background-color: rgb(96, 168, 157);
    border-radius: 8px;
}

.swiper-slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 0;
}
</style>