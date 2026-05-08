<script setup>
import { onMounted, ref } from "vue";
import LoadingSpinner from "../components/LoadingSpinner.vue";
import MovieCard from "../components/MovieCard.vue";
import api from "../services/api";

const movies = ref([]);
const loading = ref(true);

const getPopularMovies = async () => {
  try {
    const response = await api.get("/movie/popular");
    movies.value = response.data.results.map((movie) => ({
      ...movie,
      media_type: "movie",
    }));
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  getPopularMovies();
});
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Popular Movies</h1>

    <LoadingSpinner v-if="loading" />

    <div
      v-else
      class="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
    >
      <MovieCard v-for="movie in movies" :key="movie.id" :item="movie" />
    </div>
  </div>
</template>
