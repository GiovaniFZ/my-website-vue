<script setup lang="ts">
import Header from './components/Header.vue';
import RoundedSection from './components/RoundedSection.vue';
// import { BiLightbulbFill } from "oh-vue-icons/icons";
import './style.css'
</script>

<template>
  <Header />
  <RoundedSection image="https://github.com/GiovaniFZ.png" title="About me" isFirst hasImage />
  <!-- <RoundedSection :icon="BiLightbulbFill" title="My skills" /> -->
</template>
