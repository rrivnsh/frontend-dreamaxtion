<template>
  <nav
    class="border-b border-gray-800 sticky top-0 bg-black/80 backdrop-blur z-50"
  >
    <div class="max-w-360 mx-auto px-4 py-4 flex items-center justify-between">
      <router-link to="/">
        <h1 class="text-2xl font-bold text-red-600">NETFLIX CLONE</h1>
      </router-link>

      <div class="flex items-center gap-6 text-sm md:text-base">
        <router-link
          to="/"
          class="hover:text-red-500"
          active-class="text-red-500"
        >
          Home
        </router-link>

        <router-link
          to="/movies"
          class="hover:text-red-500"
          active-class="text-red-500"
        >
          Movies
        </router-link>

        <router-link
          to="/tv-shows"
          class="hover:text-red-500"
          active-class="text-red-500"
        >
          TV Shows
        </router-link>

        <router-link
          to="/watchlist"
          class="hover:text-red-500"
          active-class="text-red-500"
        >
          Watchlist
        </router-link>
      </div>
    </div>
  </nav>
</template>
