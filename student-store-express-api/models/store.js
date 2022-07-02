const { storage } = require("../data/storage.js")
const { BadRequestError } = require("../utils/errors");
// List all products currently in the db.json file

// Fetch a single product by its id
// Create a purchase order

function findProductsById(products, id) {
    if (typeof id === 'string') {
        return products.find((product) => product.id === id);
    }
}

class Store {
    static calcSubTotal(cart) {
        let subtotal = 0;
        let shoppingCartSoFar = new Set();
        for (let i = 0; i < cart.length; i++) {
            // if (!cart[i].hasOwnProperty("itemId") && !cart.hasOwnProperty("quantity")) {
            //     throw new BadRequestError("Missing item id or item quantity")
            // }
            if (shoppingCartSoFar.has(cart[i].itemId)) {
                throw new BadRequestError("Duplicate items in cart")
            }
            subtotal += Store.fetchProductById(cart[i].itemId)["price"] * cart[i].quantity
            shoppingCartSoFar.add(cart[i].itemId);
        }
        return subtotal.toFixed(2);

    }
    static calculateTaxes(subtotal) {
        let taxes = subtotal * 0.0875;
        return taxes.toFixed(2);
    }
    static totalWithTax(subtotal) {
        let total = subtotal * 1.0875;
        console.log("total = ", total)
        return total.toFixed(2);
    }
    static listProducts() {
        return storage.get("products");
    }
    static fetchProductById(productId) {
        let prods = this.listProducts();
        console.log(prods[productId - 1]);
        return prods[productId - 1];
    }
    // static createReceipt()
    static getUserReciept(name, email, cart) {
        let userReceipt = []
        userReceipt.push(`Hi ${name}, your receipt has been mailed to this address ${email}! Thanks for shopping with us`)
        cart.forEach(item => {
            let prod = this.fetchProductById(item.itemId)
            userReceipt.push(`There were a total of ${item.quantity} ${prod.name} bought for $${prod.price.toFixed(2)}each for a total of ${(prod.price * item.quantity).toFixed(2)}`)
        })
        return userReceipt
    }
    static purchaseProducts(cart, userInfo) {
        if (!cart || !Object.keys(cart).length) {
            throw new BadRequestError('No cart or items in cart found to checkout');
        }
        if (!userInfo || !Object.keys(userInfo).length) {
            throw new BadRequestError('No user info to checkout with');

        }
        if (!userInfo.hasOwnProperty('name') || !userInfo.hasOwnProperty('email')) {
            throw new BadRequestError('Missing name or email');
        }
        const products = storage.get('products');
        const subtotal = this.calcSubTotal(cart);
        const taxes = this.calculateTaxes(subtotal)
        console.log("subtotal")
        const total = this.totalWithTax(subtotal);
        // const receipt = this.createReceipt({
        //     cart, subtotal, total, products, userInfo
        // })
        const currentDate = new Date()
        const purchase = {
            id: products.length,
            name: userInfo.name,
            email: userInfo.email,
            order: cart,
            subtotal: subtotal,
            taxes: taxes,
            total: total,
            receipt: Store.getUserReciept(userInfo.name, userInfo.email, cart),
            createdAt: currentDate.toString()
        };
        storage.add('products', purchase)
        return purchase;
    }
}


module.exports = Store;
