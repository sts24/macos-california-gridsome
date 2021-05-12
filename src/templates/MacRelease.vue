<template>
    <Layout>
    <div class="article">
      <h1>{{ $page.macRelease.title }}</h1>
    </div>
  </Layout>
</template>

<page-query>
  query MacRelease ($path: String!) {
    macRelease (path: $path) {
      title
    }
  }
</page-query>