<template>
  <navbar />
  <div class="app-wrapper">
    <router-view :key="$route.fullPath" />
  </div>
  <Footer />
</template>

<script>
import "./assets/css/style.css";
import "normalize.css";
import Navbar from "./layout/Navbar.vue";
import Footer from "./layout/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
.app-wrapper {
  padding: 20px;
  min-height: calc(100vh - 100px);
  bottom: 0;
}
</style>
