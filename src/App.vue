<template>
  <v-app>

    <v-system-bar
      height="30"
      app 
      color=purple
    >
      <v-spacer></v-spacer>
        <v-icon>mdi-wifi-strength-4</v-icon>
        <v-icon>mdi-signal-cellular-outline</v-icon>
        <v-icon>mdi-battery</v-icon>
        <span>00:00</span>
    </v-system-bar>
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">Hey Marc</v-list-item-title>
          <v-list-item-subtitle>Whats your favorite pokemon type?</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item 
          v-for="item in items" 
          :key="item.title" 
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>  
        </v-list-item>  
      </v-list>
    </v-navigation-drawer>
    



    <v-app-bar
      app
      color="purple lighten-2"
      light-blue
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />

      </div>

      <v-spacer></v-spacer>

      <v-btn>
        <span>Panel</span>
        <v-icon>mdi-view-dashboard</v-icon>
      </v-btn>

      <v-btn>
        <span>Images</span>
        <v-icon>mdi-image</v-icon>
      </v-btn>
      <v-btn>
        <span>About</span>
        <v-icon>mdi-domain</v-icon>
      </v-btn>
      
      <v-btn>
        <span>Cards</span>
        <v-icon>mdi-help-box</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>

    <v-footer
    color="primary lighten-1"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col
        class="primary lighten-2 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-row>
  </v-footer>



<v-bottom-navigation
    :value="value"
    color="primary"
  >
    <v-btn>
      <span>Recently</span>

      <v-icon>mdi-history</v-icon>
    </v-btn>

    <v-btn>
      <span>Favorites</span>

      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn>
      <span>Near Me</span>

      <v-icon>mdi-map-marker</v-icon>
    </v-btn>
  </v-bottom-navigation>
  </v-app>
</template>




<script>
export default {
  name: 'App',
  data () {
    return {
      drawer: false,
      items: [
        {title: 'Panel', icon: 'mdi-view-dashboard', to:'/'},
        {title: 'Images', icon: 'mdi-image', to:'/images'},
        {title: 'About', icon: 'mdi-domain', to:'/about'},
        {title: 'Cards', icon: 'mdi-help-box', to:'/card'},
      ],
      right: null,
    }
  },
};
</script>
