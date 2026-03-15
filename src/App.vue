<script setup>
import { RouterView } from 'vue-router'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
</script>

<template>
  <RouterView />
</template>

<style lang="sass">
html, body
  height: 100%
  margin: 0
  padding: 0
  /* Apply the hiding logic directly here */
  scrollbar-width: none // Firefox
  -ms-overflow-style: none // IE/Edge
  scrollbar-gutter: consumed !important // This tells the browser NOT to reserve space

  &::-webkit-scrollbar
    display: none // Chrome, Safari, Opera

</style>