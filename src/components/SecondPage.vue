<script setup>
</script>

<template>
    <center>
        <div class="Header">
            <div id="Discovery">Discovery</div>
            <div id="Decoding">Decoding User Needs</div>
            <div id="text1" style="margin-bottom: 2rem;">Analyzing the "Why" behind the "What" to ensure every design decision is backed by real-world user data</div>
        </div>
        <div class="Content">
            <div class="row">
                <img class="col-6" src="@/assets/imgs/image 2.png" alt="Second Page Image 1">
                <img class="col-6" src="@/assets/imgs/image 3.png" alt="Second Page Image 2">
            </div>
            <div class="row" id="row1">
                <center>
                    <img class="col-3" src="@/assets/imgs/mobile-white-1.png" alt="mobile-white-1.png">
                    <img class="col-3" src="@/assets/imgs/mobile-white-2.png" alt="mobile-white-2.png">
                    <img class="col-3" src="@/assets/imgs/mobile-white-3.png" alt="mobile-white-3.png">
                    <img class="col-3" src="@/assets/imgs/mobile-white-4.png" alt="mobile-white-4.png">
                </center>
            </div>
            <div id="text1" style="font-size: 3.5rem; margin-top: 10rem;">A New Look</div>
            <div id="text2" style="font-size: 3.6rem; margin-top: -1.6rem;">For Modern Banking</div>
            <div id="text1">Modernizing SOL’s visual identity with a refined aesthetic that balances Shinhan’s heritage with cutting-edge digital trends.</div>
            <div class="row" id="row2">
                <center>
                    <img class="col-4" src="@/assets/imgs/mobile-white-5.png" alt="mobile-white-5.png">
                    <img class="col-4" src="@/assets/imgs/mobile-white-6.png" alt="mobile-white-6.png">
                    <img class="col-4" src="@/assets/imgs/mobile-white-7.png" alt="mobile-white-7.png">
                </center>
            </div>
        </div>
    </center>
    <br class="mb-5">
</template>

<style lang="sass" scoped>
@font-face 
  font-family: 'Seriff-regular'
  src: url('../assets/fonts/Seriff/static/SourceSerif4-Regular.ttf') format('truetype')
  font-weight: 400
  font-style: normal
  font-display: swap

@font-face 
  font-family: 'Radio_Canada_Big-regular'
  src: url('../assets/fonts/Radio_Canada_Big/static/RadioCanadaBig-regular.ttf') format('truetype')
  font-weight: 400
  font-style: normal
  font-display: swap

#row1
    margin-top: 10rem
    img
        width: 15%
        height: auto

#row2
    margin-top: 2rem
    img
        width: 15%
        height: auto

#Discovery
    font-family: 'Seriff-regular'
    color: black
    font-size: 3.5rem

#Decoding
    font-family: 'Radio_Canada_Big-regular'
    color: black
    font-size: 3.5rem
    margin-top: -1.5rem

#text1
    font-family: 'Seriff-regular'
    color: black

#text2
    font-family: 'Radio_Canada_Big-regular'
    color: black

</style>