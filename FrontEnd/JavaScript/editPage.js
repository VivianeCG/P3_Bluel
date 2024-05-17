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

const modalWindow = document.querySelector(".modal-container");
//apparition et disparition de la modale
function toggleModal() {
  if (modalWindow.style.display === "none") {
    modalWindow.style.display = "block";
  } else {
    modalWindow.style.display = "none";
  }
}
//faire apparaître la modale au clic sur le bouton modifier
export function openModal() {
  document.getElementById("edit-button").addEventListener("click", (event) => {
    event.preventDefault();
    toggleModal();
    console.log(modalWindow);
  });
}
openModal();
//fermeture de la modale au clic sur la croix ou sur l'overlay
//ne marche pas 
export function closeModal() {
  document.querySelector(".trigger-modal").addEventListener("click", (event) => {
      event.preventDefault();
      toggleModal();
    });
}
closeModal();
//montrer les photos dans la 1e modale

//supprimer une photo de la 1e modale

//passage de la 2e modale à la 1re au clic sur la flèche

//intégrer les différentes catégories dans le formulaire de la 2e modale

//ajouter une photo via le formulaire de la 2e modale

//le bouton valider ne doit être vert que si le formulaire est complet
