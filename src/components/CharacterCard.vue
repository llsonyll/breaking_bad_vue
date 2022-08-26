<template>
  <button class="character p-2" v-on:click="handleCharacterSelection">
    {{ character.name }}
  </button>
</template>

<script>
export default {
  name: "CharacterCard",
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleCharacterSelection() {
      this.$router.push({
        path: `/character/${this.character.char_id}`,
      });
    },
  },
};
</script>
