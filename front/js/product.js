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


const button = document.getElementById("addToCart");





button.addEventListener("click", function(e) {

    e.preventDefault();

    if (option.value != "" && quantity.value >= 1) {

        let addProduct = {
            id : productId, 
            quantity : Number(quantity.value), 
            color : colors.value
        };
        
        let productLocalStorage = [];


        function retrieveArray() {
            let productsJson = JSON.parse(localStorage.getItem('productLocalStorage'));
            let productLocalStorage = [...productsJson];
            let trouver = 0;
        
            for (let i = 0; i < productLocalStorage.length; i++) {
        
                if (productLocalStorage[i].id === addProduct.id && productLocalStorage[i].color === addProduct.color) {
        

                    productLocalStorage[i].quantity += addProduct.quantity;
                    trouver = 1;
                };
        
            };
            if (trouver === 0) {
                productLocalStorage.push(addProduct);
            }
            localStorage.clear();
            localStorage.setItem('productLocalStorage', JSON.stringify(productLocalStorage));
        }
        
        function addStorage() {
            productLocalStorage.push(addProduct);
            localStorage.setItem('productLocalStorage', JSON.stringify(productLocalStorage));
        }

        if (localStorage.length > 0) {
            retrieveArray();
        } else {
            addStorage();
        }

        
        //window.location.href = "cart.html";
        return
        
    }else {
        
        alert("Veuillez sélectionner une couleur et une quantité valide (min. 1)");

    }

})










    
