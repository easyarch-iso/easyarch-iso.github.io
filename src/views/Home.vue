<template>
  <div>
    <b-container>
      <b-row>
        <b-col cols="12">
          <b-carousel
            :interval="4000"
            controls
            indicators
            img-width="1360"
            img-height="768"
          >
            <b-carousel-slide
              v-for="(imageSrc, index) in screenshots"
              :key="index"
              :img-src="imageSrc"
            ></b-carousel-slide>
          </b-carousel>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="pt-4">
      <h1 class="text-center text-primary">EasyArch</h1>
      <h3 class="text-center">Install Arch Linux with Great Ease</h3>
      <b-row class="pt-3 justify-content-center">
        <b-button-group size="lg">
          <b-button to="/download" variant="success">
            <b-icon icon="download"></b-icon>
            Download
          </b-button>
          <b-button to="/git" variant="warning">
            <b-icon icon="gear"></b-icon>
            Source
          </b-button>
          <b-button to="/about" variant="info">
            <b-icon icon="question-diamond"></b-icon>
            About
          </b-button>
        </b-button-group>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      screenshots: [
        require("../assets/screenshots/installer_1.jpg"),
        require("../assets/screenshots/installer_2.jpg"),
        require("../assets/screenshots/installer_3.jpg"),
        require("../assets/screenshots/installer_4.jpg"),
        require("../assets/screenshots/layout_vt.jpg"),
        require("../assets/screenshots/wallpapers.jpg"),
        require("../assets/screenshots/settings.jpg"),
        require("../assets/screenshots/mac_theme.jpg"),
        require("../assets/screenshots/win10_theme.jpg"),
        require("../assets/screenshots/winxp_theme.jpg")
      ]
    };
  }
};
</script>
