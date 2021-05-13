<template>
  <div>
    <g-link :to="path" class="release-icon">
      <CloudImage
        :imageSlug="slugID"
        options="c_fill,h_200,w_200"
        :alt="'desktop wallpaper for ' + title"
        class=""
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