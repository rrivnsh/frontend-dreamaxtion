import { createRouter, createWebHistory } from "vue-router";
import DetailView from "../views/DetailView.vue";
import HomeView from "../views/HomeView.vue";
import MoviesView from "../views/MoviesView.vue";
import TVShowsView from "../views/TVShowsView.vue";
import WatchlistView from "../views/WatchlistView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/movies",
    name: "movies",
    component: MoviesView,
  },
  {
    path: "/tv-shows",
    name: "tv-shows",
    component: TVShowsView,
  },
  {
    path: "/watchlist",
    name: "watchlist",
    component: WatchlistView,
  },
  {
    path: "/detail/:type/:id",
    name: "detail",
    component: DetailView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
