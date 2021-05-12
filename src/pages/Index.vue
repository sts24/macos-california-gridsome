<template>
  <Layout>
    <ul>
      <li v-for="edge in $page.releases.edges" :key="edge.node.id" >
     
          <h2 v-html="edge.node.title"/>
  
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
