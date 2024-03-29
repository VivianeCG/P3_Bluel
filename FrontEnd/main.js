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
        button.setAttribute("value", numberId);
        numberId++;
        categoryContainerDiv.appendChild(button);
        button.innerHTML = element.name;
        console.log(button);
      });
    });
}
//createButton();
function filterWorks() { //fonction pour filtrer les travaux "Tous" ou les autres catégories
  const url = "http://localhost:5678/api/works";
  document.getElementById("filtres").addEventListener("click", function(event) {
    if (event.target && event.target.matches(".categorie")) {
      let buttonValue = event.target.value;
      fetch(url)
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          console.log(event.target);
          if (buttonValue == 0) {
            const parentContainer = document.getElementById("gallery");
            parentContainer.innerHTML = ""; //pour effacer le contenu précédent
            createFigure();
            console.log("testTous");
          } else {
            createFilteredFigure(data, buttonValue)
            console.log("testAutresBoutons");

          }
        });
    }
  });
}
// Fonction pour créer les balises figure en filtrant les photos en fonction de l'ID de la catégorie
function createFilteredFigure(data, buttonValue) {
  const parentContainer = document.getElementById("gallery");
  parentContainer.innerHTML = ""; // Effacer le contenu précédent
  data.forEach((element) => {
    if (element.categoryId == buttonValue) {
      let photoContainer = document.createElement("figure");
      let galleryImage = document.createElement("img");
      let photoLegend = document.createElement("figcaption");
      photoLegend.innerText = element.title;
      parentContainer.appendChild(photoContainer);
      photoContainer.appendChild(galleryImage);
      photoContainer.appendChild(photoLegend);
      galleryImage.setAttribute("src", element.imageUrl);
      galleryImage.setAttribute("alt", element.title);
    }
  });
}
createButton();
filterWorks();


