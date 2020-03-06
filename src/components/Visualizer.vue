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
                this.visualize(this.queue, arr.length);
            },
            mergeSort(arr) {
                if (arr.length < 2) {
                    return arr;
                }
                const middle = Math.floor(arr.length / 2);
                const left = arr.slice(0, middle);
                const right = arr.slice(middle);
                
                return this.merge(this.mergeSort(left), this.mergeSort(right));
            },
            merge(left, right) {
                let res = [];
                let li = 0;
                let ri = 0;

                while (li < left.length && ri < right.length) {
                    if (left[li] < right[ri]) {
                        res.push(left[li]);
                        li++;
                    } else {
                        res.push(right[ri]);
                        ri++;
                    }
                }

                return res.concat(left.slice(li)).concat(right.slice(ri));
            },
            insertSort(arr) {
                return arr;
            },
            quickSort(arr) {
                return arr;
            },
            visualize(queue, length) {
                const elements = document.getElementById('list').childNodes;
                const i = queue[0][0];
                const j = queue[0][1];

                if (i < length - 1) {
                    if (queue[0][2]) {
                        const newHeight = elements[j].style.height;
                        elements[j].style.height = elements[i].style.height;
                        elements[i].style.height = newHeight;
                    }
                    elements[j].style.backgroundColor = 'red';
                    elements[i].style.backgroundColor = 'black';
                } else {
                    elements[i].style.backgroundColor = 'black';
                }
                
                queue.splice(0, 1);
                if (!queue[0]) {
                    return;
                }
                setTimeout( () => {
                    this.visualize(queue, length);
                }, 210-length)
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
