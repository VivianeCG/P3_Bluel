import {
  defaultIndexPage,
  createCard,
  createFigure,
  createButton,
} from "./main.js";
//fonction pour lancer l'apparence du mode édition
export function activateEditMode() {
  document.getElementById("edit").style.display = "flex";
  document.getElementById("edit-button").style.display = "flex";
  document.getElementById("login").style.display = "none";
  document.getElementById("logout").style.display = "flex";
  console.log("fonction activateEditMode");
}
//activateEditMode();
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
const modalTriggers = document.querySelectorAll(".trigger-modal");

export function openCLoseModal() {
  modalTriggers.forEach(trigger => trigger.addEventListener("click",toggleModal))
  function toggleModal() {
    modalWindow.classList.toggle("active")
  }
}
//montrer les photos dans la 1e modale

export function showGalleryInModal() {
  const galleryInModal = document.querySelector(".edit-photo-container");
  createCard();
  createFigure();
}

//supprimer une photo de la 1e modale

//passage de la 1e modale à la 2e au clic sur ajouter une photo
const secondModal= document.querySelector(".edit-add-photo");
const betweenModals = document.querySelectorAll(".change-modal");
export function exchangeModalPage() {
  betweenModals.forEach(trigger => trigger.addEventListener("click",toggleModal2))
  function toggleModal2() {
    secondModal.classList.toggle("activated")
  }
}
//passage de la 2e modale à la 1re au clic sur la flèche

//intégrer les différentes catégories dans le formulaire de la 2e modale

//ajouter une photo via le formulaire de la 2e modale

//le bouton valider ne doit être vert que si le formulaire est complet
