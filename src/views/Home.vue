<template>
  <div>
    <b-container>
      <b-row>
        <b-col cols="12">
          <b-carousel :interval="4000" controls indicators img-width="1360" img-height="768">
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
      <b-row></b-row>
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
        require("../assets/screenshots/installer_1.png"),
        require("../assets/screenshots/installer_2.png"),
        require("../assets/screenshots/installer_3.png"),
        require("../assets/screenshots/installer_4.png"),
        require("../assets/screenshots/installer_5.png"),
        require("../assets/screenshots/vm_1.png"),
        require("../assets/screenshots/startmenu.png"),
        require("../assets/screenshots/filemanager.png"),
        require("../assets/screenshots/settings.png")
      ]
    };
  }
};
</script>
