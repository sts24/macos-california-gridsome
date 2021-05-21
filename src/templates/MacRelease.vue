<template>
  <Layout>
    <main class="app">
      <ClientOnly>
        <transition appear>
          <Map />
        </transition>
      </ClientOnly>
      <Sidebar :article="$page.macRelease" />
    </main>
  </Layout>
</template>

<script>
import { formatReleaseTitle } from "~/utilities/format.js";
import Sidebar from "~/components/Sidebar.vue";
import Map from "~/components/Map.vue";

export default {
  name: "MacRelease",
  components: {
    Sidebar,
    Map,
  },
  metaInfo() {
    return {
      title: formatReleaseTitle(
        this.$page.macRelease.title,
        this.$page.macRelease.version
      ),
    };
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