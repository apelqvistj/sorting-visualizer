<template>
    <div class='view'>
        <div id='list' >
            <div v-for="(num, index) in array" class='element' 
                v-bind:style="{ height: num +'%', width: 1000 / array.length+'px' }" 
                :key="index" 
                v-bind:data-idx="index"
                v-on:load="checkElements">
                <span class='value'>{{ num }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import {quickSort} from '../algorithms/quickSort.js';
    import {mergeSort} from '../algorithms/mergeSort.js';
    import {bubbleSort} from '../algorithms/bubbleSort.js';
    import {insertionSort} from '../algorithms/insertionSort.js';
    import {selectionSort} from '../algorithms/selectionSort.js';

    export default {
        name: 'Visualizer',
        props: {
            array: {
                type: Array
            },
            value: {
                type: Number
            }
        },
        mounted() {
            this.$nextTick( () => {
                this.checkElements();
            });
        },
        data() {
            return {
                PRIMARY_COLOR: 'rgb(35, 53, 89)',
                SECONDARY_COLOR: 'rgb(224, 159, 41)',
                TERTIARY_COLOR: 'rgb(186, 50, 79)'
            }
        },
        methods: {
            bubbleSort(arr) {
                bubbleSort.sort(arr, this);
            },
            mergeSort(arr) {
                mergeSort.sort(arr, this);
            },
            insertSort(arr) {
                insertionSort.sort(arr, this);
            },
            quickSort(arr, left, right) {
                quickSort.sort(arr, left, right, this);
            },
            selectionSort(arr) {
                selectionSort.sort(arr, this);
            },
            toggleRunning(context) {
                context.$emit('run');
            },
            checkElements() {
                let elements = document.querySelectorAll('.element').length;
                let display;
                if (elements > 40) {
                    display = 'none';
                } else {
                    display = 'block';
                }
                document.querySelectorAll('.value').forEach( (el) => {
                    el.style.display = display;        
                })
            }       
        }
    }
</script>

<style scoped>
    .view {
        background-color: #F7FCE7;
        width: 100vw;
        max-width: 100%;
        height: 60%;
        padding-top: 50px;
    }
    #list {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: flex-end;
    }
    .element {
        display: flex;
        background-color: #233559;
        align-items: flex-end;
        justify-content: center;
        margin-left: 1px;
    }
    .value {
        color: #F7FCE7;
    }
    @media screen and (max-width: 900px) {
        .value {
            display: none !important
        }
    }
</style>
