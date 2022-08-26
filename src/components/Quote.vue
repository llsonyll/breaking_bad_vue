<template>
  <div class="quote">
    <h5 class="my-6 font-semibold">Random Quote</h5>
    <div class="quote-loading opacity-50" v-if="!quote.text">Loading...</div>
    <div class="quote-content" v-else>
      <div class="text">
        {{ quote.text }}
      </div>
      <div class="author font-bold text-sm text-green-600">
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
