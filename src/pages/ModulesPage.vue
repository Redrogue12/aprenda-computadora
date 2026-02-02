<template>
  <div class="container">
    <h1>Módulos</h1>
    <div class="explanation-container">
      <ol>
        <li
          class="module-item"
          v-for="(module, i) in modules"
          :key="`module-${i}`"
        >
          <router-link :to="`/module/${i}/exercise/0`">
            {{ module.name }}
          </router-link>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import modules from "../assets/modules/index";

export default {
  name: "Modules-Page",
  data: () => ({
    modules,
  }),
};
</script>

<style>
.module-item {
  font-size: 20px;
  margin-bottom: 8px;
}
</style>
