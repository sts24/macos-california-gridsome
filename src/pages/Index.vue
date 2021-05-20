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
