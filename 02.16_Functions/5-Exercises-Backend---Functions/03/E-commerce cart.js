const shoppingCart = {
    clientName: "Guido Bernal",
    products: [
        {
            id: 1,
            name: "T-Shirt",
            qty: 3,
            unitPrice: 3000
        },
        {
            id: 2,
            name: "Shorts",
            qty: 2,
            unitPrice: 5000
        }
    ],
    summaryPrint() {

        console.log(`Client: ${this.clientName}`);
        console.log(`Total itens: ${this.calculateTotalItens()} itens`);
        console.log(`Total amount: R$ ${this.calculateTotalToPay()}`);

    },
    addproduct(product) {

        let thereIsASameProduct = false;

        for (const item of this.products) {
            if (product.id === item.id) {
                thereIsASameProduct = true;
                item.qty += product.qty;
            }
        }

        if (!thereIsASameProduct) {
            this.products.push(product);
        }

    },
    detailsPrint() {

        console.log(`Client: ${this.clientName}`);

        for (const item of this.products) {
            console.log(`Item ${item.id} - ${item.name} - ${item.qty} und - R$ ${((item.qty * item.unitPrice) / 100).toFixed(2)}`);
        }

        console.log(`Total itens: ${this.calculateTotalItens()} itens`);
        console.log(`Total amount: R$ ${this.calculateTotalToPay()}`);

    },
    calculateTotalItens() {

        let totalItens = 0;

        for (const item of this.products) {
            totalItens += item.qty;
        }
        return totalItens;

    },
    calculateTotalToPay() {

        let totalAPagar = 0;

        for (const item of this.products) {
            totalAPagar += item.qty * item.unitPrice;
        }
        return (totalAPagar / 100).toFixed(2);

    },
    calculateDiscount() {

        let itensDiscount = 0;
        let totalDiscount = 0;
        let finalDiscount = 0;

        if (this.calculateTotalItens() > 4) {
            itensDiscount = Infinity;
            for (let item of this.products) {
                if (itensDiscount > item.unitPrice) {
                    itensDiscount = item.unitPrice;
                }
            }
        }

        if (this.calculateTotalToPay() > 100) {
            totalDiscount = this.calculateTotalToPay() * 0.1 * 100;
        }

        if (itensDiscount > totalDiscount) {
            finalDiscount = itensDiscount;
        } else {
            finalDiscount = totalDiscount;
        }

        return finalDiscount / 100;

    }
}

shoppingCart.detailsPrint();
console.log(shoppingCart.calculateDiscount());

const newShorts = {
    id: 2,
    name: "Shorts",
    qty: 3,
    unitPrice: 5000
}
shoppingCart.addproduct(newShorts);
//shoppingCart.summaryPrint();
shoppingCart.detailsPrint();
console.log(shoppingCart.calculateDiscount());

const newTenis = {
    id: 3,
    name: "Tenis",
    qty: 1,
    unitPrice: 10000
}
shoppingCart.addproduct(newTenis);
//shoppingCart.summaryPrint();
shoppingCart.detailsPrint();
console.log(shoppingCart.calculateDiscount());



