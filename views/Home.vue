<template>
  <div id="landing-page">
    <v-container style grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12 class="blue--text text--accent-2">
          <!-- Show all, not using component to show indivual component 
        <comp-one />
        <comp-two />
        <comp-three />
          -->

          
        </v-flex>
        <v-flex>
          <component v-bind:is="componentShow"></component>
          
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import compOne from "@/components/compOne.vue";


export default {
  name: "home",
  data() {
    return {
      componentShow: "compOne"
    };
  },
  components: {
    compOne,
  
  }
};
</script>

<style lang="scss" scoped>

.mr1 {
  color: red;
}
</style>
