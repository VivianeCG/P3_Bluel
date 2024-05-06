//importation des fonctions pour créer dynamiquement la galerie photo
import { parentContainer } from "./main.js";
import { createCard } from "./main.js";
import { createFigure } from "./main.js";

//importation de la fonction permettant de récupérer le token pour passer en mode édition
import { saveToken } from "./pageConnexion.js";

//faire apparaître le bandeau "mode édition" et le bouton "modifier" lorsque que l'utilisateur est connecté.
function showConnectedToEditPage() {
    saveToken
    const editHeader = document.querySelector(".edit");
    const editButton = document.querySelector(".edit-button");
    if (saveToken === true) {
        editHeader.style.visibility = 'visible';
        editButton.style.visibility = 'visible';
    }
}
showConnectedToEditPage();

//créer la première partie de la modale
function createModalGallery() {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay','trigger-modal');
    const editModal = document.createElement('div');
    editModal.classList.add('edit-modal');
    const editGallery = document.createElement('div');
    editGallery.classList.add('edit-gallery');
    const modalController = document.createElement('div');
    modalController.classList.add('modal-controller');
    const closeButton = document.createElement('button');
    closeButton.classList.add('trigger-modal','modal-button');
    closeButton.innerText = 'X';
    const galleryTitle = document.createElement('h3');
    galleryTitle.innerText = 'Galerie photo';
    const editPhotoContainer = document.createElement('div');
    editPhotoContainer.classList.add('edit-photo-container','gallery');
    //utiliser les fonctions importées pour créer la galerie dans la modale
    const addPhotoButton = document.createElement('button');
    addPhotoButton.classList.add('add-a-photo');
    addPhotoButton.innerText = 'Ajouter une photo';
    document.body.appendChild(overlay);
    overlay.appendChild(editModal);
    editGallery.appendChild(modalController);
    editGallery.appendChild(galleryTitle);
    editGallery.appendChild(editPhotoContainer);
    editGallery.appendChild(addPhotoButton);
    modalController.appendChild(closeButton);
}
//createModalGallery();

//créer la deuxième partie de la modale
function createModalToAddPhotos() {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay','trigger-modal');
    const editModal = document.createElement('div');
    editModal.classList.add('edit-modal');
    const editAddPhoto = document.createElement('div');
    editAddPhoto.classList.add('edit-add-photo');
    const buttonsEditAddPhoto = document.createElement('div');
    buttonsEditAddPhoto.classList.add('buttons-edit-add-photo');
    const backButton = document.createElement('button');
    backButton.classList.add('modal-button');
    const backIcon= document.createElement('i');
    backIcon.classList.add('fa-solid','fa-arrow-left');
    backButton.appendChild(backIcon);
    const closeButton = document.createElement('button');
    closeButton.classList.add('trigger-modal','modal-button');
    closeButton.innerText = 'X';
    const addPhotoTitle = document.createElement('h3');
    addPhotoTitle.innerText = 'Ajout Photo';
    const form = document.createElement('form');
    const editPhotoContainerAddPhoto = document.createElement('div');
    editPhotoContainerAddPhoto.classList.add('edit-photo-container');
    const fileDrop = document.createElement('div');
    fileDrop.classList.add('file-drop');
    const fileInput= document.createElement('input');
    fileInput.setAttribute('type','file');
    fileInput.setAttribute('id','file-input');
    fileInput.classList.add('file-input');
    fileInput.setAttribute('accept','image/*');
    const fileLabel = document.createElement('label');
    fileLabel.setAttribute('for','file-input');
    fileLabel.classList.add('file-label');
    const imageIcon = document.createElement('i');
    imageIcon.classList.add('fa-regular','fa-image','photo-icon');
    const fileInputButton = document.createElement('span');
    fileInputButton.setAttribute('id','file-input-button');
    fileInputButton.innerText = '+ Ajouter photo';
    const fileSizeInfo = document.createElement('span');
    fileSizeInfo.innerText = 'jpg, png: 4mo max';
    const photoIdentifiers = document.createElement('div');
    photoIdentifiers.classList.add('photo-identifiers');
    const titleLegend = document.createElement('legend');
    titleLegend.classList.add('form-legend');
    titleLegend.innerText = 'Titre';
    const titleInput = document.createElement('input');
    titleInput.setAttribute('type','text');
    titleInput.setAttribute('name','photo-name');
    titleInput.setAttribute('id','photo-name');
    const categoryLegend = document.createElement('legend');
    categoryLegend.classList.add('form-legend');
    categoryLegend.innerText = 'Catégorie';
    const categorySelect = document.createElement('select');
    categorySelect.setAttribute('name','photo-legend');
    categorySelect.setAttribute('id','photo-legend');
    const emptyOption = document.createElement('option');
    emptyOption.setAttribute('value','empty');
    const objetsOption = document.createElement('option');
    objetsOption.setAttribute('value','objets');
    objetsOption.innerText = 'Objets';
    const appartementsOption = document.createElement('option');
    appartementsOption.setAttribute('value','appartements');
    appartementsOption.innerText = 'Appartements';
    const hotelsRestaurantsOption = document.createElement('option');
    hotelsRestaurantsOption.setAttribute('value','hotel-restaurants');
    hotelsRestaurantsOption.innerText = 'Hôtels & restaurants';
    const validationButton= document.createElement('button');
    validationButton.classList.add('validation-button');
    validationButton.innerText = 'Valider';
    document.body.appendChild(overlay);
    overlay.appendChild(editModal);
    //ajouter les appendChild
}
//faire apparaître la modale au clic sur le bouton modifier

//fermeture de la modale au clic sur la croix ou sur l'overlay

//passage de la 2e modale à la 1re au clic sur la flèche