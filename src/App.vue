<template>
  <navbar />
  <div style="padding: 20px;">
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import "./assets/css/style.css";
import 'normalize.css';
import Navbar from './layout/Navbar';

export default {
  name: "App",
  components: {
    Navbar,
  }
}
</script>
