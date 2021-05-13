<template>
  <img
    :src="getImageURL"
    :alt="alt"
    class="cld-image"
    :cssClass="cssClass"
    loading="lazy"
  />
</template>

<script>
export default {
  name: "CloudImage",
  props: ["imageSlug", "options", "alt", "cssClass"],
  data() {
    return {
      allImages: [],
    };
  },
  mounted() {
    this.allImages = this.$static.images.edges;
  },
  computed: {
    getImageURL() {
      let returnData = "";
      this.allImages.forEach((image) => {
        if (image.node.public_id == "macos-california/" + this.imageSlug) {
          const newURL =
            "https://res.cloudinary.com/" +
            process.env.GRIDSOME_CLOUD_NAME +
            "/image/upload/" +
            this.options +
            "/v" +
            image.node.version +
            "/" +
            process.env.GRIDSOME_CLOUD_FOLDER +
            "/" +
            this.imageSlug;

          returnData = newURL;
        }
      });
      return returnData;
    },
  },
};
</script>

<static-query>
query ImageData {
    images: allCldMedia {
        edges {
            node {
                secure_url
                public_id
                asset_id
                url
                id
                version
            }
        }
    }
}

</static-query>