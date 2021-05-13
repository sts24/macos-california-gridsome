<template>
  <Layout>
    <main class="app">
      <Map :article="$page.macRelease" />
      <Sidebar :article="$page.macRelease" />
    </main>
  </Layout>
</template>

<script>
import Sidebar from "~/components/Sidebar.vue";
import Map from "~/components/Map.vue";

export default {
  name: "MacRelease",
  components: {
    Sidebar,
    Map,
  },
};
</script>

<page-query>
  query MacRelease ($path: String!) {
    macRelease (path: $path) {
      title
      content
      version
      releaseDate
      slug
      location
    }
  }
</page-query>