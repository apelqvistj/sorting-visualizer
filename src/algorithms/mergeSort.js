import Visualizer from '../components/Visualizer.vue'

var queue = [];

export const mergeSort = {
    sort: async function(arr, context) {
        await this.doSort(arr);
        this.animate(queue.length, arr.length, context)
    },
    doSort: function(arr) {
        if (arr.length < 2) {
            return arr;
        }
        const auxArr = arr.slice();
        this.msAux(arr, 0, arr.length - 1, auxArr, queue);
    },
    msAux: function(arr, start, end, aux) {
        if (start == end) return;
        const middle = Math.floor((start + end) / 2);
        this.msAux(aux, start, middle, arr);
        this.msAux(aux, middle + 1, end, arr);
        this.merge(arr, start, middle, end, aux);
    },
    merge: function(arr, start, middle, end, aux) {
        let i = start;
        let j = start;
        let k = middle + 1;
    
        while(i <= middle && k <= end) {     
            queue.push([i, k]);
            queue.push([i, k]);
    
            if (aux[i] <= aux[k]) {
                queue.push([j, aux[i]]);
                arr[j++] = aux[i++];
            } else {
                queue.push([j, aux[k]]);
                arr[j++] = aux[k++];
            }
        }
        while(i <= middle) {     
            queue.push([i, i]);
            queue.push([i, i]);
    
            queue.push([j, aux[i]]);
            arr[j++] = aux[i++];
        }
        while (k <= end) {
            queue.push([k, k]);
            queue.push([k, k]);
    
            queue.push([j, aux[k]]);
            arr[j++] = aux[k++];
        }
    },
    animate: function(length, nodes, context) {
        const parent = document.getElementById('list');
        const elements = parent.childNodes;
        const SPEED = Math.ceil((210-nodes) / 2);
        for (let i = 0; i < length; i++) {
            const colorChange = i % 3 !== 2;
            if (colorChange) {
                const [firstIdx, secondIdx] = queue[i];
                const color = i % 3 == 0 ? Visualizer.data().SECONDARY_COLOR : Visualizer.data().PRIMARY_COLOR;
                setTimeout( () => {
                    elements[firstIdx].style.backgroundColor = color;
                    elements[secondIdx].style.backgroundColor = color;
                }, i * SPEED);
            } else {
                setTimeout( () => {
                    const [firstIdx, height] = queue[i];
                    elements[firstIdx].style.height = `${height}%`;
                    const display = elements.length > 40 ? 'none' : 'block';
                    elements[firstIdx].innerHTML = "<span class='value' style='color: #F7FCE7; display: "+display+"'>"+height+"</span>";
                }, i * SPEED);
            }
            if (i+1 == length) {
                setTimeout( () => {
                    elements.forEach( (el) => {
                        el.style.backgroundColor = Visualizer.data().PRIMARY_COLOR;
                    })
                    queue = [];
                    Visualizer.methods.toggleRunning(context);
                }, i * SPEED)
            }
        }
    }
}
