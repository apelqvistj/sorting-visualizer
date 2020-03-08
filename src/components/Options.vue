<template>
    <div class='optionsWrapper'>
        <h3>{{ value }} elements</h3>
        <div class='sliderContainer'>
            <vue-slider ref="slider" v-model="value" v-bind="options" v-on:change="sendValue" :disabled="isRunning"></vue-slider>
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
        <div class='button primary' v-on:click="visualize" :disabled="isRunning">Visualize!</div>
        <div class='button secondary' v-on:click="reset" :disabled="isRunning">New array</div>
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
                },
                isRunning: false
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
            },
            reset() {
                this.$emit('reset')
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
        color: #FAFAFA;
    }
    .button {
        display: inline-block;
        width: 175px;
        box-sizing: border-box;
        font-size: 1.3em;
        box-shadow: 0 5px 14px rgba(0,0,0,0.3);
        text-align: center;
        border-radius: 50px;
        margin: 10px;
        padding: 20px;
        cursor: pointer;
        color: #FAFAFA;
        border: 1px solid rgb(66, 106, 179, .5);
    }
    .primary {
        background: linear-gradient(to right, rgba(126, 40, 167, 0.5), rgba(124,122,255,.5) 50%, rgba(2,122,233,.5) 100%);
    }
    .primary:hover,
    .secondary:hover {
        background: linear-gradient(to right, rgba(126, 40, 167, 0.7), rgba(124,122,255, 0.7) 50%, rgba(2,122,233, 0.7) 100%);
    }
</style>
