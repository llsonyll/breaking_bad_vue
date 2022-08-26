<template>
  <div class="characters m-4">
    <h3 class="text-2xl font-bold mb-4">Characters List</h3>

    <div class="list" v-if="!error">
      <div class="loading my-10" v-if="loading">Loading...</div>
      <div class="content" v-else>
        <div class="empty" v-if="characters.length === 0">No characters</div>
        <div class="with-content" v-else>
          <div class="" v-for="char in characters">{{ char.name }}</div>
        </div>
      </div>
    </div>

    <div class="v-else">{{ error }}</div>

    <div class="pagination mt-5">
      <button
        v-on:click="handlePrevPage"
        class="disabled:opacity-50 disabled:cursor-not-allowed"
        :disabled="loading || page === 1 || error"
      >
        Prev
      </button>
      <span class="mx-6"> {{ page }} </span>
      <button
        v-on:click="handleNextPage"
        class="disabled:opacity-50 disabled:cursor-not-allowed"
        :disabled="loading || characters.length !== offset || error"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
import BreakingBadService from "../services/BreakingBadService";

export default {
  name: "Characters",
  data() {
    return {
      characters: [],
      loading: true,
      page: 1,
      offset: 10,
      error: null,
    };
  },
  created() {
    this.getCharacters(this.page);
  },
  watch: {
    page() {
      this.getCharacters(this.page);
    },
  },
  methods: {
    async getCharacters(page) {
      this.loading = true;
      this.error = null;

      try {
        const { data } = await BreakingBadService.getCharactersByPage(
          this.offset,
          (page - 1) * 10
        );
        this.characters = data;
        this.loading = false;
      } catch (error) {
        console.log(error);
        this.loading = false;
        this.error = "Error de red";
      }
    },
    handlePrevPage() {
      this.page = this.page - 1;
    },
    handleNextPage() {
      this.page = this.page + 1;
    },
  },
};
</script>
