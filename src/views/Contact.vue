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

.contact-icons a {
    color: inherit;
    text-decoration: none;
}

.contact-icons a:hover {
    color: #6AD9CA;
    transform: scale(1.1);
    transition: all 0.3s ease;
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
            <a href="https://instagram.com/giovani.finazzi" target="_blank" rel="noopener noreferrer">
                <v-icon name="bi-instagram" scale="5" />
            </a>
        </div>
    </RoundedSection>
</template>