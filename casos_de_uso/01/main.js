/* 
Resolver as questões utilizando array. 

Cenário
Você é responsável pelo desenvolvimento de um sistema de gerenciamento de notas para uma escola. O sistema deve ser capaz de armazenar as notas de vários alunos, calcular a média de cada aluno e determinar quais alunos precisam de recuperação (notas abaixo de 7). Além disso, o sistema deve exibir as notas mais altas e mais baixas de cada aluno.

Requisitos
Armazenar as notas de cinco disciplinas para cada aluno em um vetor.
Calcular a média das notas de cada aluno.
Identificar se algum aluno tem nota abaixo de 7 e precisa de recuperação.
Exibir as notas mais altas e mais baixas de cada aluno.
Permitir que o sistema funcione para um grupo de pelo menos 3 alunos.

*/


const quantityStudents = 3;
const disciplines = 5;

let studentsData = [];

for (let i = 0; i < quantityStudents; i++) {
    let student = {};
    student.name = prompt(`Informe o nome do aluno ${i + 1}: `);
    student.notes = [];
    
    for (let j = 0; j < disciplines; j++) {
        let note = Number(prompt(`Informe a nota ${j + 1} para ${student.name}: `));
        student.notes.push(note);
    }

    let lowestNote = Math.min(...student.notes);
    let biggestNote = Math.max(...student.notes);
    let sum = student.notes.reduce((result, note) => result + note, 0);
    let media = sum / disciplines;

    student.media = media;
    student.lowestNote = lowestNote;
    student.biggestNote = biggestNote;
    student.recovery = media < 7;

    studentsData.push(student);
}

studentsData.forEach(student => {
    console.log(`Aluno: ${student.name}`);
    console.log(`Notas: ${student.notes.join(", ")}`);
    console.log(`Média: ${student.media.toFixed(2)}`);
    console.log(`Maior Nota: ${student.biggestNote}`);
    console.log(`Menor Nota: ${student.lowestNote}`);
    console.log(`Recuperação: ${student.recovery ? "Sim" : "Não"}`);
});
