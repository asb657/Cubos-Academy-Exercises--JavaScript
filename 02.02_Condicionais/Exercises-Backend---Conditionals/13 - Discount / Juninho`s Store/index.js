var formOfPayment = "credit";
var productPrice = 130;


const creditDiscount = .05
const debit_cashDiscount = .1
const checkDiscount = .03


if (formOfPayment === "credit") {
    console.log(`Amount to be paid: R$ ${productPrice*(1-creditDiscount).toFixed(2)}.`);
} else if (formOfPayment === "cash" || formOfPayment === "debit") {
    console.log(`Amount to be paid: R$ ${productPrice*(1-debit_cashDiscount).toFixed(2)}.`);
} else if (formOfPayment === "check") {
    console.log(`Amount to be paid: R$ ${productPrice*(1-checkDiscount).toFixed(2)}.`);
} else {
    console.log("Review payment formats.");
}

