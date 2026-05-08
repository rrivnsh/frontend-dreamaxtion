<script setup>
const props = defineProps({
  item: Object,
  isWatchlist: Boolean,
});

const addToWatchlist = (movie) => {
  const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

  const isExist = watchlist.find((item) => item.id === movie.id);

  if (isExist) {
    alert("Movie already in watchlist");
    return;
  }

  watchlist.push(movie);

  localStorage.setItem("watchlist", JSON.stringify(watchlist));

  alert("Added to watchlist");
};

const removeFromWatchlist = (movieId) => {
  const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

  const filteredWatchlist = watchlist.filter((item) => item.id !== movieId);

  localStorage.setItem("watchlist", JSON.stringify(filteredWatchlist));

  window.location.reload();
};
</script>

<template>
  <router-link :to="`/detail/${item.media_type || 'movie'}/${item.id}`">
    <div
      class="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-[1.03] transition-all duration-300"
    >
      <img
        :src="
          item.poster_path
            ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
            : 'https://placehold.co/500x750?text=No+Image'
        "
        :alt="item.title || item.name"
        class="w-full"
      />

      <div class="p-3">
        <h2 class="font-semibold text-sm line-clamp-1">
          {{ item.title || item.name }}
        </h2>

        <p class="text-sm text-gray-400">
          ⭐ {{ item.vote_average.toFixed(1) }}
        </p>

        <div
          v-if="item.vote_average > 8 && item.vote_count > 1000"
          class="mt-2 inline-block bg-red-600 text-xs px-2 py-1 rounded-full"
        >
          Recommended
        </div>

        <button
          v-if="!props.isWatchlist"
          @click.prevent="addToWatchlist(item)"
          class="mt-3 w-full bg-red-600 hover:bg-red-700 py-2 rounded-lg text-sm"
        >
          Add to Watchlist
        </button>

        <button
          v-else
          @click.prevent="removeFromWatchlist(item.id)"
          class="mt-3 w-full bg-gray-700 hover:bg-gray-800 py-2 rounded-lg text-sm"
        >
          Remove
        </button>
      </div>
    </div>
  </router-link>
</template>
