// Récupérer les paramètres de l'URL

// récupérer élément URL à partir de "?"" grâce à propriété "search"
const urlId = window.location.search;

// constructeur URLSearchParams pour travailler avec GET de l'URL
const urlSearchParams = new URLSearchParams(urlId);

// récupération de l'id dans URL
const productId = urlSearchParams.get("id");
// console.log(productId);


// initialiser les données des produits figurant dans product.html
// création de l'item img à partir de la classe item__img
const item__img = document.getElementsByClassName("item__img");
const newItemImg = document.createElement("img");
item__img[0].appendChild(newItemImg);

const item__title = document.getElementById("title");
const item__price = document.getElementById("price");
const item__description = document.getElementById("description");
const option = document.getElementsByTagName("option");







//Récupérer les données de l'API

fetch(`http://localhost:3000/api/products/${productId}`)

.then(response => response.json())

.then(value => {

    // modif DOM avec les données appelées de l'API

    newItemImg.src = `${value.imageUrl}`;
    newItemImg.alt = `${value.altTxt}`;
    item__title.innerText = `${value.name}`;
    item__price.innerText = `${value.price}`;
    item__description.innerText = `${value.description}`;
    
    
    
    for(i = 0; i < value.colors.length; i++) {
        const idColors = document.getElementById('colors');
        const optionColors = document.createElement("option");
        optionColors.value = `${value.colors[i]}`;
        optionColors.text = `${value.colors[i]}`;
        idColors.add(optionColors, null);
    }
        
})


// panier = array [id, qté, couleur]
// localstorage pour accès à l'array depuis page panier
// ajout produit panier : si new produit => new elem dans array
//                       si produit présent => incrémtentation de la qté du produit présent array


// créer array localstorage





// déclaration variables pour accès btn
const button = document.getElementById("addToCart");

// vérifier au click du btn qu'une couleur est renseignée ainsi qu'une qté sup à 0
button.addEventListener("click", function() {

    if (option.value != "" && quantity.value >= 1) {

        let productStorage =  [productId, quantity.value, colors.value];
        let arrayLinea = JSON.stringify(productStorage);
        localStorage.setItem('array', arrayLinea);

        window.location.href = "cart.html";
        
    }else {
        alert("Veuillez sélectionner une couleur et une quantité valide (min. 1)");
    }

})









    
