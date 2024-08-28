// Esqueleto - Pilha
// vamos usar classe ( vamos trabalhar com objetos)
function Stack() {
    var items = []

    this.push = function(element) { 
       return items.push(element);
    }

    this.pop = function() {
        // remover otem do todo da piha
       return items.pop()
    }

    this.peek = function() {
        //devolve o elemento que está no topo d apilha
        return items [items.length - 1];
    }

    this.isEmpty = function() {
        //informar se a pilha esta vazia ou não
        return items.length === 0;
    }

    this.clear = function() {
        //limpa a pilha 
        items = []
    }

    this.size = function() {
        //informar o tamanho da pilha
        return items.length;
    }

    this.print = function() {
        console.log(items)
    }
}

const stack = new Stack();
stack.push("teste");
stack.push("mengo");
stack.push("vasco");
let removed = stack.pop()

let top = stack.peek();

console.log(removed);
stack.print();

console.log(top);

stack.clear();
stack.print();

