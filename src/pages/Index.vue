<template>
  <Layout>
    <main class="app">
      <ClientOnly>
        <transition appear><Map /></transition
      ></ClientOnly>
    </main>
  </Layout>
</template>


<script>
import Map from "~/components/Map.vue";

export default {
  components: {
    Map,
  },
};
</script>
