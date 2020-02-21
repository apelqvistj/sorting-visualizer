<template>
    <div class='view'>
        <div class='list' >
            <div v-for="(num, index) in array" class='element' v-bind:style="{ height: num +'%' }" :key="index" v-bind:data-idx="index">&nbsp;</div>
        </div>
    </div>
</template>

<script>
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
                let swap;
                do{
                    setInterval( () => {
                        swap = false;
                        arr.forEach((num, i) => {
                            if (num > arr[i+1]) {
                                const temp = num;
                                arr.splice(i, 1, arr[i+1]);
                                arr.splice(i+1, 1, temp); 
                                swap = true;
                            }
                        })
                    }, 300-this.value)
                } while (swap === true);
            },
            mergeSort(arr) {
                return arr;
            },
            insertSort(arr) {
                return arr;
            },
            quickSort(arr) {
                return arr;
            }
        }
    }
</script>

<style scoped>
    .view {
        background-color: #F7FCE7;
        width: 100vw;
        max-width: 100%;
        height: 50%;
    }
    .list {
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
