<script setup>
import MainPage from '../components/Welcome.vue'
</script>

<template>
  <main>
    <div class="pt-3 row">
      <div class="col-9">
        <RouterLink id="HomeName" class="ms-4" to="/">Thu Hường</RouterLink>
      </div>
      <div class="col-3">
        <RouterLink id="CV" to="/TheWelcome">CV</RouterLink>
        &nbsp;&nbsp;
        <select id="Project_List" class="form-options">
          <option value="0">Project</option>
          <option value="1">Project 1</option>
          <option value="2">Project 2</option>
          <option value="3">Project 3</option>
          <option value="4">Project 4</option>
        </select>
        &nbsp;&nbsp;
        <RouterLink id="Contact" to="/">Contact</RouterLink>
      </div>
    </div>
    <MainPage />
  </main>
</template>

<style lang="sass" scoped>

@font-face 
  font-family: 'SpectralSC-SemiBold'
  src: url('../assets/fonts/SpectralSC/SpectralSC-SemiBold.ttf') format('truetype')
  font-weight: 600
  font-style: normal
  font-display: swap

@font-face 
  font-family: 'SFPRODISPLAY-regular'
  src: url('../assets/fonts/SFPRODISPLAY/SFPRODISPLAYREGULAR.OTF') format('woff2')
  font-weight: 600
  font-style: normal
  font-display: swap

#HomeName
  font-family: 'SpectralSC-SemiBold'
  font-size: 2rem
  text-decoration: none
  color: black

#HomeName:hover
  font-family: 'SpectralSC-SemiBold'
  color: cyan

#CV
  font-family: 'SFPRODISPLAY-regular'
  font-size: 1.25rem
  font-weight: 300
  text-decoration: none
  color: black

#Project_List
  font-family: 'SFPRODISPLAY-regular'
  font-size: 1.25rem
  text-decoration: none
  color: white
  background-color: black
  padding: 0.1rem 0.25rem

#Contact
  font-family: 'SFPRODISPLAY-regular'
  font-size: 1.25rem
  text-decoration: none
  color: black
</style>