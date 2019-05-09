<template>
  <v-container>
    <v-layout align-center justify-center row fill-height>
      <v-flex xs12 md12 lg10 xl10>
        <h1 style="padding:50px; font-size:50px; ">Hvem er denne Stefan?</h1>
        <p>Find ud af mere ved at se videoen.</p>
        <video width="100%" controls style>
          <source src="../assets/Stefan_Jepsen.mp4" type="video/mp4">Your browser does not support HTML5 video.
        </video>

        <br>

        <h1 style="padding-top: 50px;">Hvem er jeg så?</h1>

        <br>

        <img
          class="kage"
          src="../assets/Developer.gif"
          style=" overflow:hidden; position:relative; max-width: 100%; height:auto;"
          contain
          alt
        >

        <vue-typed-js
          style="padding:20px;"
          :strings="['seje', 'produktive', 'spørgende', 'snakkende', 'sjove']"
          :loop="true"
          @onComplete="doSmth()"
        >
          <h2>
            Stefan er den mest
            <span class="typing"></span> MultimedieDesigner
          </h2>
        </vue-typed-js>

        <v-layout justify-center row fill-height>
          <v-flex xs12 md12 lg10 xl10 wrap overflow:hidden;>
            <br>
            <div>
              <p style="overflow:hidden">
                Jeg er en højt motiveret multimediedesigner studerende. Jeg kommer fra en baggrund i detailbranchen, hvor jeg har lært at sælge andre og lytte til de behov som der skal dækkes. Jeg elsker at problemknuse, og finde vejen frem til målet. Jeg går efter de høje standarder og ikke at springe over hvor gærdet er lavest. Jeg blomstrer i stressede situationer, hvor hovedet skal holdes koldt når det gælder. Jeg er meget fleksibel, og giver altid en ekstra hånd hvor der end er brug for den. Jeg bidrager til et venligt arbejdsmiljø som ikke mindst jeg kan lide at færdiges i, men ikke mindst mine kollegaer. Jeg kommer med højt humør og altid et smil på læben. Jeg er ikke en quitter! Jeg er nu igang med andet semester på multimediedesigner uddannelsen. Men mit mål er at fortsætte videre på Pba-Web som webudvikler.
                <br>
                <br>Du kan læse mere om mig, og hvad jeg har lavet i mit CV herunder.
              </p>
            </div>

            <v-btn
              style=" background-color: #3c3c3c;    
   font-family: 'IBM Plex Mono', monospace;
"
            >
              <a
                href="https://www.pdfhost.net/index.php?Action=Download&File=05a4487c75d65de87055ccdb36f58ed0"
                style="color:white; text-decoration: none;"
                target="_blank"
                class="pdf download"
                download="CV.pdf"
              >Hent cv.Pdf</a>
            </v-btn>
          </v-flex>
        </v-layout>
        <br>
        <br>

        <v-container>
          <br>
          <br>

          <h2 style="padding:20px;">Adobe Programmer</h2>

          <H3>Photoshop</H3>
          <v-progress-linear color="grey darken-4" height="20" value="60"></v-progress-linear>
          <H3>inDesign</H3>
          <v-progress-linear color="grey darken-1" height="20" value="40"></v-progress-linear>
          <H3>Illustrator</H3>
          <v-progress-linear color="grey darken-4" height="20" value="60"></v-progress-linear>
          <H3>Premiere Pro</H3>
          <v-progress-linear color="grey darken-1" height="20" value="65"></v-progress-linear>
          <br>
          <br>
          <br>
          <br>
          <h2 style="padding:20px;">CMS systemer</h2>
          <H3>Html5</H3>

          <v-progress-linear color="grey darken-4" height="20" value="90"></v-progress-linear>
          <H3>Css</H3>
          <v-progress-linear color="grey darken-1" height="20" value="85"></v-progress-linear>
          <H3>VueJs</H3>
          <v-progress-linear color="grey darken-4" height="20" value="70"></v-progress-linear>
          <H3>Wordpress</H3>
          <v-progress-linear color="grey darken-1" height="20" value="65"></v-progress-linear>
          <br>
          <br>
          <v-btn
            class="pulse-button"
            large
            style="padding:20px;"
            flat
            to="/portfolio"
            exact
          >Projekter</v-btn>
          <br>
          <br>
          <br>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      showOne: true,
      showTwo: true,
      showThree: true
    };
  }
};
</script>

<style lang="scss" scoped>
.pulse-button {
  padding: 0 100px 0 100px;
  position: relative;
  max-width: 100%;
  height: 100px;
  border: none;
  box-shadow: 0 0 0 0 rgba(60, 60, 60, 0.7);
  background-color: #3c3c3c;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  color: white;

  font-family: "IBM Plex Mono", monospace;

  font-size: 3em;
  -webkit-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  -moz-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  -ms-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
}
.pulse-button:hover {
  -webkit-animation: none;
  -moz-animation: none;
  -ms-animation: none;
  animation: none;
}

@-webkit-keyframes pulse {
  to {
    box-shadow: 0 0 0 45px rgba(232, 76, 61, 0);
  }
}
@-moz-keyframes pulse {
  to {
    box-shadow: 0 0 0 45px rgba(232, 76, 61, 0);
  }
}
@-ms-keyframes pulse {
  to {
    box-shadow: 0 0 0 45px rgba(232, 76, 61, 0);
  }
}
@keyframes pulse {
  to {
    box-shadow: 0 0 0 45px rgba(232, 76, 61, 0);
  }
}

.typed-element {
  justify-content: center;
}

.kage {
  animation-name: flicker-1;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes example {
  0% {
    left: -700px;
    top: 0px;
  }
  25% {
    left: -350px;
    top: 0px;
  }
  50% {
    left: 0px;
    top: 0px;
  }
  75% {
    left: 350px;
    top: 0px;
  }
  100% {
    left: 700px;
    top: 0px;
  }
}

@-webkit-keyframes flicker-1 {
  0%,
  100% {
    opacity: 1;
  }
  41.99% {
    opacity: 1;
  }
  42% {
    opacity: 0;
  }
  43% {
    opacity: 0;
  }
  43.01% {
    opacity: 1;
  }
  47.99% {
    opacity: 1;
  }
  48% {
    opacity: 0;
  }
  49% {
    opacity: 0;
  }
  49.01% {
    opacity: 1;
  }
}
@keyframes flicker-1 {
  0%,
  100% {
    opacity: 1;
  }
  41.99% {
    opacity: 1;
  }
  42% {
    opacity: 0;
  }
  43% {
    opacity: 0;
  }
  43.01% {
    opacity: 1;
  }
  47.99% {
    opacity: 1;
  }
  48% {
    opacity: 0;
  }
  49% {
    opacity: 0;
  }
  49.01% {
    opacity: 1;
  }
}
</style>