document.querySelector('.calculateLoan')?.addEventListener('click', function () {
    const loanAmount = document.querySelector('.loanAmount').value;
    const periodPay = document.querySelector('.periodPay').value;
    const interestRate = document.querySelector('.interestRate').value;

    document.querySelector('.interestResult').textContent = (`The interest is: ${calculateLoan(loanAmount, periodPay, interestRate).toFixed(2)} lei.`);
});

function calculateLoan(loanAmount, periodPay, interestRate) {
    return calc(loanAmount, periodPay, interestRate);
}