<template>
    <div class='view'>
        <div id='list' >
            <div v-for="(num, index) in array" class='element' v-bind:style="{ height: num +'%' }" :key="index" v-bind:data-idx="index">&nbsp;</div>
        </div>
    </div>
</template>

<script>
    import {quickSort} from '../algorithms/quickSort.js';
    import {mergeSort} from '../algorithms/mergeSort.js';
    import {bubbleSort} from '../algorithms/bubbleSort.js';
    import {insertionSort} from '../algorithms/insertionSort.js';

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
            toggleRunning(context) {
                context.$emit('run');
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
        display: inline-block;
        background-color: black;
        width: 10px;
        margin: 1px;
    }
</style>
