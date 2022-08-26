<script setup></script>

<template>
  <div class="">
    <header class="header mb-6">
      <nav class="mb-4 flex gap-8 justify-center items-center">
        <router-link
          active-class="font-semibold text-xl text-green-400 underline"
          class="text-green-700 hover:text-green-400"
          to="/"
        >
          Home
        </router-link>
        <router-link
          active-class="font-semibold text-xl text-green-400 underline"
          class="text-green-700 hover:text-green-400"
          to="/characters"
        >
          Characters
        </router-link>
        <router-link
          active-class="font-semibold text-xl text-green-400 underline"
          class="text-green-700 hover:text-green-400"
          to="/episodes"
        >
          Episodes
        </router-link>
      </nav>
      <h1>Breaking Bad API + Vue</h1>
    </header>

    <main class="content">
      <router-view> </router-view>
    </main>
  </div>
</template>

<style scoped>
/* .header {
  border: 1px solid white;
} */
.content {
  height: 50vh;
}
</style>
