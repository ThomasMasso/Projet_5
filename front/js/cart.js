// je sélec et je stocke mon container des produits
const cartItem = document.getElementById('cart__items');

// je selec et je stocke les blocs représentant les parties de l'affichage des produits
const cartItemImg = document.querySelector('.cart__item__img');
const cartItemContent = document.querySelector('.cart__item__content');
const cartItemContentDescription = document.querySelector('.cart__item__content__description');
const cartItemContentSettings = document.querySelector('.cart__item__content__settings');
const cartItemContentSettingsQuantity = document.querySelector('.cart__item__content__settings__quantity');

// je crée les éléments du DOM
const image = document.createElement('img');
const titre = document.createElement('h2');
const couleur = document.createElement('p');
const prix = document.createElement('p');
const quantiteText = document.createElement('p');
const quantiteValeur = document.createElement('input');


// ------------------Test innerHTML--------------

const totalQuantity = document.getElementById('totalQuantity');
const totalPrice = document.getElementById('totalPrice');

let totalPriceNumber = 0;

// je récupère les produits du localStorage
const choixProduits = JSON.parse(localStorage.getItem('productLocalStorage'));
//console.log(choixProduits);
let nunmberItem = choixProduits.length;

choixProduits.forEach((item) => {
    //console.log(item);
    let idPanier = item.id;
    let quantitePanier = item.quantity;
    let couleurPanier = item.color;
    console.log(idPanier, quantitePanier, couleurPanier);

    fetch(`http://localhost:3000/api/products`)

    .then(response => response.json())

    .then(value => {
        //console.log(value);

        for(i = 0; i < value.length; i++) {
            let idAPI = value[i]._id;
            let priceAPI = value[i].price;
            //console.log(idAPI);
            if (idAPI == idPanier) {
                totalPriceNumber += priceAPI*quantitePanier;
                console.log(totalPriceNumber);
                const articleItem = `
                <article class="cart__item" data-id="${value[i]._id}" data-color="${couleurPanier}">
                    <div class="cart__item__img">
                    <img src="${value[i].imageUrl}" alt="${value[i].altTxt}">
                    </div>
                    <div class="cart__item__content">
                    <div class="cart__item__content__description">
                        <h2>${value[i].name}</h2>
                        <p>${couleurPanier}</p>
                        <p>${value[i].price} €</p>
                    </div>
                    <div class="cart__item__content__settings">
                        <div class="cart__item__content__settings__quantity">
                        <p>Qté : </p>
                        <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${quantitePanier}">
                        </div>
                        <div class="cart__item__content__settings__delete">
                        <p class="deleteItem">Supprimer</p>
                        </div>
                    </div>
                    </div>
                </article>
                                    `
                cartItem.innerHTML += articleItem;
                
            };
        };
        
        
    });
    totalQuantity.innerText = nunmberItem+=quantitePanier;
    //totalPrice.innerText = 
    
    
});
    






























// let productLocalStorage = JSON.parse(localStorage.getItem('productLocalStorage'));
// console.log(productLocalStorage);

// for (i = 0; i < productLocalStorage.length; i++) {
//     console.log(productLocalStorage.length);
    

// }


// création des produits, dans le panier, contenu dans le LS (avec boucle for)

// on pourrait pousser en voulant regrouper un meme produit mais de couleur diff 
// l'un après l'autre (à voir si possible et en cb de temps) 
// id fonctionne pas car il y a des lettres mais peut être le prix unitaire
// il faudra faire un copie du tableau Array.from() avant

// filtrer les éléments et n'afficher que les produits dont l'id est présent dans le LS
// méthode pour récup le prix unitaire d'un produit présent dans LS
// 

// 






















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