<template>
    <div class='optionsWrapper'>
        <h3>{{ value }} elements</h3>
        <div class='sliderContainer'>
            <vue-slider ref="slider" v-model="value" v-bind="options" v-on:change="sendValue"></vue-slider>
        </div>
        <hr>
        <div class='algorithmContainer'>
            <ul>
                <li id="bubble" class='active' v-on:click="pickAlgo('bubble')">Bubble sort</li>
                <li id="merge" v-on:click="pickAlgo('merge')">Merge sort</li>
                <li id="insert" v-on:click="pickAlgo('insert')">Insertion sort</li>
                <li id="quick" v-on:click="pickAlgo('quick')">Quick sort</li>
            </ul>
        </div>
        <button v-on:click="visualize">Visualize!</button>
    </div>
</template>

<script>
    import VueSlider from 'vue-slider-component'
    import 'vue-slider-component/theme/default.css'

    export default {
        name: 'Options',
        components: {
            VueSlider
        },
        data() {
            return {
                value: 10,
                options: {
                    dotSize: 25,
                    width: '100%',
                    height: 10,
                    contained: false,
                    direction: 'ltr',
                    data: null,
                    min: 10,
                    max: 200,
                    interval: 1,
                    disabled: false,
                    clickable: true,
                    duration: 0.5,
                    adsorb: false,
                    lazy: false,
                    tooltip: 'active',
                    tooltipPlacement: 'top'
                }
            }
        },
        methods: {
            sendValue() {
                this.$emit('changeElements', this.value)
            },
            pickAlgo(id) {
                if (document.querySelector('#'+id).classList.contains('active')) return;
                document.querySelector('.active').classList.remove('active');
                document.querySelector('#'+id).classList.add('active');

                this.$emit('changeAlgorithm', id)
            },
            visualize() {
                this.$emit('visualize')
            }
        }
    }
</script>

<style scoped>
    .optionsWrapper {
        background-color: #233559;
        width: 100vw;
        max-width: 100%;
        flex-grow: 1;
    }
    .sliderContainer {
        margin: 20px;
    }
    ul {
        list-style-type: none;
        padding: 0;
        margin: 10px;
    }
    li {
        display: inline-block;
        margin: 0 15px;
        cursor: pointer;
    }
    .active {
        color: white;
    }
</style>
