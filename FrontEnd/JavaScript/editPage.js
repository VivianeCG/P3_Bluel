import {createButton} from "./main.js";
//fonction pour lancer l'apparence du mode édition
export function activateEditMode() {
  document.getElementById("edit").style.display = "flex";
  document.getElementById("edit-button").style.display = "flex";
  document.getElementById("login").style.display = "none";
  document.getElementById("logout").style.display = "flex";
  console.log("fonction activateEditMode");
}

//fonction pour le retour à l'apparence normale au clic sur logout
export function deactivateEditMode() {
  document.getElementById("logout").addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById("edit").style.display = "none";
    document.getElementById("edit-button").style.display = "none";
    document.getElementById("logout").style.display = "none";
    document.getElementById("login").style.display = "flex";
    console.log("fonction deactivateEditMode");
  });
}

//apparition et disparition de la modale
const modalWindow = document.querySelector(".modal-container");
export function openModal() {
  const editButton = document.getElementById("edit-button");
  editButton.addEventListener("click", ()=>{
    modalWindow.style.display = 'block'; 
  })
}
export function closeModal() {
  const modalTriggers = document.querySelectorAll(".trigger-modal");
  modalTriggers.forEach(trigger => trigger.addEventListener("click", ()=>{
  modalWindow.style.display = 'none';
  }))
}

//montrer les photos dans la 1e modale
export function showGalleryInModal() {
  const url = "http://localhost:5678/api/works";
  //pour récupérer les travaux depuis le Backend
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      data.forEach((element) => {
        //pour créer les balises figures dans le html
        const galleryInModal = document.querySelector(".edit-photo-container");
        let photoContainer = document.createElement("figure");
        let galleryImage = document.createElement("img");
        let binIcon = document.createElement("i");
        binIcon.classList.add("fa-solid", "fa-trash-can", "bin");
        galleryInModal.appendChild(photoContainer);
        photoContainer.appendChild(galleryImage);
        photoContainer.appendChild(binIcon);
        galleryImage.setAttribute("src", element.imageUrl);
        //galleryImage.style.width = "50%";
      });
    });
}

//supprimer une photo de la 1e modale

//passage de la 1e modale à la 2e et vice-versa
const secondModal= document.querySelector(".edit-add-photo");
const betweenModals = document.querySelectorAll(".change-modal");
export function exchangeModalPage() {
  betweenModals.forEach(trigger => trigger.addEventListener("click",toggleModal2))
  function toggleModal2() {
    secondModal.classList.toggle("activated")
  }
}

//intégrer les différentes catégories dans le formulaire de la 2e modale
export function optionsNamesInForm() {
  const urlCategories = "http://localhost:5678/api/categories";
  fetch(urlCategories)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let numberId = 1;
      data.forEach((element) => {
        //pour créer les boutons des catégories avec leurs noms et id (sauf "Tous")
        let categoryContainerDiv = document.getElementById("photo-legend");
        let option = document.createElement("option");
        option.setAttribute("id", "categorie" + numberId);
        option.setAttribute("value", numberId);
        numberId++;
        categoryContainerDiv.appendChild(option);
        option.innerHTML = element.name;
        console.log(option);
      });
    });
}
//ajouter une photo via le formulaire de la 2e modale

//le bouton valider ne doit être vert que si le formulaire est complet
