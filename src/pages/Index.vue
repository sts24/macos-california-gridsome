<template>
  <Layout>
    <main class="app">
      <Map />
    </main>
  </Layout>
</template>


<script>
import Map from "~/components/Map.vue";

export default {
  components: {
    Map,
  },
  metaInfo: {
    title: "Hello, world!",
  },
};
</script>

<style lang="scss">
.app-container {
  display: grid;
  grid-template-rows: auto auto 1fr;
  height: 100vh;
  max-height: 100vh;

  overflow: hidden;
}

.app-header {
  text-align: center;
  font-size: 2em;
  padding: 1rem;
  font-weight: bold;
}

.app {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  position: relative;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
  }
}
</style>
