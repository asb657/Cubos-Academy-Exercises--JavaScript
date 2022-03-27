const numeroCartao = '1111222233334444';

String.prototype.replaceAtIndex = function(_index, _newValue) {
    return this.substr(0, _index) + _newValue + this.substr(_index + _newValue.length)
}

final_numeroCartao1 = numeroCartao.replaceAtIndex(4,"*");
final_numeroCartao2 = final_numeroCartao1.replaceAtIndex(5,"*");
final_numeroCartao3 = final_numeroCartao2.replaceAtIndex(6,"*");
final_numeroCartao4 = final_numeroCartao3.replaceAtIndex(7,"*");
final_numeroCartao5 = final_numeroCartao4.replaceAtIndex(8,"*");
final_numeroCartao6 = final_numeroCartao5.replaceAtIndex(9,"*");
final_numeroCartao7 = final_numeroCartao6.replaceAtIndex(10,"*");
final_numeroCartao8 = final_numeroCartao7.replaceAtIndex(11,"*");


console.log(final_numeroCartao8); 