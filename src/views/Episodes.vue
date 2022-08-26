<template>
  <div class="episodes">
    <h3 class="text-2xl font-bold mb-4">Breaking Bad Episodes</h3>
    <div class="list" v-if="!error">
      <div class="loading my-10" v-if="loading">Loading...</div>
      <div class="content" v-else>
        <form class="searchbar my-4" @submit="handleSearch">
          <input
            class="px-3 py-1 w-full"
            type="text"
            :value="search"
            @input="(event) => (search = event.target.value)"
            placeholder="Episode number or name"
          />
        </form>

        <div class="empty" v-if="searchResults.length === 0">No episodes</div>
        <div class="with-content" v-else>
          <EpisodeCard v-for="ep in searchResults" :episode="ep" />
        </div>
      </div>
    </div>
    <div v-else>{{ error }}</div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

import BreakingBadService from "../services/BreakingBadService";

export default {
  name: "Characters",
  components: {
    EpisodeCard: defineAsyncComponent(() =>
      import("../components/EpisodeCard.vue")
    ),
  },
  data() {
    return {
      episodes: [],
      loading: true,
      error: null,
      search: "",
    };
  },
  created() {
    this.getEpisodes();
  },
  computed: {
    searchResults() {
      if (!this.search) return this.episodes;
      if (Number(this.search)) {
        const index = this.episodes.findIndex(
          (ep) => ep.episode_id === Number(this.search)
        );
        return index !== -1 ? [this.episodes[index]] : [];
      } else {
        const results = this.episodes.filter((ep) => {
          return ep.title.toLowerCase().includes(this.search);
        });
        return results;
      }
    },
  },
  methods: {
    async getEpisodes() {
      this.loading = true;
      this.error = null;

      try {
        const { data } = await BreakingBadService.getBreakingBadEpisodes();
        this.episodes = data;
        this.loading = false;
      } catch (error) {
        console.log(error);
        this.error = "Error de red";
        this.loading = false;
      }
    },
    handleSearch(e) {
      e.preventDefault();
      console.log(this.search);
    },
  },
};
</script>
