// bmi = w / (h*h); // body mass index

let w_Luiza = 50;
let h_Luiza = 1.65;
let bmi_Luiza = w_Luiza / (h_Luiza * h_Luiza);

let w_Dima = 63;
let h_Dima = 1.73;
let bmi_Dima = w_Dima / (h_Dima * h_Dima);

let x = bmi_Luiza < bmi_Dima;
let y = bmi_Luiza > bmi_Dima;

console.log(`BMI-ul Luizei este ${bmi_Luiza}`);
console.log(`BMI-ul lui Dima este ${bmi_Dima}`);
console.log(x);
console.log(y);

if (bmi_Luiza < bmi_Dima) {
    console.log(`BMI-ul lui Dima este mai mare decat cel al Luizei, iar valoarea lui este egala cu ${bmi_Dima}`);
} else if (bmi_Luiza == bmi_Dima) {
    console.log(`BMI-urile sunt egale`);
} else {
    console.log(`BMI-ul Luizei este mai mare decat cel al lui Dima, iar valoarea lui este egala cu ${bmi_Luiza}`);
};