<script setup lang="ts">
import Header from './components/Header.vue';
import RoundedSection from './components/RoundedSection.vue';
import './style.css'
</script>

<template>
  <Header />
  <RoundedSection image="https://github.com/GiovaniFZ.png" title="About me" isFirst />
  <RoundedSection title="My skills" />
</template>
