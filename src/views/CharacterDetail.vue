<template>
  <div class="characterDetail">
    <div class="loading opacity-50" v-if="loading">Loading...</div>
    <div class="character my-8" v-else>
      <div class="name font-semibold text-2xl">{{ character.name }}</div>
      <div class="image" v-if="character.img">
        <img class="max-h-56 mx-auto my-10" :src="character.img" alt="" />
      </div>
      <div class="tags flex gap-3 my-5 justify-center flex-wrap">
        <div class="occupation" v-for="job in character.occupation">
          {{ job }}
        </div>
      </div>
      <div class="return">
        <button v-on:click="handleGoBack">Go back</button>
      </div>
    </div>
  </div>
</template>

<script>
import BreakingBadService from "../services/BreakingBadService";

export default {
  name: "CharacterDetail",
  data() {
    return {
      character: {},
      loading: true,
      error: null,
    };
  },
  created() {
    const { id } = this.$route.params;
    this.getCharacterInfo(id);
  },
  methods: {
    async getCharacterInfo(id) {
      this.character = {};
      this.loading = true;
      this.error = null;

      try {
        const {
          data: [characterFromAPI],
        } = await BreakingBadService.getCharacterById(id);
        console.log(characterFromAPI);
        this.character = characterFromAPI;
        this.loading = false;
      } catch (error) {}
    },
    handleGoBack() {
      this.$router.go(-1);
    },
  },
};
</script>
