<template>
  <div>
    <g-link :to="path" class="release-icon">
      <CloudImage
        :imageSlug="slugID"
        options="c_fill,h_200,w_200"
        :alt="'desktop wallpaper for ' + title"
        class=""
        width="200"
        height="200"
      />
      <span class="link-number">{{ version }}</span>
    </g-link>

    <g-link :to="path" class="release-title" aria-hidden="true">
      {{ title }}
    </g-link>
  </div>
</template>

<script>
import CloudImage from "~/components/CloudImage.vue";

export default {
  name: "NavItem",
  props: ["slugID", "path", "title", "version"],
  components: {
    CloudImage,
  },
};
</script>

<style lang="scss">
.release-icon {
  text-decoration: none;

  display: grid;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  margin: 0 0.5rem;

  @media (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
}

.release-icon .cld-image {
  z-index: 1;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  border-radius: 100%;
  overflow: hidden;
}

.release-icon img.cld-image {
  display: block;
  width: 100%;
  height: auto;
}

.release-icon[aria-current="page"] .cld-image {
  box-shadow: 0 0 0 4px var(--link);
}

.link-number {
  color: white;
  font-size: 1.25em;
  z-index: 2;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  text-align: center;
  text-shadow: 0 0 5px black;

  @media (min-width: 768px) {
    font-size: 1.5em;
  }
}

.release-title {
  text-decoration: none;
  display: block;
  margin-top: 0.5em;
  text-align: center;
  font-weight: bold;
  color: var(--text);
  font-size: 0.875rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
}
</style>