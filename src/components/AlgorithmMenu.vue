<template>
    <div class="menuwrapper">
        <span class="cta">Pick a sorting algorithm!</span>
        <div class="algomenu">
            <ul>
                <li>Bubble sort</li>
                <li>Merge sort</li>
                <li>Insertion sort</li>
                <li>Quick sort</li>
            </ul>
        </div>
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
        color: #E09F29;
    }
    .cta {
        font-size: 1.5em;
    }
    .algomenu {
        display: inline-block;
    }
</style>
