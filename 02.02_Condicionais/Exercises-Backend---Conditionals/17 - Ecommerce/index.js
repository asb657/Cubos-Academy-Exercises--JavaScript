const productValue = 10000;
const installments = 10;
const valueAlreadyPaid = 3000;

const finalBalance = productValue - valueAlreadyPaid;
const installmentValue = productValue / installments
const remainingInstallments = finalBalance / (productValue/installments);

const remaining_installments = (finalBalance > 0 ? 
    console.log(`There are ${remainingInstallments} installments of R$ ${installmentValue.toFixed(2)}.`) : 
    console.log(`The product has already been paid.`));
