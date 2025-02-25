function List() {
    items = ["Flamengo", "Vasco"];

    this.forEach2((element, index) => {
        console.log(items[index]);
    });
}



let array = ["Vasco", "Flamengo"];

let dict = [
    {name: "William", note: 9},
    {name: "Antônio", note: 9.3},
    {name: "Lyra", note: 9.6}
]

let notesOverNine = dict.filter(n => n.note > 9);
let notesLowerNine = dict.filter(n => n.note <= 9);
console.log(notesOverNine, notesLowerNine);

let usingMap = dict.map(student => `Aluno: ${student.name} - Nota: ${student.note}`);
let usingFlatmap = dict.flatMap(student => `Aluno: ${student.name} - Nota: ${student.note}`);

console.log(usingMap);
console.log(usingFlatmap);

array.forEach((element, index) => {
    console.log(element, index+1);
});
