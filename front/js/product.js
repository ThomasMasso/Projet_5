// Récupérer les paramètres de l'URL

const urlId = window.location.search;
const urlSearchParams = new URLSearchParams(urlId);
const id = urlSearchParams.get("id");


// initialiser les données des produits figurant dans index.html

const item__img = document.getElementsByClassName("item__img");
const item__title = document.getElementById("title");
const item__price = document.getElementById("price");
const item__description = document.getElementById("description");

//Récupérer les données de l'API

fetch(`http://localhost:3000/api/products`)

.then(function(res) {
    if (res.ok) {
        return res.json();
    }
})

.then(value => {

    // création des éléments composant ma carte produit
        
    let newItemImg = document.createElement("img");

    // modif DOM avec les données appelées de l'API

    newItemImg.src = `${value[i].imageUrl}`;
    newItemImg.alt = `${value[i].altTxt}`;
    item__title.innerText = `${value[i].name}`;
    item__price.innerText = `${value[i].price}`;
    item__description.innerText = `${value[i].description}`;

    //ajout des enfants suite à la création élément ci-dessus

    item__img.appendChild(newItemImg);
        
})

    
