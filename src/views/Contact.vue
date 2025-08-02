<script setup lang="ts">
import RoundedSection from '../components/RoundedSection.vue';
</script>

<style scoped>
.contact-icons {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
}
</style>

<template>
    <RoundedSection :title="$t('contact')" :iconName="'io-person'">
        <div class="contact-icons">
            <a href="https://t.me/givfnz2" target="_blank" rel="noopener noreferrer">
                <v-icon name="bi-telegram" scale="5" />
            </a>
            <a href="https://github.com/GiovaniFZ" target="_blank" rel="noopener noreferrer">
                <v-icon name="bi-github" scale="5" />
            </a>
        </div>
    </RoundedSection>
</template>