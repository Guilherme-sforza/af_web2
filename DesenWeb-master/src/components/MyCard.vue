<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    {{MyCard}}
    <v-img
      src="../assets/ghost_type.png"
      height="200px"
    ></v-img>

    <v-card-title>
      {{cardTitle}}
    </v-card-title>

    <v-card-subtitle>
      {{cardSubtitle}}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="purple lighten-2"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        {{cardDescription}}
      </div>
    </v-expand-transition>
  </v-card>
  
</template>

<script>
  export default {
    props:['cardid', 'cardTitle', 'cardDescription', 'cardSubtitle'],
    data: () => ({
      show: false,
    }),
  }
</script>
