<script setup lang="ts">
import RoundedSection from '../components/RoundedSection.vue';

</script>

<template>
    <RoundedSection :title="$t('aboutThisWebsite')">
        <p>{{ $t('aboutWebText') }}</p>
    </RoundedSection>
</template>