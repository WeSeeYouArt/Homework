class Masina {
    constructor(model, viteza) {
        this.model = model;
        this.viteza = viteza;
    }
    descriere() {
        document.querySelector('.rezultat').textContent = (`Masina e ${this.model} si are viteza de ${this.viteza} km/h.`);
    }
    accelerare() {
        this.viteza += 10;
    }
    franare() {
        this.viteza -= 10;
    }
}

document.querySelector('.mesaj').addEventListener('click', function() {
    const model = document.querySelector('.marcaMasina').value;
    const viteza = parseInt(document.querySelector('.vitezaMasina').value);

    masina = new Masina(model, viteza);
    masina.descriere();
});

document.querySelector('.accelerare').addEventListener('click', function() {
    if(masina) {
        masina.accelerare();
        masina.descriere();
    }
});

document.querySelector('.franare').addEventListener('click', function() {
    if(masina) {
        masina.franare();
        masina.descriere();
    }
});