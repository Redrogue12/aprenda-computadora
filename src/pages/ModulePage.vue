<template>
  <div class="container">
    <div>
      <h1>Explorando el Teclado</h1>

      <h2>{{ currentExercise?.title }}</h2>

      <div class="explanation-container">
        <div v-html="currentExercise?.explanation" class="instruction-p"></div>
        <img class="explanation-img" v-if="imageSrc" :src="`/imgs${imageSrc}`" alt="Partes del teclado">
      </div>
      <h3 v-if="currentExercise?.taskText">{{ currentExercise?.taskText }}</h3>

      <div
        v-if="currentExercise?.textarea"
        class="exercise-wrapper"
      >
        <p
          v-if="currentExercise?.objective === 'MATCH' && !isCorrect" class="red"
        >
          continue intentando
        </p>
        <img
          v-else
          class="success-img"
          v-show="currentExercise?.objective === 'MATCH' && isCorrect"
          src="/imgs/success-message-img.png"
        />
        <input
          :value="input"
          class="task-input"
          @input="onInputChange"
          placeholder="Escriba aquí"
          @keydown.tab="allowTab"
        >
      </div>

      <div v-if="currentExercise?.keyboard" class="w-100 center">
        <SimpleKeyboard :keys="currentExercise?.keys" @onChange="onChange" @onKeyPress="onKeyPress" :input="input" />
      </div>
    </div>
    <div id="exercise-btn-container">
      <router-link
        v-if="exerciseInt > 0"
        :to="`/module/${module}/exercise/${previousExercise}`"
      >
        <button
          class="exercise-btn" 
          style="margin-right: 20px"
        >
          Regresar
        </button>
      </router-link>
      <router-link
        :to="`/module/${module}/exercise/${nextExercise}`"
        v-slot="{navigate}"
        custom
      >
        <button
          class="exercise-btn"
          @click="nextPage(navigate)"
        >
          Continuar
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import SimpleKeyboard from "../components/SimpleKeyboard.vue";
import modules from "../assets/modules/index";

export default {
  name: "Module-Page",
  components: {
    SimpleKeyboard
  },
  props: {
    module: {
      type: String,
      required: true,
      default: "0"
    },
    exercise: {
      type: String,
      required: true,
      default: "0"
    }
  },
  data: () => ({
    input: "",
    modules,
  }),
  computed: {
    exerciseInt() {
      return Number(this.exercise);
    },
    currentExercise() {
      return this.modules[this.module].exercises[this.exerciseInt];
    },
    moduleLength() {
      return this.modules[this.module].exercises.length;
    },
    previousExercise() {
      return this.exerciseInt - 1;
    },
    nextExercise() {
      return this.exerciseInt + 1;
    },
    imageSrc() {
      return this.currentExercise?.imageSrc;
    },
    isCorrect() {
      const { objective } = this.currentExercise;
      if (objective === "FREE") return true;
      else if (objective === "MATCH") return this.input === this.currentExercise.match;
      else return true;
    },
  },
  created() {
    if (this.exerciseInt >= this.moduleLength) this.$router.push('/')
  },
  methods: {
    onChange(input) {
      this.input = input;
    },
    onKeyPress(button) {
      console.log("button", button);
    },
    onInputChange(input) {
      this.input = input.target.value;
    },
    nextPage(navigate) {
      if (this.isCorrect && this.exerciseInt < this.moduleLength - 1) navigate();
    },
    allowTab(e) {
      if (this.currentExercise.allowTab) this.input += "\t";
      else e.preventDefault()
    }
  }
};
</script>

<style scoped>
.exercise-wrapper {
  position: relative;
  margin-top: 40px;
}
.success-img {
  width: 300px;
  position: absolute;
  right: 0;
  top: -100px;
}
</style>