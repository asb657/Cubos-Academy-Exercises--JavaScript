var monthlyIncomeInBRL = 3_000;
var completedMonths = 62;
var amountAlreadyPaid = 10_000;
const courseValue = 18_000
const maxMonths = 60

const balance = courseValue - amountAlreadyPaid
const installmentValue = monthlyIncomeInBRL * .18
const remainingInstallment = balance / installmentValue

if(monthlyIncomeInBRL < 2000) {
    console.log(`The value of this month's installment is R$ 0 BRL.
    No amount is pending because the student's income is below the minimum amount of R$ 2000 BRL. `);
} else if (completedMonths > 60 || amountAlreadyPaid > 18000) {
    console.log(`The course has already been paid by the student.`);
} else {
    console.log(`The value of the installment is R$ ${installmentValue.toFixed(2)}, the pending balance is 
    R$ ${balance.toFixed(2)} BRL, and the expectation of installments according to the student's income is about ${remainingInstallment.toFixed(0)} parcelas.`);
}

