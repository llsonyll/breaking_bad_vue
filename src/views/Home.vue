<template>
  <div class="home">
    <Quote :quote="quote" />
    <br />
    <button v-on:click="setRandomQuote" :disabled="!quote.text">
      New Quote
    </button>
  </div>
</template>

<script>
import { watchEffect, defineAsyncComponent } from "vue";
import BreakingBadService from "../services/BreakingBadService.js";

export default {
  name: "Home",
  components: {
    Quote: defineAsyncComponent(() => import("../components/Quote.vue")),
  },
  data() {
    return {
      quote: {
        text: "",
        author: "",
      },
    };
  },
  created() {
    watchEffect(() => {
      this.setRandomQuote();
    });
  },
  methods: {
    setRandomQuote() {
      // Reset initial state
      this.quote = {
        text: "",
        author: "",
      };

      // Axios Call
      BreakingBadService.getRandomQuote()
        .then(({ data }) => {
          const { author, quote, quote_id, series } = data[0];
          this.quote = {
            text: `Quote ${quote_id}: ${quote}`,
            author,
          };
        })
        .catch((error) => {
          console.log(error);
          this.quoute = {
            text: "Error en la conexion de red",
            author: "",
          };
        });
    },
  },
};
</script>
