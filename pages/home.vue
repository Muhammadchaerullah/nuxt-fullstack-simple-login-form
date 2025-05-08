<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
      <h1 class="text-3xl font-bold text-gray-800 mb-4">Home Page</h1>
      <p class="text-gray-600 text-lg mb-6">Welcome, <span class="font-semibold text-blue-600">{{ user }}</span></p>

      <router-link
        v-if="user === 'admin'"
        to="/admin"
        class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition"
      >
        Go to Admin Dashboard
      </router-link>

      <p v-else class="text-sm text-gray-500">You don’t have admin access.</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const user = useCookie('user').value
</script>
