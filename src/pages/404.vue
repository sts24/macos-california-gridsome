<template>
  <Layout>
    <main class="standard-page">
      <aside class="error-message">
        <h1>Page Not Found</h1>
        <p>Are you lost? Head <g-link to="/">back to the homepage</g-link>.</p>
      </aside>
    </main>
  </Layout>
</template>

<script>
export default {
  name: "Error",
};
</script>

<style>
.standard-page {
  grid-row: 3 / 4;
  grid-column: 1 / 3;

  display: grid;
  align-items: center;
  justify-items: center;
}
</style>