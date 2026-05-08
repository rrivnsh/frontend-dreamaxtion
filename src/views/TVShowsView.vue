<script setup>
import { onMounted, ref } from "vue";
import LoadingSpinner from "../components/LoadingSpinner.vue";
import MovieCard from "../components/MovieCard.vue";
import api from "../services/api";

const tvShows = ref([]);
const loading = ref(true);

const getPopularTVShows = async () => {
  try {
    const response = await api.get("/tv/popular");

    tvShows.value = response.data.results.map((tv) => ({
      ...tv,
      media_type: "tv",
    }));
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  getPopularTVShows();
});
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Popular TV Shows</h1>

    <LoadingSpinner v-if="loading" />

    <div
      v-else
      class="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
    >
      <MovieCard v-for="tv in tvShows" :key="tv.id" :item="tv" />
    </div>
  </div>
</template>
