//fonction pour créer les balises figure dans le HTML et récupérer les photos
function createFigure() {
  const url = "http://localhost:5678/api/works";
  //pour récupérer les travaux depuis le Backend
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      data.forEach((element) => {
        //pour créer les balises figures dans le html
        let parentContainer = document.getElementById("gallery");
        let photoContainer = document.createElement("figure");
        let galleryImage = document.createElement("img");
        let photoLegend = document.createElement("figcaption");
        photoLegend.innerText = "légende photo";
        parentContainer.appendChild(photoContainer);
        photoContainer.appendChild(galleryImage);
        photoContainer.appendChild(photoLegend);
        galleryImage.setAttribute("src", "");
        galleryImage.setAttribute("alt", "");
        galleryImage.src = element.imageUrl;
        galleryImage.alt = element.title;
        photoLegend.innerHTML = element.title;
      });
    });
}
createFigure();

//fonction pour créer les boutons des différentes catégories
function createButton() {
  const urlCategories = "http://localhost:5678/api/categories";
  fetch(urlCategories)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let numberId = 1;
      data.forEach((element) => {
        //pour créer les boutons des catégories avec leurs noms et id (sauf "Tous")
        let categoryContainerDiv = document.getElementById("filtres");
        let button = document.createElement("button");
        button.setAttribute("class", "categorie");
        button.setAttribute("id", "categorie" + numberId);
        numberId++;
        button.setAttribute("value", numberId);
        categoryContainerDiv.appendChild(button);
        button.innerHTML = element.name;
        console.log(button);
      });
    });
}
createButton();

//récupérer les boutons par id ou class ("categorie" + numberId) class="categorie"
//mettre un eventlistener pour le clic sur le bouton
//l'appel à l'API retourne un tableau, mettre le tableau dans un set?
//boucler sur le set pour récupérer selon les categoryID  ou l'element.id:  pour les objets 1
// 2 pour apparts et 3 pour hotels restos?
// categorie0 attribuée à "tous"
//condition si id categorie et id bouton match alors on affiche les travaux
//par défaut ("tous") affiche tous les travaux
//appeler la fonction createFigure si ça matche? 
// attention faire appel à la fonction createButton dans cette fonction double les boutons
function filterWorks(){
  const url = "http://localhost:5678/api/works";
  //pour récupérer les travaux depuis le Backend
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function(data){
      const setOfWorks = new Set([data]);
      const arrayOfWorks = Array.from(setOfWorks);
      let worksButtonAll = document.getElementById("categorie0");
      let worksButtonObjects = document.getElementById("categorie1");
      let worksButtonFLats = document.getElementById("categorie2");
      let worksButtonHotels = document.getElementById("categorie3");
      
    })
}
filterWorks();