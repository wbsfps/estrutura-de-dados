function Set() {
        var items = {};
    
        this.add = (value) => { // segundo passo
            
            if (!this.has(value)) { // se não tiver o valor ele adiciona sem poder repetir valor
                items[value] = value;
                return true;
            }
            return false;
        }
    
        this.delete = (value) => { //terceiro passo
            if(this.has(value)) {
                delete items[value];
                return true;
            }
            return false
        }
    
        this.has = (value) => { // primeiro passo
            return items.hasOwnProperty(value); //retorno boleano, objeto com metodo nativo 
        }
    
        this.clear = () => {
            items = {}; // quarto passo esvaziar 
        }
    
        this.size = () => {
            return Object.keys(items).length; // quinto passo : tem uma chave para um valor
        
        }
    
        this.values = () => { // sexto passo
            var values = [],
            keys = Object.keys(items);
            for(var i = 0; i < keys.length; i++) {
                values.push(items[keys[i]]);
            }
            return values;
        }
}

let participantes = new Set();

participantes.add("Fulano 1");
participantes.add("Fulano 2");
participantes.add("Fulano 3");

participantes.delete("Fulano 2");

console.log(participantes.has("Fulano 1"));
console.log(participantes.values());