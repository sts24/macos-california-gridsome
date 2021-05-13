<template>
  <div
    id="map"
    class="post-map-view"
    data-coords="{{ coords }}"
    data-geojson="{{ geojson }}"
  ></div>
</template>

<script>
export default {
  name: "MapJS",
  metaInfo: {
    link: [
      {
        href: "https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css",
        rel: "stylesheet",
      },
    ],
    script: [
      {
        src: "https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.js",
      },
    ],
  },
};
</script>