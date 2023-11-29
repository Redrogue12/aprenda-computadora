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
        to="/"
        v-slot="{navigate}"
        custom
      >
        <li
          class="nav-item"
          @click="navigate"
        >
          Inicio
        </li>
      </router-link>
      <router-link
        to="/about"
        v-slot="{navigate}"
        custom
      >
        <li
          class="nav-item"
          @click="navigate"
        >
          Sobre Mí
        </li>
      </router-link>
      <router-link
        to="/modules"
        v-slot="{navigate}"
        custom
      >
        <li
          class="nav-item"
          @click="navigate"
        >
          Módulos
        </li>
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
  display: flex;
  white-space: nowrap;
}
.nav-item {
  margin-right: 12px;
}
.nav-item:hover {
  cursor: pointer;
  text-decoration: underline;
}

@media screen and (max-width: 480px) {
  #navbar {
    height: 80px
  }
}
</style>