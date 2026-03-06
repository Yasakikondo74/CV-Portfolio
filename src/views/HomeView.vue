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
  <main class="snap-wrapper">
    <MainPage class="snap-section" />
    
    <div 
      ref="secondPageRef" 
      class="snap-section reveal-container"
      :class="revealState" 
    >
      <SecondPage />
    </div>
  </main>
</template>

<style lang="sass" scoped>
.snap-wrapper
  height: 100vh
  overflow-y: auto
  scroll-snap-type: y proximity
  scroll-behavior: smooth
  &::-webkit-scrollbar
    display: none
  scrollbar-width: none
  -ms-overflow-style: none

.snap-section
  scroll-snap-align: start
  min-height: 100vh 
  width: 100%
  overflow: visible 

.reveal-container
  opacity: 0
  transition: opacity 1s cubic-bezier(0.22, 1, 0.36, 1), transform 1s cubic-bezier(0.22, 1, 0.36, 1)
  pointer-events: none 

  &.visible
    opacity: 1
    transform: translateY(0) 
    pointer-events: auto 

  &.below
    opacity: 0
    transform: translateY(100px) 
</style>