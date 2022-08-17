class TipMasina {
    constructor (masina, viteza, vitezaDupaAccelerare) {
        this.masina = masina;
        this.viteza = viteza;
        this.vitezaDupaAccelerare = vitezaDupaAccelerare;
    }
    accelerare() {
        let vitezaDupaAccelerare = this.viteza +10;
    }
}

document.querySelector('.mesaj').addEventListener('click', function () {
    const masina = document.querySelector('.marcaMasina').value;
    const viteza = document.querySelector('.vitezaMasina').value;

    document.querySelector('.rezultat').textContent = (`Masina e ${masina} si are viteza de ${viteza}km/h.`);
});

document.querySelector('.accelerare').addEventListener('click', function () {
    const masina = document.querySelector('.marcaMasina').value;
    const viteza = document.querySelector('.vitezaMasina').value;


    document.querySelector('.rezultat').textContent = (`Masina e ${masina} si are viteza de ${viteza}km/h.`);
});

document.querySelector('.franare').addEventListener('click', function () {
    const masina = document.querySelector('.marcaMasina').value;
    const viteza = document.querySelector('.vitezaMasina').value;

    document.querySelector('.rezultat').textContent = (`Masina e ${masina} si are viteza de ${viteza}km/h.`);
});