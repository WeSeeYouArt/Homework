let x = 50;
let y = 800;

let nota = ''; // totalul trebuie definit

let tips1 = (nota / 100) * 15; // 15% tips
let tips2 = (nota / 100) * 20; // 20% tips

let t1 = nota + tips1; // totalul cu tips-ul de 15%
let t2 = nota + tips2; // totalul cu tips-ul de 20%

if (nota < x) {
console.log(`nota e ${nota} lei, tips-ul e 0 lei, iar totalul e acelasi ${nota} lei`);
} else if (nota == x || nota <= y) {
    console.log(`nota e ${nota} lei, tips-ul e ${tips1} lei, iar totalul e ${t1} lei`);
} else {
    console.log(`nota e ${nota} lei, tips-ul e ${tips2} lei, iar totalul e ${t2} lei`);
};

