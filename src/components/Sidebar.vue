<template>
  <section class="location-content">
    <h1>{{ systemTitle(article) }}</h1>

    <CloudImage
      :imageSlug="article.slug"
      options="c_fill,h_675,w_1200"
      :alt="'desktop wallpaper for ' + article.title"
      class=""
    />

    <p class="release-date">Released in {{ article.releaseDate }}</p>

    <div class="content" v-html="article.content" />
  </section>
</template>

<script>
import CloudImage from "~/components/CloudImage.vue";

export default {
  props: ["article"],
  components: {
    CloudImage,
  },
  methods: {
    systemTitle(article) {
      return "macOS " + article.version + " " + article.title;
    },
  },
};
</script>

<style lang="scss">
.location-content h1 {
  font-size: 1.4em;
  margin-bottom: 0;

  @media (min-width: 1024px) {
    font-size: 2em;
  }
}

.location-content {
  background: var(--overlay);
  backdrop-filter: saturate(180%) blur(10px);

  border-radius: 10px;
  border: 1px solid white;
  box-shadow: 0 0 1rem rgba(black, 0.5);

  order: 2;
  display: flex;
  flex-direction: column;
  padding: 2rem;

  grid-column: 1 / 2;
  grid-row: 1 / 2;
  z-index: 100;

  max-height: 50vh;
  overflow-y: scroll;

  margin: 1rem;

  @media (min-width: 768px) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;

    max-height: none;

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
  }
}

p.release-date {
  margin: 1rem 0;
  font-size: 1.5em;
}

.location-content p {
  font-size: 1em;
  margin-bottom: 1em;

  @media (min-width: 1024px) {
    font-size: 1.25em;
  }
}

.location-content .cld-image {
  order: -1;
  margin: 0 0 2rem 0;
  width: 100%;
  height: auto;
  display: block;

  img {
    width: 100%;
    height: auto;
  }
}
</style>