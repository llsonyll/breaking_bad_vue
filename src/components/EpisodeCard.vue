<template>
  <div class="container flex gap-4">
    <div class="season-episode font-bold flex">
      S.{{ episode.season.trim() }} - Ep.{{ episode.episode }}
    </div>
    <div class="title flex-1">{{ episode.title }}</div>
  </div>
</template>

<script>
export default {
  name: "EpisodeCard",
  props: {
    episode: {
      type: Object,
      required: true,
    },
  },
};
</script>
