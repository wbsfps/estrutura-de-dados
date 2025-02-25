

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

    this.union = (otherSet) => { // 1º união 
        var unionSet = new Set(),
        values = this.values();

        for(var i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }

        values = otherSet.values();

        for(var i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }

        return unionSet;
    }

    this.intersection = (otherSet) => { // 2º passo
        var intersectionSet = new Set(),
        values = this.values();

        for(var i = 0; i < values.length; i++) {
            if(otherSet.has(values[i])) {
                intersectionSet.add(values[i]);
            }
        }
        return intersectionSet;
    }

    this.difference = (otherSet) => { // 3º passo - diferença 
        var differenceSet = new Set(),
        values = this.values();

        for(var i = 0; i < values.length; i++) {
            if(!otherSet.has(values[i])) {
                differenceSet.add(values[i]);
            }
        }
        return differenceSet;
    }

    this.subset = function(otherSet) { // 4º passo 
        if(this.size() > otherSet.size()) {
            return false;
        } else {
            var values = this.values();

            for(var i = 0; i < values.length; i++) {
                if(!otherSet.has(values[i])) {
                    return false;
                }
            }
            return true;
        }
    }
}

let set = new Set();

set.add("test");
set.add("Fulano 1");
set.add("Fulano 2");
set.add("Fulano 3");

console.log(set.delete("Fulano 1"));
console.log(set.size());
console.log(set.has("test"));
console.log(set.values());

set.clear();

console.log(set.values());

console.log();

set = new Set();

set.add(1);
set.add(2);
set.add(3);
set.add(4);
console.log(set.size());
console.log(set.values());

set.delete(4);
console.log(set.values());
console.log(set.has(4));

console.log();

let setA = new Set();

setA.add(1);
setA.add(2);
setA.add(3);

let setB = new Set();

setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);

let unionAB = setA.union(setB);
let intersectionAB = setA.intersection(setB);
let differenceAB = setA.difference(setB);
let differenceBA = setB.difference(setA);

console.log("União: " + unionAB.values());
console.log("Intersecção: " + intersectionAB.values());
console.log("Diferença: " + differenceAB.values());
console.log("Diferença: " + differenceBA.values());

console.log(setA.subset(setB));

setA = new Set();
setA.add(1);
setA.add(2);

setB = new Set();
setB.add(1);
setB.add(2);
setB.add(3);

let setC = new Set();


console.log(setA.subset(setB));
console.log(setA.subset(setC));