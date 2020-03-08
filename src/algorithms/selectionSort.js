import Visualizer from '../components/Visualizer.vue'

var queue = [];

export const selectionSort = {
    sort: function(arr, context) {
        const length = arr.length;
        
        for (let i = 0; i < length; i++) {
            let min = i;
            queue.push([i, i, false, true]);

            for (let j = i + 1; j < length; j++) {
                queue.push([j, j, false, false]);
                if (arr[min] > arr[j]) {
                    queue.pop();
                    queue.push([min, j, false, true]);
                    min = j;
                }
            }
            if (min !== i) {
                queue.push([i, min, true, false]);
                const temp = arr[i];
                arr[i] = arr[min];
                arr[min] = temp;
            }
        }
        
        this.animate(length, context);
    },
    animate: function(nodes, context) {
        const SPEED = Math.ceil((210-nodes) / 2);

        for (let i = 0; i < queue.length; i++) {
            const parent = document.getElementById('list');
            const elements = parent.childNodes;
            const [first, second, isSwap, isMin] = queue[i];

            if (isMin) {
                setTimeout( () => {
                    elements[first].style.backgroundColor = Visualizer.data().PRIMARY_COLOR;
                    elements[second].style.backgroundColor = Visualizer.data().TERTIARY_COLOR;
                    if (second > 0) elements[second - 1].style.backgroundColor = Visualizer.data().PRIMARY_COLOR;
                }, i * SPEED);
            } else if (isSwap) {
                setTimeout( () => {
                    const newHeight = elements[first].style.height;
                    const newContent = elements[first].innerHTML;
                    elements[first].style.height = elements[second].style.height;
                    elements[first].innerHTML = elements[second].innerHTML;
                    elements[second].innerHTML = newContent;
                    elements[second].style.height = newHeight;
                    elements.forEach( (el) => {
                        el.style.backgroundColor = Visualizer.data().PRIMARY_COLOR;
                    })
                }, i * SPEED);
            } else {
                setTimeout( () => {
                    if (elements[first - 1].style.backgroundColor === Visualizer.data().SECONDARY_COLOR) {
                        elements[first - 1].style.backgroundColor = Visualizer.data().PRIMARY_COLOR;
                    }
                    elements[first].style.backgroundColor = Visualizer.data().SECONDARY_COLOR;
                }, i * SPEED);
            }
            if (i+1 == queue.length) {
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