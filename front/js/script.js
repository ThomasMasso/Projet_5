// initialiser les données des produits figurant dans index.html

const items = document.getElementById("items");

//Récupérer les données de l'API

fetch("http://localhost:3000/api/products")

.then(response => response.json())

.then(value => {

    for(i = 0; i < value.length; i++) {

        let newProductLink = document.createElement("a");

        let newArticle = document.createElement("article");
        let newProductImg = document.createElement("img");
        let newProductTitle = document.createElement("h3");
        let newProductDescription = document.createElement("p");

        newProductLink.href = `product.html?${value[i]._id}`;

        newProductImg.src = `${value[i].imageUrl}`;
        newProductImg.alt = `${value[i].altTxt}`;
        newProductTitle.innerText = `${value[i].name}`;
        newProductDescription.innerText = `${value[i].description}`;

        newProductTitle.classList.add("productName");
        newProductDescription.classList.add("productDescription");

        items.appendChild(newProductLink);

        newArticle.appendChild(newProductImg);
        newArticle.appendChild(newProductTitle);
        newArticle.appendChild(newProductDescription);
        newProductLink.appendChild(newArticle);
    }
})
