<script setup>
import { RouterLink, RouterView } from 'vue-router'

import 'bootstrap/dist/js/bootstrap.bundle.min.js'
</script>

<template>
  <div class="gradient-wrapper">
    <div class="container">
      <RouterView />
    </div>
  </div>
</template>

<style lang="sass" scoped>
.gradient-wrapper
  background: linear-gradient(to bottom, #d6eaffff 0%, #ffffffff 25%)
  min-height: 250vh
</style>
