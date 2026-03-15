<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
import ThirdPage from '../components/ThirdPage.vue'
const handleNavigation = (event) => {
  const value = event.target.value
  
  const routes = {
    "1": "/Mobile",
    "2": "/Website",
    "3": "/Project3",
    "4": "/Project4"
  }

  if (routes[value]) {
    router.push(routes[value])
  }
}
</script>

<template>
  <div class="container-fluid" id="gradient-wrapper2">
    <div class="pt-3 row align-items-center">
      <div class="col-9">
        <RouterLink id="HomeName" class="ms-4" to="/">Thu Hường</RouterLink>
      </div>

      <div class="col-3 text-end pe-4">
        <RouterLink id="CV" to="/">CV</RouterLink>
        &nbsp;&nbsp;
        <select id="Project_List" @change="handleNavigation" class="form-options d-inline-block">
          <option value="0">Project</option>
          <option value="1">Mobile app</option>
          <option value="2">Website</option>
          <option value="3">Project 3</option>
          <option value="4">Project 4</option>
        </select>
        &nbsp;&nbsp;
        <RouterLink id="Contact" to="/">Contact</RouterLink>
      </div>
    </div>
    <ThirdPage />
  </div>
</template>

<style lang="sass">

#gradient-wrapper2
  background: linear-gradient(to bottom, #e0e3e8ff 0%, #ffffffff 15%),
  background-repeat: no-repeat
  background-position: center top
  background-size: 100% 600vh

@font-face 
  font-family: 'Seriff-regular'
  src: url('../assets/fonts/Seriff/static/SourceSerif4-regular.ttf') format('truetype')
  font-weight: 600
  font-style: normal
  font-display: swap

@font-face 
  font-family: 'Seriff-bold'
  src: url('../assets/fonts/Seriff/static/SourceSerif4-Bold.ttf') format('truetype')
  font-weight: 700
  font-style: normal
  font-display: swap

@font-face 
  font-family: 'Radio_Canada_Big-regular'
  src: url('../assets/fonts/Radio_Canada_Big/static/RadioCanadaBig-regular.ttf') format('truetype')
  font-weight: 400
  font-style: normal
  font-display: swap

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
  color: gray

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
<!-- dee2e7 -->