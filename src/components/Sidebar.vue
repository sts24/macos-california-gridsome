<template>
  <section class="location-content" :style="'max-height: ' + sidebarHeight">
    <h1>{{ systemTitle(article) }}</h1>

    <CloudImage
      :imageSlug="article.slug"
      options="c_fill,h_675,w_1200"
      :alt="'desktop wallpaper for ' + article.title"
      class=""
      width="1200"
      height="675"
    />

    <p class="release-date">Released in {{ article.releaseDate }}</p>

    <div class="content" v-html="article.content" />

    <p>
      <small
        >Geographical information for indigenous nations sourced from
        <a href="https://native-land.ca/" target="_blank"
          >native-land.ca</a
        ></small
      >
    </p>
  </section>
</template>

<script>
import CloudImage from "~/components/CloudImage.vue";

export default {
  props: ["article"],
  components: {
    CloudImage,
  },
  data() {
    return {
      sidebarHeight: "auto",
    };
  },
  mounted() {
    this.updateHeight();

    window.addEventListener("resize", this.updateHeight);
  },
  updated() {
    this.updateHeight();
  },
  methods: {
    systemTitle(article) {
      return "macOS " + article.version + " " + article.title;
    },
    updateHeight() {
      const sidebar = window.document.querySelector(".location-content");
      const appHeaderHeight = window.document.querySelector(".app-header")
        .offsetHeight;
      const navHeight = window.document.querySelector(".app-nav").offsetHeight;

      const globalElementsHeight = appHeaderHeight + navHeight;

      if (window.innerWidth >= 768) {
        this.sidebarHeight =
          window.innerHeight - globalElementsHeight - 24 + "px";
      } else {
        this.sidebarHeight = window.innerHeight * 0.4 + "px";
      }
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

  border-radius: 10px 10px 0 0;
  border: 1px solid white;
  box-shadow: 0 0 1rem rgba(black, 0.5);

  order: 2;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  grid-column: 1 / 2;
  grid-row: 1 / 2;
  z-index: 100;

  overflow-y: scroll;

  position: absolute;
  bottom: 0;

  margin: 1rem 1rem 0 1rem;

  @media (min-width: 768px) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;

    position: absolute;
    right: 0;
    bottom: 0;
    padding: 1rem;
    margin: 1rem;
    border-radius: 10px;
  }

  @media (min-width: 1200px) {
    padding: 2rem;
  }
}

p.release-date {
  margin: 1rem 0;
  font-size: 1.5em;
}

.location-content p {
  font-size: 1em;
  margin-bottom: 1em;

  @media (min-width: 1200px) {
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

p small {
  font-size: 75%;
  color: #555;
}
</style>