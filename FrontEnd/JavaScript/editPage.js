import { url } from "./main.js";
//fonction pour lancer l'apparence du mode édition
export function activateEditMode() {
  document.getElementById("edit").style.display = "flex";
  document.getElementById("edit-button").style.display = "flex";
  document.getElementById("login").style.display = "none";
  document.getElementById("logout").style.display = "flex";
  document.getElementById("filtres").style.display = "none";
  document.getElementById("gallery").style.marginTop = "3em";
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
    document.getElementById("filtres").style.display = "flex";
    localStorage.removeItem("token");
    console.log("fonction deactivateEditMode");
  });
}
//apparition et disparition de la modale
const modalWindow = document.querySelector(".modal-container");
export function openModal() {
  const editButton = document.getElementById("edit-button");
  const editAddPhoto = document.querySelector(".edit-add-photo");
  editButton.addEventListener("click", ()=>{
    modalWindow.style.display = 'block'; 
    editAddPhoto.style.display = 'none';
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
        let binButton = document.createElement("button")
        let binIcon = document.createElement("i");
        binIcon.classList.add("fa-solid", "fa-trash-can", "bin");
        binButton.classList.add("bin-button");
        galleryInModal.appendChild(photoContainer);
        photoContainer.appendChild(galleryImage);
        photoContainer.appendChild(binButton);
        binButton.appendChild(binIcon);
        galleryImage.setAttribute("src", element.imageUrl);
        galleryImage.setAttribute("alt", element.title);
        binButton.setAttribute("data-id", element.id);
      });
      listenerOnBinIcon();
    });
}
//récupération du token pour l'ajout et la suppression de travaux
export const token = localStorage.getItem("token");
console.log(token);
//supprimer une photo de la 1e modale
let photoId = document.querySelector("data-id");
function listenerOnBinIcon() {
  const binButtons = document.querySelectorAll(".bin-button");
  binButtons.forEach(button =>{
    button.addEventListener("click", (event) => {
      event.preventDefault();
      photoId = event.target.closest(".bin-button").getAttribute('data-id');
      console.log("bouton cliqué", photoId)
      if (photoId) {
        deletePhoto(photoId);
      }
    })
  })
}
//fonction pour supprimer une photo de la galerie
function deletePhoto(photoId) {
    const urlPhoto = `${url}/${photoId}`;
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    fetch(urlPhoto, requestOptions)
    .then (response => {
      if (response.ok) {
        console.log ("ressource supprimée avec succès");
      } else {
        console.error("erreur lors de la suppression de la ressource: ", response.status);
      }
    })
    .catch(error => {
      console.log("Erreur lors de la suppression de la photo :", error);
    });
}
//passage de la 1e modale à la 2e et vice-versa
const secondModal= document.querySelector(".edit-add-photo");
const changeModal = document.querySelector(".change-modal");
const arrow = document.querySelector(".back-arrow");
export function openSecondModalPage() {
  changeModal.addEventListener("click", ()=>{
    secondModal.style.display = 'block';
    secondModal.classList.toggle("activated");
  })
}
export function backToFirstModal() {
  arrow.addEventListener("click", ()=>{
    secondModal.style.display = 'none';
  })
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
        //pour créer les catégories avec leurs noms et id 
        let categoryContainerDiv = document.getElementById("photo-category");
        let option = document.createElement("option");
        option.setAttribute("id", "categorie" + numberId);
        option.setAttribute("value", numberId);
        numberId++;
        categoryContainerDiv.appendChild(option);
        option.innerHTML = element.name;
      });
    });
}
//ajouter une photo via le formulaire de la 2e modale
const form = document.getElementById("form-add-works");
const photoFile = document.getElementById("file-input");
const titleForm = document.getElementById("photo-name");
const categoryForm = document.getElementById("photo-category");
//avoir un aperçu de la photo avant validation
export function updatePhotoPreview() {
  const photoPreview = document.getElementById("photo-preview");
  const file = photoFile.files[0];
  const label = document.querySelector(".file-label");
  if (file) {
    const reader = new FileReader(); //lis les données des objets
    reader.onload = function(e) {
      photoPreview.src = e.target.result;
      photoPreview.style.display = 'block';
      label.style.display = 'none';
    };
    reader.readAsDataURL(file); // lit les données binaires et les encode en base64 comme URL de données.
  } else {
    photoPreview.style.display = 'none';
  }
  changeValidationButtonColor(); // Vérifier les conditions de validation du bouton en même temps
}
//conditions pour qu'une photo puisse être envoyée
function photoFileConditions() {
  const file = photoFile.files[0];
  const maxSize = 4 * 1024 * 1024; 
  const validTypes = ['image/jpeg', 'image/png'];
  if (file){
    if (file.size > maxSize) {
        alert("Le fichier ne doit pas dépasser 4 Mo.");
        return false;
    }

    if (!validTypes.includes(file.type)) {
        alert("Le fichier doit être au format JPG ou PNG.");
        return false;
    }
  }
  return true;
}
//changement de la couleur du bouton "valider" dans le formulaire
export function changeValidationButtonColor() {
    const button = document.querySelector(".validation-button");
    const titleValue = titleForm.value.trim();
    const fileValid = photoFile.files.length > 0 && photoFileConditions();
    const categoryFormValue = categoryForm.value;
      if (categoryFormValue !== "" && titleValue !== "" && fileValid) {
        button.style.backgroundColor = "rgb(29, 97, 84)";
        button.disabled = false;
      } else {
        button.style.backgroundColor = "#a7a7a7";
        button.disabled = true; //pour que le bouton soit désactivé et de couleur grise si les conditions ne sont pas remplies
      }
}
//écouteurs d'événements pour lancer les fonctions updatePhotoPreview et changeValidationButtonColor
export function listenersOnFormInput() { 
  photoFile.addEventListener("change",  updatePhotoPreview);
  photoFile.addEventListener("change", changeValidationButtonColor);
  titleForm.addEventListener("input",  changeValidationButtonColor);
  categoryForm.addEventListener("change",  changeValidationButtonColor);
}
// fetch et listener sur le formulaire pour envoyer les données
export function listenerOnSubmitForm() {
  form.addEventListener("submit", (event)=> {
    event.preventDefault();
    //récupération des éléments à envoyer dans le formulaire
    const title = document.getElementById("photo-name").value;
    const category = document.getElementById("photo-category").value;
    const formdata = new FormData();
    formdata.append("title", title);
    formdata.append("category", category);
    formdata.append("image", photoFile.files[0]);
     // Configuration de la requête
      const requestOptions = {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
        body: formdata
      };
      // Envoi de la requête à l'API
      fetch(url, requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Your request failed'+ response.statusText);
        }
      return response.json();
      })
      .then(response => {
        console.log(response);
      
      })
      .catch(error => {
        console.error('There was an error with your request:', error);
      });
    })
}


