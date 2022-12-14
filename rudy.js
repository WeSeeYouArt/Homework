class Caine {
    constructor (nume, rasa, culoareaParului, anulNasterii, vaccinuri) {
        this.nume = nume;
        this.rasa = rasa;
        this.culoareaParului = culoareaParului;
        this.anulNasterii = anulNasterii;
        this.vaccinuri = vaccinuri;
    }
}

const caine1 = new Caine('Rudy', 'Karelo-Finnish Laika', 'roscat', 2019, ['Jigodia', 'Rabia', 'Tusea de canisa']);
const caine2 = new Caine('', 'blablabla', 'alb', 2017, '');

console.log(caine1, caine2);
console.log(caine1 instanceof Caine);
console.log(caine2 instanceof Caine);

Caine.prototype.calcVarsta = function () {
    console.log(2022 - this.anulNasterii);
}

caine1.calcVarsta();
caine2.calcVarsta();

//     'Rudy',
//     rasa: 'Karelo-Finnish Laika',
//     culoareaParului: 'roscat',
//     anulNasterii: '2019',
//     vaccinuri: [
//         { numeVaccin: 'Jigodia',
//           data: '03.05.2019.'
//         },
//         { numeVaccin: 'Rabia',
//           data: '06.04.2020.'
//         },
//         { numeVaccin: 'Tusea de canisa',
//           data: '05.05.2021.'
//         },
// ],
//     arePasaport: false,
//     calculeazaVarstaLuiRudy: function() { // // cerinta nr. 2
//         this.varsta = 2022 - this.anulNasterii;
//         return 2022-this.anulNasterii;
//     },
//     afiseaza: function() { // cerinta nr. 4
//         console.log(`${this.nume} ${this.arePasaport ? '' : 'nu '}are pasaport si ${this.arePasaport ? '' : 'nu'} poate parasi tara.`);
//     },
//     afiseazaIstoricVaccinare: function() { // cerinta nr. 5
//         if(this.vaccinuri.length == 0) {
//             console.log(`${this.nume} nu a primit niciun vaccin pana acum.`);
//         } else {
//             console.log(`${this.nume} a primit ${this.vaccinuri.length} vaccin/uri.`)
//             for(let i = 0; i < this.vaccinuri.length; i++) {
//                 console.log(`Vaccinul ${this.vaccinuri[i].numeVaccin} pe data de ${this.vaccinuri[i].data}`);
//             }
//         }

//     }
// }

// console.log(datePersonaleObiect);
// console.log(`${datePersonaleObiect.nume} are ${datePersonaleObiect.calculeazaVarstaLuiRudy()} ani.`);



// datePersonaleObiect.afiseaza();
// datePersonaleObiect.afiseazaIstoricVaccinare(); // cerinta nr. 5
// datePersonaleObiect.vaccinuri.push = 'Hepatita canina'; // // cerinta nr. 3
// console.log(`A fost adaugat un nou vaccin in lista: ${datePersonaleObiect.vaccinuri.push}.`);
// console.log(`${datePersonaleObiect.nume} a primit recent inca un vaccin: ${datePersonaleObiect.vaccinuri.push}.`);
// datePersonaleObiect.vaccinuri.unshift({numeVaccin: 'Hepatita canina a fost primit', data: '14.07.2022.'});
// datePersonaleObiect.afiseazaIstoricVaccinare();

