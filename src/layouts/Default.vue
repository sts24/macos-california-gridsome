<template>
  <div class="app-container">
    <header class="app-header">
      <div class="app-title">{{ $static.metadata.siteName }}</div>
      <div class="app-description">
        {{ $static.metadata.siteDescription }} by
        <a href="https://www.smithscott.net" target="_blank">Scott Smith</a>
      </div>
    </header>
    <Navigation />
    <slot />
  </div>
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
import Navigation from "~/components/Navigation.vue";

export default {
  components: {
    Navigation,
  },
  metaInfo() {
    return {
      meta: [
        {
          key: "og:title",
          name: "og:title",
          content: this.$static.metadata.siteName,
        },
        { key: "og:type", name: "og:type", content: "website" },
        {
          key: "og:url",
          name: "og:url",
          content: this.$static.metadata.siteUrl,
        },
        {
          key: "og:image",
          name: "og:image",
          content:
            this.$static.metadata.siteUrl + this.$static.metadata.shareImage,
        },
        {
          key: "og:image:width",
          name: "og:image:width",
          content: "1200",
        },
        {
          key: "og:image:height",
          name: "og:image:height",
          content: "630",
        },
        {
          key: "og:description",
          name: "og:description",
          content: this.$static.metadata.siteDescription,
        },
        {
          key: "og:site_name",
          name: "og:site_name",
          content: this.$static.metadata.siteName,
        },

        {
          key: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          key: "twitter:site",
          name: "twitter:site",
          content: this.$static.metadata.authorTwitter,
        },
        {
          key: "twitter:title",
          name: "twitter:title",
          content: this.$static.metadata.siteName,
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: this.$static.metadata.siteDescription,
        },
        {
          key: "twitter:creator",
          name: "twitter:creator",
          content: this.$static.metadata.authorTwitter,
        },
        {
          key: "twitter:image",
          name: "twitter:image",
          content:
            this.$static.metadata.siteUrl + this.$static.metadata.shareImage,
        },
      ],
    };
  },
};
</script>

<style>
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
    --frost: rgba(255, 255, 255, 0.8);
    --subtle-text: rgba(black, 0.8);
    --font: -apple-system, "Helvetica Neue", Arial, sans-serif;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --frost: rgba(0, 0, 0, 0.8);
      --bg: #000;
      --text: #fff;
      --subtle-text: rgba(255, 255, 255, 0.8);
    }
  }
  html {
    font-family: var(--font);
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
  }
  .page-error a {
    color: var(--link);
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
    z-index: 100;
    padding: 1rem;
    background: var(--frost);
    backdrop-filter: saturate(180%) blur(10px);
    grid-column: 1/2;
    grid-row: 1/2;
  }

  .app-title {
    font-size: 1.5rem;
    font-weight: bold;
  }
  @media (min-width: 768px) {
    .app-title {
      font-size: 2rem;
    }
  }

  .app-description {
    font-size: 0.875rem;
  }
  .app-description a {
    color: var(--link);
  }
  @media (min-width: 768px) {
    .app-description {
      font-size: 1rem;
    }
  }

  .app {
    grid-column: 1/2;
    grid-row: 1/4;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    position: relative;
  }
  @media (min-width: 768px) {
    .app {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 1024px) {
    .app {
      grid-template-columns: 2fr 1fr;
    }
  }
</style>
