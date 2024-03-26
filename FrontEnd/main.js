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
      let numberId = 0;
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
        //console.log(button);
      });
    });
}
createButton();

function filterWorks(){
  let filterButtons = document.querySelectorAll(".categorie");
  const url = "http://localhost:5678/api/works";
  for (const button of filterButtons) {
    button.addEventListener("click", () => {
      fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function(data){
      })
      console.log(button);
      if (button.value==0) {
        createFigure();
        console.log("testTous");
      } else if (button.value==1){
        console.log("testAutresBoutons");
      }
    })
    
  }
}
filterWorks();
