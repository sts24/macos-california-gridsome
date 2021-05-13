<template>
  <Layout>
    <main class="app">
      <Sidebar :article="$page.macRelease" />
    </main>
  </Layout>
</template>

<script>
import Sidebar from "~/components/Sidebar.vue";

export default {
  name: "MacRelease",
  components: {
    Sidebar,
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
    }
  }
</page-query>