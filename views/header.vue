<template>
  <div>
    <nav>
      <v-toolbar flat app dark>
        <v-toolbar-side-icon @click="drawer = !drawer" class="grey--text"></v-toolbar-side-icon>
        <v-toolbar-title class>
          <v-btn depressed to="/" exact>
            <span>Stefan</span>
            <span
              style="
   font-family: 'IBM Plex Mono', monospace,;
"
              class="font-weight-light"
            >Jepsen</span>
          </v-btn>
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <v-btn flat style="
   font-family: 'IBM Plex Mono', monospace;
" to="/" exact>Forside</v-btn>
        <v-btn
          flat
          style="
   font-family: 'IBM Plex Mono', monospace;
"
          to="/portfolio"
          exact
        >Portfolio - Projekter</v-btn>
        <span>
          <img src="./../assets/Logo.png" style="height:3em; margin-top:10px; " contain alt>
        </span>
      </v-toolbar>

      <v-navigation-drawer app dark v-model="drawer" class="temporary">
        <v-list class="pa-1">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img
                src="https://media.licdn.com/dms/image/C5603AQG5rQJPCrfVjQ/profile-displayphoto-shrink_200_200/0?e=1562803200&v=beta&t=xZBvtrWmi_ujof8CNnbDjmwKOXjfJNaglwD0Bqm7ckE"
                style="height: 3.5em; width:3.5em; "
              >
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title style="
   font-family: 'IBM Plex Mono', monospace;
">
                Stefan
                <span
                  style="
   font-family: 'IBM Plex Mono', monospace;
"
                  class="font-weight-light"
                >Jepsen</span>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-list>
          <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-tile-action>
              <v-icon x-large justify-center class="white--text">{{ link.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title
                style="
   font-family: 'IBM Plex Mono', monospace;
"
                class="white--text"
              >{{ link.text }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "home", text: "Forside", route: "/" },
        { icon: "folder", text: "Portfolio", route: "/portfolio" }
      ],
      right: null
    };
  }
};
</script>

<style lang="scss" scoped>
</style>