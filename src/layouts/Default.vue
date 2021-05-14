<template>
  <div class="app-container">
    <header class="app-header">
      <div class="app-title">{{ $static.metadata.siteName }}</div>
      <div class="app-description">{{ $static.metadata.siteDescription }}</div>
    </header>
    <Navigation />
    <slot />
  </div>
</template>

<script>
import Navigation from "~/components/Navigation.vue";

export default {
  components: {
    Navigation,
  },
};
</script>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<style lang="scss">
:root {
  --aqua: rgb(0, 122, 255);
  --brown: rgba(162, 132, 94);
  --gray: rgb(142, 142, 147);
  --green: rgb(40, 205, 65);
  --indigo: rgb(88, 86, 214);
  --orange: rgb(255, 149, 0);
  --pink: rgb(255, 45, 85);
  --purple: rgb(175, 82, 222);
  --red: rgb(255, 59, 48);
  --teal: rgb(90, 200, 250);
  --yellow: rgb(255, 204, 0);

  --bg: #fff;
  --text: #000;
  --link: var(--aqua);

  --marker: var(--orange);

  --overlay: rgba(255, 255, 255, 0.8);
}

html {
  font-family: -apple-system, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

body {
  background: var(--bg);
  color: var(--text);
}

.page-error {
  display: grid;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100vw;

  text-align: center;

  a {
    color: var(--link);
  }
}

.app-container {
  display: grid;
  grid-template-rows: auto auto 1fr;
  height: 100vh;
  max-height: 100vh;

  overflow: hidden;
}

.app-header {
  text-align: center;

  padding: 1rem;
}
.app-title {
  font-size: 2em;
  font-weight: bold;
}

.app {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  position: relative;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
  }
}
</style>
