import Visualizer from '../components/Visualizer.vue'

var queue = [];

export const insertionSort = {
    sort: async function(arr, context) {
        await this.doSort(arr);
        this.animate(arr.length, context);
    },
    doSort: function(arr) {
        let length = arr.length;
        for (let i = 1; i < length; i++) {
            queue.push([i, i, false, false]);
            let key = arr[i];
            let j = i - 1;
            queue.push([j, j, true, false]);
            queue.push([j, j, true, false]);
            while (j >= 0 && arr[j] > key) {
                queue.push([j+1, arr[j], true, true]);
                arr[j+1] = arr[j];
                j--;
                if (j >= 0) {
                    queue.push([j, j, true, false])
                    queue.push([j, j, true, false])
                }                        
            }
            queue.push([j+1, key, true, true]);
            arr[j+1] = key;
        }
        return arr;
    },
    animate: function(nodes, context) {
        const SPEED = Math.ceil((210-nodes) / 2);
        for (let i = 0; i < queue.length; i++) {
            const parent = document.getElementById('list');
            const elements = parent.childNodes;
            const action = queue[i];
            setTimeout( () => {
                if (!action[2]) {
                    const key = action[0];
                    elements[key].style.backgroundColor = 'blue';
                } else if (!action[3]) {
                    const comp = action[0];
                    if (elements[comp].style.backgroundColor != 'red') {
                        elements[comp].style.backgroundColor = 'red';
                    } else {
                        elements[comp].style.backgroundColor = 'black';
                    }
                } else {
                    const idx = action[0];
                    const height = action[1];
                    elements[idx].style.height = `${height}%`;                        
                }
            }, i * SPEED);
            if (i+1 == queue.length) {
                setTimeout( () => {
                    elements.forEach( (el) => {
                        el.style.backgroundColor = 'black';
                    })
                    queue = [];
                    Visualizer.methods.toggleRunning(context);
                }, i * SPEED)
            }
        }
    }
}