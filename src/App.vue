<script setup>
import { ApiClient } from './api-client/ApiClient';
import { onBeforeMount } from 'vue';

onBeforeMount(() => {
  const apiClient = new ApiClient()
  console.log(apiClient.getClients())
})
</script>

<template>
  <div>
    
  </div>
</template>

<style scoped>
</style>
