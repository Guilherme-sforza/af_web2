<template>
  <div>
    <v-row>
      <v-col
        v-for="(data,n) in MyCards"
        :key="n"
        cols="12"
        sm="6"
        md="4"
        xs="2"
      >
        <MyCard :cardid="n" :cardTitle="data.title" :cardDescription="data.description" :cardSubtitle="data.subtitle" :cardImage="data.image"></MyCard>
        
      </v-col>
    </v-row>

    <h1></h1>

  </div>
</template>

<script>

import MyCard from '../components/MyCard'
import Store from '../store'

export default {
  name: 'Card',
  data(){
    return{
      card: Store.state.cards,
      size: Store.state.cards.length,
      titleview: Store.state.title
    }
  },

  computed:{
    MyCards(){
      return Store.state.cards
    }
  },

  components: {
    MyCard,
  },
}
</script>

