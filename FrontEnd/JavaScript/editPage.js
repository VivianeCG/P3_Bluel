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
      });
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
export function listenerOnBinIcon() {
  const binButtons = document.querySelectorAll(".bin-button");
  binButtons.forEach(button =>{
    button.addEventListener("click", (data) => {
      const photoId = element.target.getAttribute(data.id);
      console.log("bouton cliqué")
      deletePhoto();
    })
  })
}

export function deletePhoto() {
  try {
    const urlPhoto = `${url}/${id}`;
    console.log(urlPhoto);
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    fetch(urlPhoto, requestOptions)
    .then(response => {
      if (!response.ok) {
          throw new Error('Failed attempt');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      showGalleryInModal();
    })

  } catch (Error) {
    console.log("Erreur lors du lancement de la fonction");
  }
}
//ajouter une photo via le formulaire de la 2e modale
let form = document.getElementById("form-add-works");

export function changeValidationButtonColor() {
    let photoFile = document.getElementById("file-input");
    let fileTitle = document.getElementById("photo-name").value;
    let fileCategory = document.getElementById("photo-category").value;
    let button = document.querySelector(".validation-button");
    if (fileTitle.trim() !=="" && fileCategory !== "") {
      console.log(button);
      button.setAttribute("style", "background-color: rgb(29, 97, 84);");
    }
}
export function listenerOnSubmitForm() {
    form.addEventListener("submit", (event)=> {
    event.preventDefault();
    const formdata = new FormData(form);
      formdata.forEach((value, key) => {
        console.log(key, value);
    });
    
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
          console.error('Erreur du serveur:', errorData);
            throw new Error('Your request failed'+ response.statusText);
        }
        return response.json();
      })
      .then(response => {
        console.log(response);
      
      })
    })
}



    //formdata.append("photo-name", fileTitle);
    //formdata.append("photo-category", fileCategory);
    //formdata.append("file-input", photoFile.files[0]);

//le bouton valider ne doit être vert que si le formulaire est complet
