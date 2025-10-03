<script setup>
import { ApiClient } from './api-client/ApiClient';
import { onBeforeMount } from 'vue';
import ClientTable from './components/ClientTable.vue';
import { useClientsStore } from './store/clientsStore';

const store = useClientsStore()

onBeforeMount(() => {
  const apiClient = new ApiClient()
  store.setNewClients(apiClient.getClients())
})
</script>

<template>
  <div>
    Некоторая информация сверху
  </div>
  <router-view></router-view>
</template>

<style scoped>
</style>
