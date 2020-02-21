<template>
  <div id="app">
    <AlgorithmMenu />
    <Visualizer v-bind:array="array" v-bind:value="array.length" ref="visualizer" />
    <Options v-on:changeElements="changeElements" v-on:changeAlgorithm="changeAlgorithm" v-on:visualize="visualize" />
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
      array: [...Array(10)].map(() => Math.floor(Math.random() * 101)),
      algorithm: 'bubble'
    }
  },
  methods: {
    changeElements(value) {
      this.array = [...Array(value)].map(() => Math.floor(Math.random() * 101))
    },
    changeAlgorithm(algo) {
      this.algorithm = algo
    },
    visualize() {
      switch (this.algorithm) {
        case 'bubble':
          this.$refs.visualizer.bubbleSort(this.array);
          break;
        case 'merge':
          this.$refs.visualizer.mergeSort(this.array);
          break;
        case 'insert':
          this.$refs.visualizer.insertSort(this.array);
          break;
        case 'quick':
          this.$refs.visualizer.quickSort(this.array);
          break;
      }
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
