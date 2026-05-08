<script setup>
import AppFooter from "./components/AppFooter.vue";
import AppNavbar from "./components/AppNavbar.vue";
</script>

<template>
  <div class="min-h-screen bg-black text-white flex flex-col">
    <AppNavbar />

    <main class="max-w-360 mx-auto px-4 py-6 flex-1 w-full">
      <router-view />
    </main>

    <AppFooter />
  </div>
</template>
