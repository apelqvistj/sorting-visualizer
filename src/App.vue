<template>
  <div id="app">
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
import Visualizer from './components/Visualizer.vue'
import Options from './components/Options.vue'

export default {
  name: 'App',
  components: {
    Visualizer,
    Options
  },
  mounted() {
    this.changeElements(10);
  },
  data() {
    return {
      array: [...Array(10)].map(() => Math.floor(Math.random() * (100 - 5 + 1) + 5)),
      algorithm: 'bubble',
      elements: 10
    }
  },
  methods: {
    changeElements(value) {
      this.elements = value;
      this.reset();
      this.toggleValues();
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
      }
    },
    reset() {
      this.array = [...Array(this.elements)].map(() => Math.floor(Math.random() * (100 - 5 + 1) + 5));
    },
    toggleRunning() {
      this.$refs.options.isRunning = !this.$refs.options.isRunning;
    },
    toggleValues() {
      let display;
      if (this.elements > 40) {
        display = 'none';
      } else {
        display = 'block';
      }

      //Kasst
      setTimeout( () => {
        document.querySelectorAll('.value').forEach( (el) => {
          el.style.display = display;        
        })
      }, 5)
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
