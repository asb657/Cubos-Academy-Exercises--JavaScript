function discountsneakers(sneakerPrice, walletMoneyRemaining) {
    return (1-(sneakerPrice/walletMoneyRemaining))*100
  };


sneakerPrice = 129
walletMoneyRemaining = 80

 let discount_sneakers = Math.round(discountsneakers(walletMoneyRemaining,sneakerPrice));
 console.log(discount_sneakers);

 let discount_message = `The discount that is gonna be aplied is equal to ${discount_sneakers} %. `;
 console.log(discount_message);



