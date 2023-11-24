<template>
  <div
    id="navbar"
    class="w-100"  
  >
    <router-link
      to="/"
      v-slot="{navigate}"
      custom
    >
      <span
        id="logo"
        @click="navigate"
      >
        Aprenda Computadora Paso a Paso
      </span>
    </router-link>
    <ul class="nav-items">
      <router-link
        to="/modules"
      >
        <li>Módulos</li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavBar",
}
</script>

<style scoped>
#navbar {
  height: 50px;
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
  background-color: steelblue;
  color: #fff;
  font-weight: bold;
}
#logo {
  align-self: center;
}
#logo:hover {
  cursor: pointer;
}
.nav-items {
  margin: 0;
  align-self: center;
  list-style-type: none;
}
</style>