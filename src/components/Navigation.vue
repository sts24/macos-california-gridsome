<template>
  <nav class="app-nav">
    <ul>
      <li v-for="edge in $static.releases.edges" :key="edge.node.id">
        <NavItem
          :slugID="edge.node.slug"
          :title="edge.node.title"
          :path="edge.node.path"
          :version="edge.node.version"
        />
      </li>
    </ul>
  </nav>
</template>

<static-query>
  query Navigation {
    releases: allMacRelease(sortBy: "releaseDate", order: ASC) {
        edges {
            node {
                id
                title
                slug
                path
                version
            }
        }
    }
}
</static-query>

<script>
import NavItem from "~/components/NavItem.vue";

export default {
  components: {
    NavItem,
  },
};
</script>

<style lang="scss">
.app-nav {
  padding: 1rem;
  overflow-x: scroll;
  z-index: 100;
  background: var(--overlay);
  backdrop-filter: saturate(180%) blur(10px);
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}

.app-nav > ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
}

.app-nav > ul > li {
  margin: 0;
  padding: 0;
}
</style>