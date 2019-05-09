<template>
  <v-footer dark height="auto">
    <v-card class="flex" flat tile>
      <v-card-title class="lighten grey-1" style="font-family: IBM Plex Mono">
        <strong class="subheading">Få adgang til mig via de sociale netværk!</strong>

        <v-spacer></v-spacer>

        <v-btn light v-for="icon in icons" :key="icon" class="mx-3" icon>
          <a :href="icon.url" :target="icon.target">
            <v-icon size="24px">{{ icon.name }}</v-icon>
          </a>
        </v-btn>
      </v-card-title>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      {
        name: "fab fa-facebook",
        url: "https://www.facebook.com/stefan.jepsen.7",
        target: "_blank"
      },

      {
        name: "fab fa-linkedin",
        url: "https://www.linkedin.com/in/stefan-jepsen-97b7aa177/",
        target: "_blank"
      },
      {
        name: "fab fa-instagram",
        url: "https://www.instagram.com/stefanjepsen/",
        target: "_blank"
      }
    ]
  })
};
</script>


<style lang="scss" scoped>
.fa-facebook::before {
  color: white;
}
.fa-linkedin::before {
  color: white;
}
.fa-instagram::before {
  color: white;
}
</style>