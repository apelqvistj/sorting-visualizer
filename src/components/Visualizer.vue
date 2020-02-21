<template>
    <div class='view'>
        <div class='list' >
            <div v-for="(num, index) in array" class='element' v-bind:style="{ height: num +'px' }" :key="index">&nbsp;</div>
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
        height: 800px;
        display: flex;
        align-items: flex-end;
    }
    .list {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: flex-end;

    }
    .element {
        display: inline-block;
        background-color: black;
        width: 10px;
        margin: 5px;
    }
</style>
