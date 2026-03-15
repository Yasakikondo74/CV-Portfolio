<template>
    <center >
        <div class="Header pt-5">
            <div id="Techcombank">Techcombank</div>
            <div id="business">business onboarding</div>
            <div id="text1" class="mt-2 mb-4">Optimizing the digital gateway for SMEs by minimizing steps and maximizing speed in the origination process.</div>
            <div class="container"> 
                <ul class="row justify-content-center list-unstyled">
                    <li class="col-auto">• Banking</li>
                    &nbsp;&nbsp;
                    <li class="col-auto"><RouterLink to="/Mobile" id="MobileAppLink">• Website</RouterLink></li>
                </ul>
            </div>
            <img style="width: 50%" src="@/assets/imgs/laptop1.png" alt="Mobile_white.png">
        </div>
        <div class="Content">
            <p id="text1" style="margin: 0% 30.5%" class="my-5 py-3">Digital onboarding for business customers is often a hurdle of complexity. In this <b>Techcombank Origination</b> project, I tackled this challenge by 
                <br><b>re-engineering the registration process.</b> By cutting down unnecessary screens and refining the UX, I created <b>a seamless entry point</b> that empowers Micro-SMEs and SMEs to <b>start their banking journey</b> with zero friction.</p>
            <h1 id="text2">The Approach</h1>
            <img style="width: 45%;" src="@/assets/imgs/table1.png" alt="table1.png">
        </div>
    </center>
</template>
<style lang="sass">

#MobileAppLink
  color: white
  text-decoration: none

#MobileAppLink:hover
  color: gray

#text1
    font-family: 'Seriff-regular'
    color: black

#text1 b
    font-family: 'Seriff-bold'
    color: black
    font-weight: 600

#text2
    font-family: 'Radio_Canada_Big-regular'
    color: black

#business
    font-family: 'Radio_Canada_Big-regular'
    margin-top: -1.5rem
    letter-spacing: -5%
    font-size: 4.6rem
    color: black

#Techcombank
    font-family: 'Seriff-regular'
    letter-spacing: -4%
    font-size: 4.5rem
    color: black

.col-auto
    background-color: black
    color: white
    padding: 0.5rem 1rem

img
    height: auto

h4
    font-family: 'Radio_Canada_Big-regular'
    color: black
</style>