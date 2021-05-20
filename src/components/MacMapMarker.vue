<template>
  <ClientOnly>
    <transition name="fade" appear>
      <!-- <MglMarker :coordinates.sync="coordinates" scale="1" :key="path">
        <g-link :to="path" slot="marker">{{ path }}</g-link>
      </MglMarker> -->
      <MglMarker
        :coordinates.sync="coordinates"
        scale="1"
        :key="randomKey"
        :color="markerColor"
        @click="markerClicked(path)"
      />
    </transition>
  </ClientOnly>
</template>


<script>
let Vmapbox = {};

if (process.isClient) {
  Vmapbox = require("vue-mapbox");
}
export default {
  name: "MacMapMarker",
  props: ["coordinates", "path"],
  components: {
    MglMarker: Vmapbox.MglMarker,
  },
  data() {
    return {
      markerColor: "orange",
      randomKey: "",
    };
  },
  watch: {
    $route: function (to) {
      this.changeCurrentMarker(to.path);
    },
  },
  methods: {
    markerClicked(path) {
      this.$router.push(path);
    },
    changeCurrentMarker(newPath) {
      const newMarkerColor = newPath == this.path ? "blue" : "orange";
      this.markerColor = newMarkerColor;
      this.randomKey = Math.floor(Math.random() * 100 + 1);
      return true;
    },
  },
};
</script>