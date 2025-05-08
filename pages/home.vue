<template>
  <div>
    <h1 class="text-2xl font-bold">
      HOME
    </h1>
    <router-link
      v-if="user === 'admin'"
      to="/admin"
      class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition"
    >
      Go to Admin Dashboard
    </router-link>
    <p v-else class="text-sm text-gray-500">You don’t have admin access.</p>
  </div>
</template>

<script lang="ts" setup>
const user = useCookie('user').value
</script>
