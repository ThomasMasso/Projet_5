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


//Récupérer les données de l'API

fetch(`http://localhost:3000/api/products/${productId}`)

.then(response => response.json())

.then(value => {

    // création des éléments composant ma carte produit
        
    

    // modif DOM avec les données appelées de l'API

    newItemImg.src = `${value.imageUrl}`;
    newItemImg.alt = `${value.altTxt}`;
    item__title.innerText = `${value.name}`;
    item__price.innerText = `${value.price}`;
    item__description.innerText = `${value.description}`;

    //ajout des enfants suite à la création élément ci-dessus

    
        
})



    
