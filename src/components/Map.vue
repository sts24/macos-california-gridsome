<template>
  <section class="map-area">
    <ClientOnly>
      <MglMap
        ref="calMap"
        :accessToken="accessToken"
        :mapStyle="mapStyle"
        :center="coords"
        :zoom="zoom"
      >
        <MglMarker
          :coordinates="formatCoords(marker.node.location)"
          scale="1"
          :color="isCurrentMarker(marker.node.slug)"
          @click="markerClicked(marker.node.path)"
          v-for="(marker, index) in allLocations"
          :key="index"
        />
      </MglMap>
    </ClientOnly>
  </section>
</template>

<script>
import { MglMap, MglMarker } from "vue-mapbox";

export default {
  components: {
    MglMap,
    MglMarker,
  },
  name: "Map",
  props: ["article"],
  data() {
    return {
      accessToken:
        "pk.eyJ1Ijoic3RzMjQiLCJhIjoiOVB0MlNrbyJ9.aIGsCG9-ISYzL-jNTaz5cg",
      mapStyle: "mapbox://styles/mapbox/outdoors-v11",
      coords: [-119.44944, 37.16611], // defaults to center of california
      zoom: 5,
      allLocations: [],
    };
  },
  mounted() {
    this.allLocations = this.$static.allLocations.edges;
  },
  methods: {
    formatCoords(data) {
      const coordArray = data.split(",");
      const newCoords = [coordArray[1], coordArray[0]];
      return newCoords;
    },
    isCurrentMarker(markerSlug) {
      const markerColor =
        markerSlug == this.$page.macRelease.slug ? "blue" : "orange";
      return markerColor;
    },
    markerClicked(path) {
      this.$router.push(path);
    },
  },
  watch: {
    article(newData, oldData) {
      this.coords = this.formatCoords(newData.location);
      this.zoom = 7;

      //const asyncActions = this.$refs.calMap.actions;

      // const newParams = this.$refs.calMap.flyTo({
      // 	center: this.coords,
      // 	zoom: 7,
      // 	speed: 1
      // })
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
            }
        }
    }
}
</static-query>


<style lang="scss">
.map-area {
  order: 1;
  background: var(--gray);

  grid-column: 1 / 3;
  grid-row: 1 / 2;
}

.map-marker {
  cursor: pointer;
}
#map {
  width: 100%;
  height: 100%;
}
</style>