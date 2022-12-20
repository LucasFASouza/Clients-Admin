<template>
  <div>
    <navbar-section />
    <router-view />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import NavbarSection from "./components/NavbarSection.vue";
</script>
