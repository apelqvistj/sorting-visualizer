<template>
    <div class='view'>
        <div class='list' >
            <div v-for="(num, index) in array" class='element' v-bind:style="{ height: num +'%' }" :key="index">&nbsp;</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Visualizer',
        props: {
            array: {
                type: Array
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
        justify-content: space-evenly;
    }
    .element {
        display: inline-block;
        background-color: black;
        width: 10px;
        margin: 1px;
    }
</style>
