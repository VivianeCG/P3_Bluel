//fonctions importées
import {
  activateEditMode,
  deactivateEditMode,
  openModal,
  closeModal,
  showGalleryInModal,
  openSecondModalPage,
  backToFirstModal,
  optionsNamesInForm,
  listenerOnSubmitForm,
  listenersOnFormInput,
  updatePhotoPreview
} from "./editPage.js";
// fonction pour créer les balises figures contenant les photos
function createCard(element) {
  let photoContainer = document.createElement("figure");
  let galleryImage = document.createElement("img");
  let photoLegend = document.createElement("figcaption");
  let parentContainer = document.getElementById("gallery");
  photoLegend.innerText = element.title;
  parentContainer.appendChild(photoContainer);
  photoContainer.appendChild(galleryImage);
  photoContainer.appendChild(photoLegend);
  galleryImage.setAttribute("src", element.imageUrl);
  galleryImage.setAttribute("alt", element.title);
}
//fonction pour récupérer les photos lors de l'affichage de la page
export const url = "http://localhost:5678/api/works";
function createFigure() {
  //pour récupérer les travaux depuis le Backend
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      data.forEach((element) => {
        //pour créer les balises figures dans le html
        createCard(element);
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
        //pour créer les boutons des catégories avec leurs noms et id 
        let categoryContainerDiv = document.getElementById("filtres");
        let button = document.createElement("button");
        button.setAttribute("class", "categorie");
        button.setAttribute("id", "categorie" + numberId);
        button.setAttribute("value", numberId);
        numberId++;
        categoryContainerDiv.appendChild(button);
        button.innerHTML = element.name;
      });
    });
}
createButton();
//fonction pour filtrer les travaux "Tous" ou les autres catégories
function filterWorks() {
  document
    .getElementById("filtres")
    .addEventListener("click", function (event) {
      if (event.target && event.target.matches(".categorie")) {
        let buttonValue = event.target.value;
        fetch(url)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            if (buttonValue == 0) {
              const parentContainer = document.getElementById("gallery");
              parentContainer.innerHTML = ""; //pour effacer le contenu précédent
              createFigure();
            } else {
              createFilteredFigure(data, buttonValue);
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
      createCard(element);
    }
  });
}
filterWorks();
//fonction pour lancer le mode édition après la connexion
function connectedMode() {
  if (localStorage.getItem("token")) {
    activateEditMode();
  } else {
    deactivateEditMode();
  }
}
//lancement des différentes fonctions nécessaires dans le mode édition
connectedMode();

deactivateEditMode();

openModal();

closeModal();

showGalleryInModal();

openSecondModalPage();

backToFirstModal();

optionsNamesInForm();

listenerOnSubmitForm();

listenersOnFormInput();

updatePhotoPreview();