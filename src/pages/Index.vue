<template>
  <Layout>
    <ul>
      <li v-for="edge in $page.releases.edges" :key="edge.node.id" >
     
        <g-link :to="edge.node.slug">
          <h2 v-html="edge.node.title"/>
        </g-link>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
  query {
    releases: allMacRelease {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
