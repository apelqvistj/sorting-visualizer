<template>
  <div id="app">
    <AlgorithmMenu />
    <Visualizer v-bind:array="array" />
    <Options v-on:changeElements="changeElements" />
  </div>
</template>

<script>
import AlgorithmMenu from './components/AlgorithmMenu.vue'
import Visualizer from './components/Visualizer.vue'
import Options from './components/Options.vue'

export default {
  name: 'App',
  components: {
    AlgorithmMenu,
    Visualizer,
    Options
  },
  data() {
    return {
      array: [...Array(10)].map(() => Math.floor(Math.random() * 101))
    }
  },
  methods: {
    changeElements(value) {
      this.array = [...Array(value)].map(() => Math.floor(Math.random() * 101))
    }
  }

}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    color: #E09F29;
  }
  body {
    margin: 0;
    padding: 0;
  }
</style>
