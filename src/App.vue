<template>
  <navbar />
  <router-view />
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
