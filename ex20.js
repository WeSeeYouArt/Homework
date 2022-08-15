// 1. Functia constructor

// const Masina = function (model, culoare, anFabricatie, viteza) {
//     this.model = model;
//     this.culoare = culoare;
//     this.anFabricatie = anFabricatie;
//     this.viteza = viteza;
// }

// Masina.prototype.accelerare = function() {
//     console.log(`${this.model} are viteza de ${this.viteza}km/h, iar dupa accelerare viteza e ${(this.viteza + 10)}km/h.`);
// }

// Masina.prototype.franare = function() {
//     console.log(`${this.model} are viteza de ${this.viteza}km/h, iar dupa franare viteza e ${(this.viteza - 10)}km/h.`);
// }

// Masina.prototype.descriere = function() {
//     console.log(`${this.model} de culoare ${this.culoare}, fabricat in anul ${this.anFabricatie}, are viteza de ${this.viteza}km/h.`);
// }

// const VehiculElectric = function (model, culoare, anFabricatie, viteza, baterie) {
//     Masina.call(this, model, culoare, anFabricatie, viteza);
//     this.baterie = baterie;
// }

// VehiculElectric.prototype = Object.create(Masina.prototype);

// VehiculElectric.prototype.descriere = function() {
//     console.log(`${this.model} de culoare ${this.culoare}, fabricat in anul ${this.anFabricatie}, are viteza de ${this.viteza}km/h si bateria e ${this.baterie}%.`);
// }

// VehiculElectric.prototype.descarcare = function() {
//     console.log(`${this.model} are viteza de ${this.viteza}km/h, iar dupa accelerare viteza e ${(this.viteza + 10)}km/h si bateria e ${this.baterie - 5}%.`);
// }

// VehiculElectric.prototype.incarcare = function() {
//     console.log(`${this.model} are viteza de ${this.viteza}km/h, iar dupa franare viteza e ${(this.viteza - 10)}km/h si bateria e ${this.baterie + 10}%.`);
// }

// const masina1 = new Masina('Ford Focus', 'rosie', 2018, 120);
// const masina2 = new VehiculElectric('Tesla S', 'alba', 2018, 120, 40);

// console.log(masina1, masina2);
// masina1.descriere();
// masina1.accelerare();
// masina1.franare();
// masina2.descriere();
// masina2.descarcare();
// masina2.incarcare();



// 2. Clase ES6

// class Masina {
//     constructor (model, culoare, anFabricatie, viteza) {
//         this.model = model;
//         this.culoare = culoare;
//         this.anFabricatie = anFabricatie;
//         this.viteza = viteza;
//     }

//     descriere() {
//         console.log(`${this.model} de culoare ${this.culoare}, fabricat in anul ${this.anFabricatie}, are viteza de ${this.viteza}km/h.`);
//     }

//     accelerare() {
//         console.log(`${this.model} are viteza de ${this.viteza}km/h, iar dupa accelerare viteza e ${(this.viteza + 10)}km/h.`);
//     }

//     franare() {
//         console.log(`${this.model} are viteza de ${this.viteza}km/h, iar dupa franare viteza e ${(this.viteza - 10)}km/h.`);
//     }
// }

// class VehiculElectric extends Masina {
//     constructor(model, culoare, anFabricatie, viteza, baterie) {
//         super(model, culoare, anFabricatie, viteza);
//         this.baterie = baterie;
//     }

//     descriere() {
//         console.log(`${this.model} de culoare ${this.culoare}, fabricat in anul ${this.anFabricatie}, are viteza de ${this.viteza}km/h si ${this.baterie}%.`);
//     }

//     descarcare() {
//         console.log(`${this.model} are viteza de ${this.viteza}km/h, iar dupa accelerare viteza e ${(this.viteza + 10)}km/h si bateria e ${this.baterie - 5}%.`);
//     }

//     incarcare() {
//         console.log(`${this.model} are viteza de ${this.viteza}km/h, iar dupa franare viteza e ${(this.viteza - 10)}km/h si bateria e ${this.baterie + 10}%.`);
//     }
// }

// const masina1 = new Masina('Ford Focus', 'rosie', 2018, 120);
// const masina2 = new VehiculElectric('Tesla S', 'alba', 2018, 120, 40);

// console.log(masina1, masina2);
// masina1.descriere();
// masina1.accelerare();
// masina1.franare();
// masina2.descriere();
// masina2.descarcare();
// masina2.incarcare();

// 3. Object.create()

const MasinaPrototip = {
    init(model, culoare, anFabricatie, viteza) {
        this.model = model;
        this.culoare = culoare;
        this.anFabricatie = anFabricatie;
        this.viteza = viteza;
    },

    descriere() {
        console.log(`${this.model} de culoare ${this.culoare}, fabricat in anul ${this.anFabricatie}, are viteza de ${this.viteza}km/h.`);
    },

    accelerare() {
        console.log(`${this.model} are viteza de ${this.viteza}km/h, iar dupa accelerare viteza e ${(this.viteza + 10)}km/h.`);
    },

    franare() {
        console.log(`${this.model} are viteza de ${this.viteza}km/h, iar dupa franare viteza e ${(this.viteza - 10)}km/h.`);
    }
}

const VehiculElectricPrototip = Object.create(MasinaPrototip);

VehiculElectricPrototip.init = function(model, culoare, anFabricatie, viteza, baterie) {
    MasinaPrototip.init.call(this, model, culoare, anFabricatie, viteza);
    this.baterie = baterie;
}

const masina1 = Object.create(MasinaPrototip);
masina1.init('Ford Focus', 'rosie', 2018, 120)
const masina2 = Object.create(VehiculElectricPrototip);
masina2.init('Tesla S', 'alba', 2018, 120, 40);
console.log(masina1, masina2);
masina1.descriere();
masina1.accelerare();
masina1.franare();
// masina2.descriere(); functia nu e apelata corect
// masina2.descarcare(); functia nu e creata
// masina2.incarcare(); functia nu e creata