<template>
  <div id="app" class="center">
    <div class="container">
      <div>

        <h1>Explorando el Teclado</h1>

        <h2>{{ currentExercise.title }}</h2>

        <div class="explanation-container">
          <div
            v-html="currentExercise.explanation"
            class="instruction-p"
          ></div>
          <img
            class="explanation-img"
            v-if="imageSrc"
            :src="`/imgs${imageSrc}`"
            alt="Partes del teclado"
          >
        </div>
        <h3 v-if="currentExercise.taskText">{{ currentExercise.taskText }}</h3>

        <input
          v-if="currentExercise.textarea"
          :value="input"
          class="task-input"
          @input="onInputChange"
          placeholder="Escriba aquí"
        >

        <p
          v-if="currentExercise.objective === 'MATCH' && isCorrect"
          class="green"
        >
          muy bien!
        </p>
        <p
          v-else-if="currentExercise.objective === 'MATCH' && !isCorrect"
          class="red"  
        >
          continue intentando
        </p>

        <div
          v-if="currentExercise.keyboard"
          class="w-100 center"
        >
          <SimpleKeyboard
            :keys="currentExercise.keys"
            @onChange="onChange"
            @onKeyPress="onKeyPress"
            :input="input"
          />
        </div>
      </div>
      <div id="exercise-btn-container">
        <button
          v-if="index > 0"
            class="exercise-btn"
          style="margin-right: 20px"
          @click="nextPage(index - 1)"
        >
          Regresar
        </button>
        <button
          :disable="index+1 >= moduleLength"
          class="exercise-btn"
          @click="nextPage(index + 1)"
        >
          Continuar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import SimpleKeyboard from "./components/SimpleKeyboard.vue";
import "./assets/css/style.css";
import 'normalize.css';
import exercises from "./assets/exercises.json";

export default {
  name: "App",
  components: {
    SimpleKeyboard
  },
  data: () => ({
    index: 0,
    input: "",
  }),
  computed: {
    moduleLength() {
      return exercises.length;
    },
    currentExercise() {
      return exercises[this.index];
    },
    imageSrc() {
      return this.currentExercise.imageSrc;
    },
    isCorrect() {
      const {objective} = this.currentExercise;
      if (objective === "FREE") return true;
      else if (objective === "MATCH") return this.input === this.currentExercise.match;
      else return true;
    },
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
    nextPage(index) {
      if (index >= this.moduleLength) return false;
      else if ((this.isCorrect || !this.currentExercise.keyboard) && index > this.index) {
        this.index = index;
        this.input = '';
      } else if (index < this.index) {
        this.index = index;
      } else return;
    },
  }
};
</script>
