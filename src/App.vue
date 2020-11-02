<template>
  <div id="app">
    <Navbar />
    <b-container class="pt-3">
      <router-view />
    </b-container>
  </div>
</template>

<script>
export default {
  components: {
    Navbar: () =>
      import(/* webpackChunkName: "navbar" */ "./components/Navbar.vue")
  }
};
</script>

<style lang="scss"></style>
