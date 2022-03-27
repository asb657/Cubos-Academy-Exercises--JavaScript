const tv = { name: "Samsung TV 4K", valueInCents: 129900 }
const notebook = { name: "Dell notebook", valueInCents: 399990 }
const mouse = { name: "Mouse MX Master 3", valueInCents: 23000 }
const keyboard = { name: "Keychron K8 Keyboard", valueInCents: 50000 }
const cableUsb = { name: "Cable USB 2 Meters", valueInCents: 1990 }
const charger = { name: "Portable charger", valueInCents: 4590 }
const webcam = { name: "Webcam C920s", valueInCents: 80000 }
const monitor = { name: "Monitor LG 29 FHD", valueInCents: 129900 }

const patricia = { name: "Patricia", cart: [] }
const carlos = { name: "Carlos", cart: [] }
const renato = { name: "Renato", cart: [] }
const jose = { name: "Jose", cart: [] }
const roberto = { name: "Roberto", cart: [] }


jose.shopping.push(
  tv,
  (itens = 1),
  webcam,
  (itens = 1),
  mouse,
  (itens = 2)
)

carlos.shopping.push(notebook, (itens = 2))

patricia.shopping.push(
  teclado,
  (itens = 1),
  caboUsb,
  (itens = 2),
  carregador,
  (itens = 1),
  mouse,
  (itens = 1),
  monitor,
  (itens = 1)
)

renato.shopping.push(webcam, (itens = 5))

roberto.shopping.push(
  webcam,
  (itens = 1),
  caboUsb,
  (itens = 2),
  monitor,
  (itens = 1)
)

console.log(patricia.shopping)
console.log(carlos.shopping)
console.log(renato.shopping)
console.log(jose.shopping)
console.log(roberto.shopping)
