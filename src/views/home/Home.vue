<template>
  <div class="container">首页</div>
   <router-link to="/all">Go to all</router-link>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
const msg = ref("test")
</script>

<style scoped>
.container{

}
</style>
