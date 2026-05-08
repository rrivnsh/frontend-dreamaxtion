<script setup>
import { ref } from "vue";
import LoadingSpinner from "../components/LoadingSpinner.vue";
import MovieCard from "../components/MovieCard.vue";
import api from "../services/api";

const query = ref("");
const results = ref([]);
const loading = ref(false);
const hasSearched = ref(false);

const searchMovies = async () => {
  if (!query.value) return;

  loading.value = true;
  hasSearched.value = true;

  try {
    const response = await api.get("/search/multi", {
      params: {
        query: query.value,
      },
    });

    results.value = response.data.results.filter(
      (item) => item.media_type === "movie" || item.media_type === "tv",
    );
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div>
    <div class="relative mb-10 rounded-3xl overflow-hidden text-center">
      <img
        src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba"
        alt="Hero Banner"
        class="w-full h-60 md:h-80 object-cover opacity-40"
      />

      <div
        class="absolute inset-0 flex flex-col justify-center items-center px-4 md:px-8"
      >
        <h1 class="text-3xl md:text-5xl font-bold mb-4 max-w-2xl leading-tight">
          Welcome to Movie & TV Show Explorer
        </h1>

        <p class="text-gray-300 max-w-xl text-sm md:text-base">
          Discover popular movies and TV shows from around the world.
        </p>
      </div>
    </div>

    <h1 class="text-3xl md:text-4xl font-bold mb-6">
      Search Movies & TV Shows
    </h1>

    <div class="flex gap-2 mb-8">
      <input
        v-model="query"
        @keyup.enter="searchMovies"
        type="text"
        placeholder="Search movie..."
        class="flex-1 bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-red-500"
      />

      <button
        @click="searchMovies"
        class="bg-red-600 px-6 rounded-xl hover:bg-red-700 transition"
      >
        Search
      </button>
    </div>

    <LoadingSpinner v-if="loading" />

    <div
      v-if="hasSearched && !loading && results.length === 0"
      class="text-gray-400 text-center py-10"
    >
      No results found
    </div>

    <div
      v-if="hasSearched && !loading && results.length > 0"
      class="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
    >
      <MovieCard v-for="item in results" :key="item.id" :item="item" />
    </div>
  </div>
</template>
