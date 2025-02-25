function LinkedList() {
    var Node = function(element) {
        this.element = element;
        this.next = null;
    }

    var length = 0;
    var head = null;

    this.addCustomer = function(element) {
        // Adiciona um elemento no final da lista
        var node = new Node(element);
        var current;

        if (head === null) {
            head = node;
        } else {
            current = head;

            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }

        length++;
    }
    this.toString = function() {
        // Converte a lista em uma string
        let current = head, string = '';
        while (current) {
            string += current.element + ' ';
            current = current.next;
        }
        return string.trim();
    }

    this.removeNextCustomer = function(element) {
        // Remove o elemento da lista (não pela posição)
        var index = this.indexOf(element);
        return this.removeAt(index);
    }

    this.listCustomers = function() {
        // Imprime a lista no console
        console.log(this.toString());
    }
}

let ll = new LinkedList();
ll.addCustomer("Teste");
ll.addCustomer("Pedro");
ll.addCustomer("Ana");
ll.listCustomers();