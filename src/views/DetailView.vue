<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import LoadingSpinner from "../components/LoadingSpinner.vue";
import api from "../services/api";

const route = useRoute();

const detail = ref(null);
const loading = ref(true);

const getDetailMovie = async () => {
  try {
    const response = await api.get(`/${route.params.type}/${route.params.id}`);

    detail.value = response.data;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  getDetailMovie();
});
</script>

<template>
  <LoadingSpinner v-if="loading" />

  <div v-else class="flex flex-col md:flex-row gap-8">
    <div>
      <img
        :src="
          detail.poster_path
            ? `https://image.tmdb.org/t/p/w500${detail.poster_path}`
            : 'https://placehold.co/500x750?text=No+Image'
        "
        :alt="detail.title || detail.name"
        class="rounded-xl w-full h-112.5 object-cover"
      />
    </div>

    <div>
      <router-link
        to="/"
        class="inline-block mb-6 text-red-500 hover:text-red-400"
      >
        ← Back
      </router-link>
      <h1 class="text-4xl font-bold mb-4">
        {{ detail.title || detail.name }}
      </h1>

      <p class="text-yellow-400 mb-4">⭐ {{ detail.vote_average }}</p>

      <p class="text-gray-300 leading-relaxed">
        {{ detail.overview }}
      </p>

      <div class="flex gap-2 mt-6 flex-wrap">
        <span
          v-for="genre in detail.genres"
          :key="genre.id"
          class="bg-red-600 px-3 py-1 rounded-full text-sm"
        >
          {{ genre.name }}
        </span>
      </div>
    </div>
  </div>
</template>
