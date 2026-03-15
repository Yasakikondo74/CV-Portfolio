<script setup>
import { ref, onMounted } from 'vue'
import MainPage from '../components/MainPage.vue'
import SecondPage from '../components/SecondPage.vue'

const secondPageRef = ref(null)
const revealState = ref('below') 

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const isEnteringFromBottom = entry.boundingClientRect.top > entry.rootBounds.top;
      const isExitingToBottom = entry.boundingClientRect.top > entry.rootBounds.top;

      if (entry.isIntersecting) {
        revealState.value = 'visible'
      } else {
        if (isExitingToBottom) {
          revealState.value = 'below'
        } else {
          revealState.value = 'visible' 
        }
      }
    })
  }, {
    threshold: [0.0, 0.2] 
  })

  if (secondPageRef.value) {
    observer.observe(secondPageRef.value.$el || secondPageRef.value)
  }
})
</script>

<template>
  <main>
    <MainPage />
    <br class="mb-5">
    <div class="gradient-wrapper" >
      <SecondPage />
    </div>
  </main>
</template>

<style lang="sass">
</style>