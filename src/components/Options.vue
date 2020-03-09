<template>
    <div class='optionsWrapper'>
        <h3>{{ value }} elements</h3>
        <div class='sliderContainer'>
            <vue-slider ref="slider" v-model="value" v-bind="options" v-on:change="sendValue" :disabled="isRunning"></vue-slider>
        </div>
        <div class='algorithmContainer'>
            <ul>
                <li id="bubble" class='algorithm active' v-on:click="pickAlgo('bubble')">Bubble sort</li>
                <li id="merge" class='algorithm' v-on:click="pickAlgo('merge')">Merge sort</li>
                <li id="insert" class='algorithm' v-on:click="pickAlgo('insert')">Insertion sort</li>
                <li id="quick" class='algorithm' v-on:click="pickAlgo('quick')">Quick sort</li>
                <li id="select" class='algorithm' v-on:click="pickAlgo('select')">Selection sort</li>
            </ul>
            <div id="selectionUnderline">&nbsp;</div>
        </div>
        <button class='button primary' v-on:click="visualize" :disabled="isRunning">Visualize!</button>
        <button class='button secondary' v-on:click="reset" :disabled="isRunning">New array</button>
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
        mounted() {
            this.positionUnderline();
        },
        data() {
            return {
                value: 10,
                options: {
                    dotSize: 25,
                    width: '50%',
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
                    tooltipPlacement: 'top',
                    processStyle: {
                        backgroundColor: 'rgb(82, 153, 211)'
                    }
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
                this.positionUnderline();
                this.$emit('changeAlgorithm', id)
            },
            visualize() {
                this.$emit('visualize')
            },
            reset() {
                this.$emit('reset')
            },
            positionUnderline() {
                let active = document.querySelector('.active');
                let left = active.getBoundingClientRect().left;
                let width = active.getBoundingClientRect().width;
                let underline = document.querySelector('#selectionUnderline');
                underline.style.width = width+'px';
                underline.style.left = left+'px';
            }
        }
    }
</script>

<style scoped>
    .optionsWrapper {
        background-color: rgb(30, 30, 30);
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
        margin-top: 10px;
        margin-bottom: 0px;
    }
    .algorithm {
        display: inline-block;
        margin: 0 15px;
        cursor: pointer;
        color: #FAFAFA;
        font-weight: bold;
    }
    .algorithm:hover {
        color: #AAAAAA;
    }
    .active,
    .active:hover {
        color: rgb(82, 153, 211);
    }
    #selectionUnderline {
        height: 2px;
        background-color: rgb(82, 153, 211);
        transition: 0.25s ease-out;
        position: absolute;
    }
    .button {
        display: inline-block;
        min-width: 136px;
        width: 20vw;
        max-width: 175px;
        box-sizing: border-box;
        font-size: 1.3em;
        box-shadow: 0 0 14px rgba(200,200,200,0.3);
        text-align: center;
        border-radius: 40px;
        margin: 30px 10px;
        padding: 20px;
        cursor: pointer;
        color: #FAFAFA;
        border: none;
        background-color: rgb(30, 30, 30);
    }
    .button:focus {
        border: none;
        outline: none;
    }
    .button:disabled {
        color: #AAAAAA;
        box-shadow: none;
    }
    .primary,
    .primary:disabled:hover {
        background: linear-gradient(to right, rgba(126, 40, 167, 0.5), rgba(124,122,255,.5) 50%, rgba(2,122,233,.5) 100%);
    }
    .primary:hover {
        background: linear-gradient(to right, rgba(126, 40, 167, 0.7), rgba(124,122,255, 0.7) 50%, rgba(2,122,233, 0.7) 100%);
    }
    .primary:active,
    .secondary:active {
        box-shadow: none;
    }
    .secondary:hover {
        color: #AAAAAA;
    }
    .vue-slider {
        margin: auto;
    }
</style>
