<template>
  <div id="app">
    <Visualizer 
      v-bind:array="array" 
      v-bind:value="array.length" 
      v-on:run="toggleRunning"
      :key="key"
      ref="visualizer" />

    <Options 
      v-on:changeElements="changeElements" 
      v-on:changeAlgorithm="changeAlgorithm" 
      v-on:visualize="visualize" 
      v-on:reset="reset"
      ref="options" />

  </div>
</template>

<script>
import Visualizer from './components/Visualizer.vue'
import Options from './components/Options.vue'

export default {
  name: 'App',
  components: {
    Visualizer,
    Options
  },
  data() {
    return {
      array: [...Array(10)].map(() => Math.floor(Math.random() * (100 - 5 + 1) + 5)),
      algorithm: 'bubble',
      elements: 10,
      key: 0
    }
  },
  methods: {
    changeElements(value) {
      this.elements = value;
      this.reset();
    },
    changeAlgorithm(algo) {
      this.algorithm = algo
    },
    visualize() {
      this.$refs.visualizer.queue = [];
      this.toggleRunning();
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
          this.$refs.visualizer.quickSort(this.array, 0, this.array.length - 1);
          break;
        case 'select':
          this.$refs.visualizer.selectionSort(this.array);
          break;
      }
    },
    reset() {
      let elements = this.elements;
      this.array = [...Array(elements)].map(() => Math.floor(Math.random() * (100 - 5 + 1) + 5));
      this.key++;
    },
    toggleRunning() {
      this.$refs.options.isRunning = !this.$refs.options.isRunning;
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
    color: rgb(82, 153, 211);
  }
  body {
    margin: 0;
    padding: 0;
  }
</style>
