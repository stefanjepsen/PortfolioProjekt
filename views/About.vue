<template>
  <v-container grid-list-md text-xs-center>
    <br>
    <v-layout align-center justify-center row wrap fill-height>
      <br>
      <v-flex xs12 md12 lg10 xl10>
        <h1 style="padding:50px;">Spas med space - 1. Semester projekt</h1>
        <br>
        <v-card>
          <video width="100%" controls style>
            <source src="../assets/spas.mp4" type="video/mp4">Your browser does not support HTML5 video.
          </video>

          <v-card-title primary-title></v-card-title>

          <v-card-actions>
            <v-btn
              style="width:100%; margin:auto; font-family: 'IBM Plex Mono', monospace;"
              color="succes"
              @click="show = !show"
            >
              Info
              <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-slide-y-transition>
            <v-card-text
              style="
   font-family: 'IBM Plex Mono', monospace;
"
              v-show="show"
            >Spas med space, var den førsteeksamensopgave vi skulle igennem. Emnet var var "space" og meget frit. Vi udarbejde i en gruppe, en online læringsplatform til de mindste klassetrin, som ville hjælpe underviserne i skolerne. Videoen viser en kort gennemgang.</v-card-text>
          </v-slide-y-transition>
        </v-card>
        <h1 style="padding:50px;">Infomercial obligatorisk projekt - Video</h1>
        <v-card>
          <video width="100%" controls style>
            <source src="../assets/Infomercial.mp4" type="video/mp4">Your browser does not support HTML5 video.
          </video>

          <v-card-title primary-title></v-card-title>

          <v-card-actions>
            <v-btn
              style="width:100%; margin:auto; font-family: 'IBM Plex Mono', monospace;"
              color="succes"
              @click="show2 = !show2"
            >
              Info
              <v-icon>{{ show2 ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-slide-y-transition>
            <v-card-text
              style="
   font-family: 'IBM Plex Mono', monospace;
"
              v-show="show2"
            >Vi skulle i samarbejde med en virksomhed, skrive, filme og redigere en Infomercial omkring den pågældende virksomhed. Det kom der dette resultat ud af.</v-card-text>
          </v-slide-y-transition>
        </v-card>

        <h1 style="padding:50px;">Video Cv - Første Video Projekt</h1>

        <v-card>
          <video width="100%" controls style>
            <source src="../assets/Stefan_Jepsen.mp4" type="video/mp4">Your browser does not support HTML5 video.
          </video>

          <v-card-title primary-title></v-card-title>

          <v-card-actions>
            <v-btn
              style="width:100%; margin:auto; font-family: 'IBM Plex Mono', monospace;"
              color="succes"
              @click="show3 = !show3"
            >
              Info
              <v-icon>{{ show3 ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-slide-y-transition>
            <v-card-text
              style="
   font-family: 'IBM Plex Mono', monospace;
"
              v-show="show3"
            >Mit første video projekt, hvor vi fik opgaven at skrive, filme og redigere et cv omkring os selv.</v-card-text>
          </v-slide-y-transition>
        </v-card>

        <h1 style="padding:50px;">Visit kort</h1>

        <v-card>
          <img
            src="./../assets/businesscard.png"
            style="max-width:100%;max-height:100%;"
            contain
            alt
          >
          <v-card-title primary-title></v-card-title>

          <v-card-actions>
            <v-btn
              style="width:100%; margin:auto; font-family: 'IBM Plex Mono', monospace;"
              color="succes"
              @click="show4 = !show4"
            >
              Info
              <v-icon>{{ show4 ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-slide-y-transition>
            <v-card-text
              style="
   font-family: 'IBM Plex Mono', monospace;
"
              v-show="show4"
            >Et visitkort ud af mange forsøg.</v-card-text>
          </v-slide-y-transition>
        </v-card>

        <h1 style="padding:50px;">Photoshop</h1>

        <v-card>
          <img src="./../assets/photo.png" style="max-width:100%;max-height:100%;" contain alt>
          <v-card-title primary-title></v-card-title>

          <v-card-actions>
            <v-btn
              style="width:100%; margin:auto; font-family: 'IBM Plex Mono', monospace;"
              color="succes"
              @click="show1 = !show1"
            >
              Info
              <v-icon>{{ show1 ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-slide-y-transition>
            <v-card-text
              style="
   font-family: 'IBM Plex Mono', monospace;
"
              v-show="show1"
            >Som mester i photoshop, kom der det første resultat ud af denne. Denne sektion hedder double exposure.</v-card-text>
          </v-slide-y-transition>
        </v-card>
        <br>

        <br>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    show: false,
    show1: false,
    show2: false,
    show3: false,
    show4: false
  })
};
</script>

<style lang="scss" scoped>
body {
  font-family: "IBM Plex Mono", monospace;
}
</style>