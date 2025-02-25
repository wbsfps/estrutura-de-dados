function PriorityQueue() {
    const queue = [];

    function enqueue(element, priority) {
        const queueElement = { element, priority };
        let added = false;

        for (let i = 0; i < queue.length; i++) {
            if (queue[i].priority < queueElement.priority) {
                queue.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }

        if (!added) {
            queue.push(queueElement);
        }
    }
    function dequeue() {
        if (isEmpty()) {
            return "Fila vazia";
        }
        return queue.shift();  
    }

    function print() {
        if (isEmpty()) {
            console.log("Fila vazia");
        } else {
            queue.forEach(item => {
                console.log(`Elemento: ${item.element}, Prioridade: ${item.priority}`);
            });
        }
    }

    
    function isEmpty() {
        return queue.length === 0;
    }

    return {
        enqueue,
        dequeue,
        print,
        isEmpty
    };
}

const pq = PriorityQueue();
pq.enqueue("Tarefa 1", 2);
pq.enqueue("Tarefa 2", 1);
pq.enqueue("Tarefa 3", 3);

pq.print();  

console.log("Removido:", pq.dequeue().element); 
pq.print();  
