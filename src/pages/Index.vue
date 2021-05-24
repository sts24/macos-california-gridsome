<template>
  <Layout>
    <main class="app">
      <ClientOnly>
        <transition appear><Map /></transition
      ></ClientOnly>
    </main>
  </Layout>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
    siteUrl
    authorName
    authorTwitter
    shareImage
  }
}
</static-query>

<script>
import Map from "~/components/Map.vue";

export default {
  components: {
    Map,
  },
  metaInfo() {
    return {
      title:
        this.$static.metadata.siteName +
        " | " +
        this.$static.metadata.siteDescription,
    };
  },
};
</script>
