<script setup>
import { onMounted, ref } from "vue";
import MovieCard from "../components/MovieCard.vue";

const watchlist = ref([]);

const getWatchlist = () => {
  const data = JSON.parse(localStorage.getItem("watchlist")) || [];

  watchlist.value = data;
};

onMounted(() => {
  getWatchlist();
});
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-6">My Watchlist</h1>

    <div v-if="watchlist.length === 0" class="text-gray-400">
      Watchlist is empty
    </div>

    <div
      v-else
      class="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
    >
      <MovieCard
        v-for="item in watchlist"
        :key="item.id"
        :item="item"
        :is-watchlist="true"
      />
    </div>
  </div>
</template>
