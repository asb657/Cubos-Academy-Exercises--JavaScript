function bhaskara1(a,b,c) {
    return (-b+(Math.sqrt(b**2-4*a*c)))/(2*a)
  };

  function bhaskara2(a,b,c) {
    return (-b-(Math.sqrt(b**2-4*a*c)))/(2*a)
  };

  function rootsSum(b,a) {
    return (-b/a)
  };

  function rootsProduct(c,a) {
    return (c/a)
  };

a = 2
b = -3
c = -5

let x1 = bhaskara1(a,b,c);
 console.log(x1);

 let x2 = bhaskara2(a,b,c);
 console.log(x2);

 let roots_sum = rootsSum(b,a);
 console.log(roots_sum);

 let roots_product = rootsProduct(c,a);
 console.log(roots_product);

 let bhaskara_message = `Considering en quadratic equation in which a = ${a}, b = ${b} e c = ${c}, we have: ${x1} and ${x2} as the roots,
 the roots sum equals to ${roots_sum} and the roots product equals to ${roots_product}.`

 console.log(bhaskara_message);
