<template>
  <ClientOnly>
    <transition name="fade" appear>
      <MglMarker
        :coordinates.sync="coordinates"
        scale="1"
        :key="randomKey"
        :color="markerColor"
        @click="markerClicked(path, coordinates)"
      />
    </transition>
  </ClientOnly>
</template>

<static-query>

</static-query>


<script>
import { formatCoords } from "../utilities/format.js";

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
      if (to.path == this.path) {
        this.$emit("centerMap", this.coordinates);
      }
    },
  },
  mounted() {
    this.changeCurrentMarker(this.$route.path);
    this.$emit("centerMap", formatCoords(this.$page.macRelease.location));
  },
  methods: {
    markerClicked(path, coordinates) {
      this.$router.push(path).catch(() => {});

      this.$emit("centerMap", coordinates);
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