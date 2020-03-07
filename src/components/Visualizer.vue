<template>
    <div class='view'>
        <div id='list' >
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
        data() {
            return  {
                queue: []
            }
        },
        methods: {
            bubbleSort(arr) {
                let swap;
                do{
                    swap = false;
                    arr.forEach((num, i) => {
                        this.queue.push([i, i+1, false]);
                        if (num > arr[i+1]) {
                            this.queue.pop();
                            this.queue.push([i, i+1, true]);
                            const temp = num;
                            arr[i] = arr[i+1];
                            arr[i+1] = temp;
                            swap = true;
                        }
                    })
                } while (swap === true);
            },
            bubbleVis(queue, length) {
                const parent = document.getElementById('list');
                const elements = parent.childNodes;
                const action = queue[0];
                const i = action[0];
                const j = action[1];
                
                if (i < length - 1) {
                    elements[i].style.backgroundColor = 'red';
                    elements[j].style.backgroundColor = 'red';
                    if (action[2]) {
                        const newHeight = elements[j].style.height;
                        setTimeout( () => {
                            elements[j].style.height = elements[i].style.height;
                            elements[i].style.height = newHeight;
                        }, 250 - length)
                    }
                } 
                
                queue.splice(0, 1);
                if (!queue[0]) {
                    parent.childNodes.forEach( (el) => {
                        el.style.backgroundColor = 'green';
                    })
                    return;
                }
                setTimeout( () => {
                    elements[i].style.backgroundColor = 'black';
                    if (elements[j]) elements[j].style.backgroundColor = 'black';
                    this.bubbleVis(queue, length);
                }, 500 - length)
            },
            mergeSort(arr) {
                if (arr.length < 2) {
                    return arr;
                }
                const auxArr = arr.slice();
                this.msAux(arr, 0, arr.length - 1, auxArr, this.queue);
            },
            msAux(arr, start, end, aux) {
                if (start == end) return;
                const middle = Math.floor((start + end) / 2);
                this.msAux(aux, start, middle, arr);
                this.msAux(aux, middle + 1, end, arr);
                this.merge(arr, start, middle, end, aux);
            },
            merge(arr, start, middle, end, aux) {
                let i = start;
                let j = start;
                let k = middle + 1;

                while(i <= middle && k <= end) {     
                    this.queue.push([i, k]);
                    this.queue.push([i, k]);

                    if (aux[i] <= aux[k]) {
                        this.queue.push([j, aux[i]]);
                        arr[j++] = aux[i++];
                    } else {
                        this.queue.push([j, aux[k]]);
                        arr[j++] = aux[k++];
                    }
                }
                while(i <= middle) {     
                    this.queue.push([i, i]);
                    this.queue.push([i, i]);

                    this.queue.push([j, aux[i]]);
                    arr[j++] = aux[i++];
                }
                while (k <= end) {
                    this.queue.push([k, k]);
                    this.queue.push([k, k]);

                    this.queue.push([j, aux[k]]);
                    arr[j++] = aux[k++];
                }
            },
            mergeVis(queue, length, nodes) {
                const parent = document.getElementById('list');
                const elements = parent.childNodes;
                const SPEED = Math.ceil((210-nodes) / 2);
                for (let i = 0; i < length; i++) {
                    const colorChange = i % 3 !== 2;
                    if (colorChange) {
                        const [firstIdx, secondIdx] = queue[i];
                        const color = i % 3 == 0 ? 'red' : 'black';
                        setTimeout( () => {
                            elements[firstIdx].style.backgroundColor = color;
                            elements[secondIdx].style.backgroundColor = color;
                        }, i * SPEED);
                    } else {
                        setTimeout( () => {
                            const [firstIdx, height] = queue[i];
                            elements[firstIdx].style.height = `${height}%`;
                        }, i * SPEED);
                    }
                }
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
