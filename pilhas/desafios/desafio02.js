// Verificar se a Pilha Está Vazia
// Crie uma função Stack que recebe uma pilha e retorna true se a pilha estiver vazia e false caso contrário.

function Stack() {
    var items = []

    this.push = function(element) { 
       return items.push(element);
    }

    this.pop = function() {
        // remover otem do todo da piha
       return items.pop()
    }

    this.isEmpty = function() {
        //informar se a pilha esta vazia ou não
        return items.length === 0;
    }
}

const stack = new Stack();
stack.push("teste");
console.log(stack.isEmpty());
stack.pop()
console.log(stack.isEmpty());
