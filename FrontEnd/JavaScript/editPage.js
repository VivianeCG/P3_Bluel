import { url } from "./main.js";
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
        //pour créer les boutons des catégories avec leurs noms et id (sauf "Tous")
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
    console.log(urlPhoto);
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
//ajouter une photo via le formulaire de la 2e modale
let form = document.getElementById("form-add-works");
let photoFile = document.getElementById("file-input");
function photoFileConditions() {
    const maxSize = 4 * 1024 * 1024; 
    const validTypes = ['image/jpeg', 'image/png'];

    if (photoFile.size > maxSize) {
        alert("Le fichier ne doit pas dépasser 4 Mo.");
        return;
    }

    if (!validTypes.includes(photoFile.type)) {
        alert("Le fichier doit être au format JPG ou PNG.");
        return;
    }
}
let title = document.getElementById("photo-name").value;
let category = document.getElementById("photo-category").value;
export function changeValidationButtonColor() {
    let button = document.querySelector(".validation-button");
    if (title.trim() !=="" && category !== "") {
      console.log("condition");
      button.setAttribute("style", "background-color: rgb(29, 97, 84);");
    }
    else{
      button.setAttribute("style", "background-color : #a7a7a7");
      console.log("else");
    }
}
// fetch et listener sur le formulaire
export function listenerOnSubmitForm() {
    form.addEventListener("submit", (event)=> {
    event.preventDefault();
    const formdata = new FormData();
    formdata.append("title", title);
    formdata.append("category", category);
    formdata.append("image", photoFile.files[0]);
      const requestOptions = {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
        body: formdata
      };
      fetch(url, requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Your request failed'+ response.statusText);
        }
       // return response.json();
        return response.push(formdata);
      })
      .then(response => {
        console.log(response);
      
      })
    })
}


