


fetch("http://localhost:3000/api/products")

.then(response => response.json())

.then(value => {

   

    for(i = 0; i < value.length; i++) {
        
        let productID = `${value[i]._id}`;
        let apiPrice = Number(`${value[i].price}`);

        let productsJson = JSON.parse(localStorage.getItem('productLocalStorage'));
        let productLocalStorage = [...productsJson];

        for (i = 0; i < productLocalStorage[i].length; i++) {
            if (productLocalStorage[i].id === productID) {
                //return console.log("ok");
                let newArticle = document.createElement('article');
                newArticle.classList.add('cart__item');
                newArticle.setAttribute('data-id', '{product-ID}');
                newArticle.setAttribute('data-color', '{product-color}');
                newArticle.dataset.id = productLocalStorage[i].id;
                newArticle.dataset.color = productLocalStorage[i].color;

                let divCartItemImg = document.createElement('div');
                divCartItemImg.classList.add('cart__item__img');

                let newImg = document.createElement('img');
                newImg.src = `${value[i].imageUrl}`;
                newImg.alt = `${value[i].altTxt}`;

                let divCartItemContent = document.createElement('div');
                divCartItemContent.classList.add('cart__item__content');

                let divCartItemContentDescription = document.createElement('div');
                divCartItemContentDescription.classList.add('cart__item__content__description');

                let newH2 = document.createElement('h2');

                let paraColor = document.createElement('p');
                let paraPrice = document.createElement('p');
                

                let divCartItemContentSettings = document.createElement('div');
                divCartItemContentSettings.classList.add('cart__item__content__settings');

                let divCartItemContentSettingsQuantity = document.createElement('div');
                divCartItemContentSettingsQuantity.classList.add('cart__item__content__settings__quantity');

                let paraQuantity = document.createElement('p');

                let inputQuantity = document.createElement('input');
                inputQuantity.setAttribute('type', 'number');
                inputQuantity.setAttribute('name', 'itemQuantity');
                inputQuantity.setAttribute('min', '1');
                inputQuantity.setAttribute('max', '100');
                inputQuantity.classList.add('itemQuantity');

                let divCartItemContentSettingsDelete = document.createElement('div');
                divCartItemContentSettingsDelete.classList.add('cart__item__content__settings__delete');

                let paraDeleteItem = document.createElement('p');
                paraDeleteItem.classList.add('deleteItem');

                newArticle.appendChild(divCartItemImg);
                divCartItemImg.appendChild(newImg);

                newArticle.appendChild(divCartItemContent);
                divCartItemContent.appendChild(divCartItemContentDescription);
                divCartItemContentDescription.appendChild(newH2);
                divCartItemContentDescription.appendChild(paraColor);
                divCartItemContentDescription.appendChild(paraPrice);

                divCartItemContent.appendChild(divCartItemContentSettings);
                divCartItemContentSettings.appendChild(divCartItemContentSettingsQuantity);
                divCartItemContentSettingsQuantity.appendChild(paraQuantity);
                divCartItemContentSettingsQuantity.appendChild(inputQuantity);

                divCartItemContentSettings.appendChild(divCartItemContentSettingsDelete);
                divCartItemContentSettingsDelete.appendChild(paraDeleteItem);
            }
        }
    }

    
    
})




/* approche procédurale avec localStorage

function saveBasket(basket) {
    localStorage.setItem('basket', JSON.stringify(basket)); // key value   -- le stringify sert à sérialiser les données envoyées (les tableaux et objets ne sont pas lus en JSON)
}

function getBasket() {
    let basket = localStorage.getItem('basket'); // récup clé enregistée
    if (basket == null) {
        return [];
    } else {
        return JSON.parse(basket);
    }
}

function addBasket(product) {
    let basket = getBasket();
    let foundProduct = basket.find(p => p.id == product.id);
    if (foundProduct != undefined) {
        foundProduct.quantity++;
    } else {
        product.quantity = 1;
        basket.push(product);
    }
    saveBasket(basket);
}

function removeFromBasket(product) {
    let basket = getBasket();
    basket = basket.filter(p => p.id != product.id);
    saveBasket(basket);
}

function changeQuantity(product, quantity) {
    let basket = getBasket();
    let foundProduct = basket.find(p => p.id == product.id);
    if (foundProduct != undefined) {
        foundProduct.quantity += quantity;
        if (foundProduct.quantity <= 0) {
            removeFormBasket(foundProdut);
        } else {
            saveBasket(basket);
        }
    }   
}

function getNumberProduct() {
    let basket = getBasket();
    let number = 0;
    for (let product of basket) {
        number += product.quantity;
    }
    return number;
}

function getTotalPrice() {
    let basket = getBasket();
    let total = 0;
    for (let product of basket) {
        total += product.quantity * product.price;
    }
    return total;
}

*/