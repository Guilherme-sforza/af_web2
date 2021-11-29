<template>
  <div class="home">
    <Gallery v-bind:images="images" />
  </div>
</template>

<script>
// @ is an alias to /src
import Gallery from "@/Gallery.vue";

export default {
  data() {
    return {
      images: [
        { id: 1, imgSrc: require("../assets/094.png") },
        { id: 2, imgSrc: require("../assets/200.png") },
        { id: 3, imgSrc: require("../assets/354.png") },
        { id: 4, imgSrc: require("../assets/477.png") },
        { id: 5, imgSrc: require("../assets/623.png") },
        { id: 5, imgSrc: require("../assets/681.png") }
      ]
    };
  },
  components: {
    Gallery
  }
};
</script>
