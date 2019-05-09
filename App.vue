<template>
  <v-app>
    <v-content>
      <router-view/>
    </v-content>
    <div>
      <portfolio-header/>
      <portfolio-content/>
      <portfolio-footer/>
    
    </div>
  </v-app>
</template>

<script>
import header from "./views/header.vue";
import content from "./views/header.vue";
import footer from "./views/footer.vue";

export default {
  components: {
    portfolioHeader: header,
    portfoliocontent: content,
    portfolioFooter: footer,
  },
  data() {
    return {
     
    };
  }
};
</script>
<style>
h1 {
  font-family: 'IBM Plex Mono', monospace;
}
h2 {
  font-family: 'IBM Plex Mono', monospace;
}
h3 {
  font-family: 'IBM Plex Mono', monospace;
}
h4 {
  font-family: 'IBM Plex Mono', monospace;
}
h5 {
  font-family: 'IBM Plex Mono', monospace;
}

p {
  
  font-family: 'IBM Plex Mono', monospace;

}



</style>
