<template>
  <div class="min-h-screen bg-gray-100">
    <aside class="fixed inset-y-0 left-0 w-64 bg-white shadow-md hidden md:block">
      <div class="p-6 border-b">
        <h2 class="text-2xl font-bold text-gray-800">Admin Panel</h2>
      </div>
      <nav class="p-6 space-y-4">
        <a href="#" class="block text-gray-700 hover:text-blue-600 font-medium">Dashboard</a>
        <a href="#" class="block text-gray-700 hover:text-blue-600 font-medium">Users</a>
        <a href="#" class="block text-gray-700 hover:text-blue-600 font-medium">Reports</a>
        <a href="#" class="block text-gray-700 hover:text-blue-600 font-medium">Settings</a>
      </nav>
    </aside>

    <div class="md:ml-64 p-6">
      <header class="flex items-center justify-between mb-6">
        <h1 class="text-3xl font-semibold text-gray-800">Welcome, Admin 👋</h1>
        <router-link to="/home" class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition" >
          Home
        </router-link>
      </header>

      <section class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        <div class="bg-white p-5 rounded-lg shadow">
          <h2 class="text-lg font-semibold text-gray-700">Total Users</h2>
          <p class="text-2xl font-bold text-blue-600 mt-2">1,250</p>
        </div>
        <div class="bg-white p-5 rounded-lg shadow">
          <h2 class="text-lg font-semibold text-gray-700">Monthly Revenue</h2>
          <p class="text-2xl font-bold text-green-600 mt-2">$34,500</p>
        </div>
        <div class="bg-white p-5 rounded-lg shadow">
          <h2 class="text-lg font-semibold text-gray-700">Support Tickets</h2>
          <p class="text-2xl font-bold text-red-500 mt-2">45</p>
        </div>
      </section>

      <section class="mt-10">
        <h2 class="text-2xl font-semibold mb-4 text-gray-800">Recent Activities</h2>
        <ul class="bg-white rounded-lg shadow divide-y">
          <li class="p-4 hover:bg-gray-50">🟢 User <strong>chaerullah</strong> registered.</li>
          <li class="p-4 hover:bg-gray-50">🔴 Server issue reported.</li>
          <li class="p-4 hover:bg-gray-50">🟢 Payment received from <strong>John Doe</strong>.</li>
        </ul>
      </section>
    </div>
  </div>
</template>
