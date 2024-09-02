function Queue () {
    let items = [];
    
    this.peek = () => {
        return items[0];
    };

    this.enqueue = (element) => {
        return items.push(element);
    }

    this.dequeue = () => {
        return items.shift();
    }

    this.print = () => {
        console.log(items);
    }

    this.isEmpty = () => {
        return items.length === 0;
    }

    this.size = () => {
        return items.length;
    }

    this.clear = () => {
        return items = [];
    }

    this.contains = (element) => {
        return items.includes(element);
    }
}

let queue = new Queue();

queue.enqueue("Fluminense");
queue.enqueue("Vasco");
queue.enqueue("Flamengo");

let removed = queue.dequeue();
console.log(`Item removed was ${removed}`);

queue.print()

console.log(queue.peek());

console.log(queue.isEmpty());

console.log("Size: " + queue.size());

console.log(queue.contains("Flamengo"));

queue.clear();
queue.print();