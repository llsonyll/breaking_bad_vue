<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="">
    <header class="header">
      <nav>
        <router-link to="/"> Home </router-link>
        <router-link to="/characters"> Characters </router-link>
        <router-link to="/episodes"> Episodes </router-link>
        <h1>Breaking Bad API + Vue</h1>
      </nav>
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
