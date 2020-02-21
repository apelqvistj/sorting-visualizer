<template>
  <div id="app">
    <AlgorithmMenu />
    <Visualizer v-bind:array="array" />
  </div>
</template>

<script>
import AlgorithmMenu from './components/AlgorithmMenu.vue'
import Visualizer from './components/Visualizer.vue'

export default {
  name: 'App',
  components: {
    AlgorithmMenu,
    Visualizer
  },
  data() {
    return {
      array: [14, 56, 20, 76, 150, 255, 103, 24, 43, 65, 34, 10, 55, 56, 20, 76, 150, 255, 103, 24, 43, 65, 34, 10, 56, 20, 76, 150, 255, 103, 24, 43, 65, 34, 10]
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
    color: #2c3e50;
  }
  body {
    margin: 0;
    padding: 0;
  }
</style>
