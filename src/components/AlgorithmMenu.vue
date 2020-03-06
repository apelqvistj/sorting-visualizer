<template>
    <div class="menuwrapper">
        <span class="cta">Sorting visualizer 3000</span>
    </div>
</template>

<script>
    export default {
    name: 'AlgorithmMenu'
    }
</script>

<style scoped>
    ul {
    list-style-type: none;
    padding: 0;
    margin: 10px;
    }
    li {
    display: inline-block;
    margin: 0 15px;
    }
    .menuwrapper {
        display: flex;
        justify-content: space-evenly;
        padding: 10px 100px 10px 100px;
        background-color: #233559;
        height: 40px;
    }
    .cta {
        font-size: 1.5em;
    }
</style>
