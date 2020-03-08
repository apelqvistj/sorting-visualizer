<template>
  <div id="app">

    <AlgorithmMenu />

    <Visualizer 
      v-bind:array="array" 
      v-bind:value="array.length" 
      v-on:run="toggleRunning"  
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
      array: [...Array(10)].map(() => Math.floor(Math.random() * 100) + 1),
      algorithm: 'bubble',
      elements: 10
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
      switch (this.algorithm) {
        case 'bubble':
          this.$refs.visualizer.bubbleSort(this.array);
          this.toggleRunning();
          this.$refs.visualizer.bubbleVis(this.$refs.visualizer.queue, this.array.length);
          break;
        case 'merge':
          this.$refs.visualizer.mergeSort(this.array);
          this.toggleRunning();
          this.$refs.visualizer.mergeVis(this.$refs.visualizer.queue, this.$refs.visualizer.queue.length, this.array.length);
          break;
        case 'insert':
          this.$refs.visualizer.insertSort(this.array);
          this.toggleRunning();
          this.$refs.visualizer.insertVis(this.$refs.visualizer.queue, this.array.length);
          break;
        case 'quick':
          this.$refs.visualizer.quickSort(this.array, 0, this.array.length - 1);
          this.toggleRunning();
          this.$refs.visualizer.quickVis(this.$refs.visualizer.queue, this.$refs.visualizer.queue.length, this.array.length);
          break;
      }
    },
    reset() {
      this.array = [...Array(this.elements)].map(() => Math.floor(Math.random() * 100) + 1);
      this.$refs.visualizer.queue = [];
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
    color: #E09F29;
  }
  body {
    margin: 0;
    padding: 0;
  }
</style>
