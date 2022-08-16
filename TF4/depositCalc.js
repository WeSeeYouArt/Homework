document.querySelector('.calculateInterest')?.addEventListener('click', function () {
    const depositAmount = document.querySelector('.depositAmount').value;
    const depositPeriod = document.querySelector('.depositPeriod').value;
    const depositInterest = document.querySelector('.depositInterest').value; 

    document.querySelector('.depositResult').textContent = (`The interest is: ${depositCalc(depositAmount, depositPeriod, depositInterest).toFixed(2)} lei.`);
});

function depositCalc(depositAmount, depositPeriod, depositInterest) {
    return calc(depositAmount, depositPeriod, depositInterest);
}