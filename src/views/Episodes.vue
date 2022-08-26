<template>
  <div class="episodes">
    <h3 class="text-2xl font-bold mb-4">Breaking Bad Episodes</h3>

    <div class="list" v-if="!error">
      <div class="loading my-10" v-if="loading">Loading...</div>
      <div class="content" v-else>
        <div class="empty" v-if="episodes.length === 0">No episodes</div>
        <div class="with-content" v-else>
          <EpisodeCard v-for="ep in episodes" :episode="ep" />
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
    };
  },
  created() {
    this.getEpisodes();
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
  },
};
</script>
