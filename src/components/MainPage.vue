<template>
    <center>
        <div class="Header" id="gradient-wrapper">
            <div id="shinhan">Shinhan Sol 3.0</div>
            <div id="digital">digital mobile banking</div>
            <div id="text1" class="mt-2 mb-4">From UX audit to a localized design system, streamlining financial flows for the modern user.</div>
            <div class="container"> 
                <ul class="row justify-content-center list-unstyled">
                    <li class="col-auto">• Banking</li>
                    &nbsp;&nbsp;
                    <li class="col-auto">• Mobile app</li>
                </ul>
            </div>
            <img style="width: 40%" src="@/assets/imgs/Mobile-white.png" alt="Mobile-white-2.png">
        </div>
        <div class="Content">
            <p id="text1" style="margin: 0% 29.5%" class="my-5 py-3">While <b>SOL Mobile Banking</b> has been a staple for Shinhan Bank customers, <b>version 2.0 faced several UX challenges.</b> This project marks a significant evolution: a full-scale <b>application revamp</b> that bridges the gap between robust security and intuitive design, <b>transforming user feedback</b> into a <b>high-performance banking experience.</b></p>
            <h1 id="text2">The Approach</h1>
            <img style="width: 65%;" src="@/assets/imgs/table1.png" alt="table1.png">
        </div>
        <div id="Footer" class="row text-start mt-5">
            <div class="col-6 mb-4">
                <h4>1. Discovery</h4>
                <p id="text1">Conducted UX/UI audits, stakeholder interviews, and user research</p>
                <hr style="margin-top: 2.5rem;">
            </div>
            <div class="col-6 mb-4">
                <h4>3. Solution</h4>
                <p id="text1">Developed wireframes and prototypes through collaborative ideation. Adapted the Global Design System for the local market.</p>
                <hr>
            </div>
            <div class="col-6">
                <h4>2. Define</h4>
                <p id="text1">Optimized navigation by redefining sitemaps and user flows, translating complex requirements into a structured list of features and key screens.</p>
            </div>
            <div class="col-6">
                <h4>4. Testing</h4>
                <p id="text1">Refined the user experience by conducting usability testing on final high-fidelity prototypes to validate key interactions</p>
            </div>
        </div>
    </center>
</template>

<style lang="sass" scoped>

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

#Footer
    margin: 0 17.5%
    justify-content: start
    font-size: 0.85rem

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

#digital
    font-family: 'Radio_Canada_Big-regular'
    margin-top: -1.5rem
    letter-spacing: -5%
    font-size: 3.6rem
    color: black

#shinhan
    font-family: 'Seriff-regular'
    letter-spacing: -4%
    font-size: 3.5rem
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