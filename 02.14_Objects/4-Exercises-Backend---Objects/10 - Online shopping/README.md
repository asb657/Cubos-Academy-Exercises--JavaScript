![](https://i.imgur.com/xG74tOh.png)

# Exercise 10

## Online shopping

1. Below, we have some products available for sale in an online store and a list of registered customers. Add the product to the user's cart whenever prompted.

The format of the item in the cart must follow the following pattern:

```javascript
{
    item: {
        name: 'Samsung TV 4K',
        valueInCents: 129900
    },
    quantity: 1
}
```

```javascript
// customers
const patricia = { name: "Patricia", cart: [] }
const carlos = { name: "Carlos", cart: [] }
const renato = { name: "Renato", cart: [] }
const jose = { name: "Jose", cart: [] }
const roberto = { name: "Roberto", cart: [] }

// products
const tv = { name: "Samsung TV 4K", valueInCents: 129900 }
const notebook = { name: "Dell notebook", valueInCents: 399990 }
const mouse = { name: "Mouse MX Master 3", valueInCents: 23000 }
const keyboard = { name: "Keychron K8 Keyboard", valueInCents: 50000 }
const cableUsb = { name: "Cable USB 2 Meters", valueInCents: 1990 }
const charger = { name: "Portable charger", valueInCents: 4590 }
const webcam = { name: "Webcam C920s", valueInCents: 80000 }
const monitor = { name: "Monitor LG 29 FHD", valueInCents: 129900 }
```

A. Add a tv, two usb cables and a webcam for José

B. Add two notebooks for Carlos

C. Add a keyboard, two usb cables, a charger, a mouse and a monitor for Patricia

D. Add five webcams for Renato

E. Add a webcam, two usb cables and a monitor for Roberto

Test with other examples.

Commit the result.

---