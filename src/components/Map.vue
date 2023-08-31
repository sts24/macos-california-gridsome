<template>
  <section class="map-area">
    <MglMap
      ref="calMap"
      :accessToken="accessToken"
      :mapStyle="mapStyle"
      :center="coords"
      :zoom="zoom"
    >
      <MacMapMarker
        v-for="marker in allLocations"
        :key="marker.node.slug"
        :coordinates="formatCoords(marker.node.location)"
        :path="marker.node.path"
        :popupLabel="marker.node.version + ' ' + marker.node.title"
        @centerMap="centerMap"
      />
    </MglMap>
  </section>
</template>

<script>
import { formatCoords } from "../utilities/format.js";
import MacMapMarker from "~/components/MacMapMarker.vue";

let Vmapbox = {};

if (process.isClient) {
  Vmapbox = require("vue-mapbox");
}

export default {
  components: {
    MacMapMarker,
    MglMap: Vmapbox.MglMap,
  },
  name: "Map",
  data() {
    return {
      accessToken:
        "pk.eyJ1Ijoic3RzMjQiLCJhIjoiOVB0MlNrbyJ9.aIGsCG9-ISYzL-jNTaz5cg",
      mapStyle: "mapbox://styles/mapbox/satellite-streets-v11",
      coords: [-119.44944, 37.16611], // defaults to center of california
      zoom: 5,
      allLocations: [],
    };
  },
  mounted() {
    if (process.isClient) {
      this.allLocations = this.$static.allLocations.edges;

      if (this.$page !== null) {
        this.zoom = 7;
        this.coords = formatCoords(this.$page.macRelease.location);
      }
    }
  },
  methods: {
    centerMap(newCoords) {
      this.coords = newCoords;
    },
    formatCoords,
  },
  watch: {
    $route: function () {
      this.zoom = 7;
    },
  },
  metaInfo: {
    link: [
      {
        href: "https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.css",
        rel: "stylesheet",
      },
    ],
  },
};
</script>

<static-query>
query AllLocations {
    allLocations: allMacRelease {
        edges {
            node {
                id
                title
                slug
                path
                location
                version
            }
        }
    }
}
</static-query>


<style>
.map-area {
  order: 1;
  background: var(--gray);

  grid-column: 1 / 3;
  grid-row: 1 / 2;
}

.mapboxgl-marker {
  cursor: pointer;
}
#map {
  width: 100%;
  height: 100%;
}
</style>