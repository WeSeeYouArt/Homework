class Masina {
    constructor(model, viteza, anFabricatie) {
        this.model = model;
        this.viteza = viteza;
        this.anFabricatie = anFabricatie;
    }
    descriere() {
        document.querySelector('.rezultat').textContent = (`Masina e ${this.model}, din anul ${this.anFabricatie} si are viteza de ${this.viteza} km/h.`);
    }
    accelerare() {
        this.viteza += 10;
    }
    franare() {
        if (this.viteza - 10 < 0) {
            this.viteza = 0;
        }
        else {
            this.viteza -= 10;
        }
    }
}

document.querySelector('.mesaj').addEventListener('click', function() {
    const model = document.querySelector('.marcaMasina').value;
    const viteza = parseInt(document.querySelector('.vitezaMasina').value);
    const anFabricatie = parseInt(document.querySelector('.anFabricatie').value);

    masina = new Masina(model, viteza, anFabricatie);
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