function isInOrder(queue) {
    for (let i = 0; i < queue.length - 1; i++) {
        if (queue[i] > queue[i + 1]) {
            return false;
        }
    }
    return true;
}

const queue = ["A", "B", "C", "D"];
console.log(isInOrder(queue));

const outOfOrderQueue = ["A", "C", "B", "D"];
console.log(isInOrder(outOfOrderQueue));
