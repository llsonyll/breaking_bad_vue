<template>
  <div class="quote">
    <h5>Random Quote</h5>
    <div class="quote-loading" v-if="!quote.text">Loading...</div>
    <div class="quote-content" v-else>
      <div class="text">
        {{ quote.text }}
      </div>
      <div class="author">
        {{ quote.author }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Quote",
  props: {
    quote: {
      type: Object,
      required: true,
    },
  },
};
</script>
