import Visualizer from '../components/Visualizer.vue'

var queue = [];

export const quickSort = {
    sort: async function(arr, left, right, context) {
        await this.doSort(arr, left, right);
        this.animate(queue.length, arr.length, context);
    },
    doSort: function(arr, left, right) {
        let index;
        if (arr.length > 1) {
            index = this.partition(arr, left, right);
            if (left < index - 1) {
                this.doSort(arr, left, index - 1);
            }

            if (index < right) {
                this.doSort(arr, index, right);
            }
        }

        return arr;
    },
    partition: function(arr, left, right) {
        const pivot = arr[Math.floor((right + left) / 2)];
        const pidx = Math.floor((right + left) / 2);
        let i = left;
        let j = right;

        while (i <= j) {
            while (arr[i] < pivot) {
                queue.push([i, pidx, true, false]);
                queue.push([i, pidx, false, false]);
                i++;
            }
            while (arr[j] > pivot) {
                queue.push([j, pidx, true, false]);
                queue.push([j, pidx, false, false]);
                j--;
            }

            if (i <= j) {
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                queue.push([i, j, false, true]);
                i++;
                j--;
            }
        }
        return i;
    },
    animate: function(length, nodes, context) {
        const SPEED = Math.ceil((210-nodes) / 2);
        for (let i = 0; i < length; i++) {
            const parent = document.getElementById('list');
            const elements = parent.childNodes;
            const [first, second, toColor, isSwap] = queue[i];
            if (isSwap) {
                setTimeout( () => {
                    const newHeight = elements[first].style.height;
                    const newContent = elements[first].innerHTML;
                    elements[first].style.height = elements[second].style.height;
                    elements[first].innerHTML = elements[second].innerHTML;
                    elements[second].innerHTML = newContent;
                    elements[second].style.height = newHeight;
                }, i * SPEED);
            } else {
                setTimeout( () => {
                    elements.forEach( (el) => {
                        el.style.backgroundColor = Visualizer.data().PRIMARY_COLOR;
                    });
                    elements[second].style.backgroundColor = Visualizer.data().TERTIARY_COLOR;
                    if (toColor) {
                        elements[first].style.backgroundColor = Visualizer.data().SECONDARY_COLOR;
                    } 
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