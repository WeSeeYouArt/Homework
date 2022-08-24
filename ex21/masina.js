class Masina {
    constructor(model, viteza) {
        this.model = model;
        this.viteza = viteza;
    }
    accelerare() {
        this.viteza += 10;
    }
    franare() {
        this.viteza -= 10;
    }
}

let masina;

document.querySelector('.mesaj').addEventListener('click', function() {
    const model = document.querySelector('.marcaMasina').value;
    const viteza = parseInt(document.querySelector('.vitezaMasina').value);

    masina = new Masina(model, viteza);
    document.querySelector('.rezultat').textContent = (`Masina e ${model} si are viteza de ${viteza} km/h.`);
});

document.querySelector('.accelerare').addEventListener('click', function() {
    if(masina) {
        masina.accelerare();
        document.querySelector('.rezultat').textContent = (`Masina e ${masina.model} si are viteza de ${masina.viteza} km/h.`);
    }
});

document.querySelector('.franare').addEventListener('click', function() {
    if(masina) {
        masina.franare();
        document.querySelector('.rezultat').textContent = (`Masina e ${masina.model} si are viteza de ${masina.viteza} km/h.`);
    }
});