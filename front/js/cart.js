// je sélec et je stocke mon container des produits
const cartItems = document.getElementById('cart__items');
//console.log(cartItems);

// elements que je dois récupérer pour l'affichage produit
/*const produit = {
    id: id.value,
    nom: nom.value,
    prix: prix.value,
    imageUrl: imageUrl.value,
    altTxt: altTxt.value,
    couleur: couleur.value,
    quantite: quantite.value,
};*/

// transformation de la valeur stockée dans localStorage au format d'origine
const choixProduit = JSON.parse(localStorage.getItem('productLocalStorage'));
console.log(choixProduit);

// création du tableau regroupant les produits du localStorage
const listeProduits = [...choixProduit];
console.log(listeProduits);

//récupération des éléments composant chaque produit du localStorage
listeProduits.forEach(produit => {
    let idValue = produit.id;
    let colorValue = produit.color;
    let quantityValue = produit.quantity;
});

console.log(idValue);




































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