<template>
  <ClientOnly>
    <transition name="fade" appear>
      <MglMarker
        :coordinates.sync="coordinates"
        scale="1"
        :key="randomKey"
        :color="markerColor"
        anchor="bottom"
        @mouseenter="popupStatus = true"
        @mouseleave="popupStatus = false"
        @click="markerClicked(path, coordinates)"
      >
        <MglPopup
          :coordinates="coordinates"
          anchor="top"
          :showed="popupStatus"
          :closeButton="false"
          :closeOnClick="true"
        >
          <div class="popup-label">{{ popupLabel }}</div>
        </MglPopup>
      </MglMarker>
    </transition>
  </ClientOnly>
</template>

<style>
.mapboxgl-popup-tip {
  display: none;
}
.mapboxgl-map .mapboxgl-popup-content {
  padding: 0.75rem;
  border-radius: 10px;
  box-shadow: 0 0 1rem rgba(black, 0.5);

  background: var(--frost);
  border: 1px solid white;
  backdrop-filter: saturate(180%) blur(10px);
}

.popup-label {
  line-height: 1em;
  font-weight: bold;
  font-family: var(--font);
  font-size: 1rem;
}
</style>

<script>
let Vmapbox = {};

if (process.isClient) {
  Vmapbox = require("vue-mapbox");
}
export default {
  name: "MacMapMarker",
  props: ["coordinates", "path", "popupLabel"],
  components: {
    MglMarker: Vmapbox.MglMarker,
    MglPopup: Vmapbox.MglPopup,
  },
  data() {
    return {
      markerColor: "orange",
      randomKey: "",
      popupStatus: false,
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