import Visualizer from '../components/Visualizer.vue'

export const bubbleSort = {
    sort: function(arr, context) {
        let swap;
        let queue = [];
        do{
            swap = false;
            arr.forEach((num, i) => {
                queue.push([i, i+1, false]);
                if (num > arr[i+1]) {
                    queue.pop();
                    queue.push([i, i+1, true]);
                    const temp = num;
                    arr[i] = arr[i+1];
                    arr[i+1] = temp;
                    swap = true;
                }
            })
        } while (swap === true);
        this.animate(queue, arr.length, context);
    },
    animate: function(queue, length, context) {
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
                }, (210 - length) / 2)
            }
        } 
        
        queue.splice(0, 1);
        if (!queue[0]) {
            Visualizer.methods.toggleRunning(context);
            return;
        }
        setTimeout( () => {
            elements[i].style.backgroundColor = 'black';
            if (elements[j]) elements[j].style.backgroundColor = 'black';
            this.animate(queue, length, context);
        }, (210 - length) / 2)
    }
}
