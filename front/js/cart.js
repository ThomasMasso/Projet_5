let productsArrayJson = JSON.parse(localStorage.getItem('productLocalStorage'));
let productsArray = [...productsArrayJson];
console.log(productsArray);

fetch("http://localhost:3000/api/products")

.then(response => response.json())

.then(value => {

    for(i = 0; i < value.length; i++) {
        
        let productID = `product.html?id=${value[i]._id}`;
        let price = Number(`${value[i].price}`);
    }
})

console.log(productID);
console.log(price);