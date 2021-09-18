<template>
  <h1>{{ msg }}</h1>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
const msg = ref("test")
</script>

<style scoped></style>
