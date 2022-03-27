
const orderQueue = ["order 12", "order 15", "order 14"];


var Arr = [1, 7, 2, 8, 3, 4, 5, 0, 9];

for (var i = 1; i < orderQueue.length; i++)
    for (var j = 0; j < i; j++)
        if (orderQueue[i] < orderQueue[j]) {
          var x = orderQueue[i];
          orderQueue[i] = orderQueue[j];
          orderQueue[j] = x;
        }

console.log(orderQueue);