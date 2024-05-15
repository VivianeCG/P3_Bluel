import { defaultIndexPage, createCard, createFigure, createButton } from "./main.js";
//fonction pour lancer l'apparence du mode édition
export function activateEditMode() {
        document.getElementById('edit').style.display='flex';
        document.getElementById('edit-button').style.display='flex';
        document.getElementById('login').style.display = 'none';
        document.getElementById('logout').style.display = 'flex';
        console.log("fonction activateEditMode");
  }
//activateEditMode();
//fonction pour le retour à l'apparence normale au clic sur logout
export function deactivateEditMode() {
   document.getElementById('logout').addEventListener('click', (event)=>{
    event.preventDefault();
    document.getElementById('edit').style.display='none';
    document.getElementById('edit-button').style.display='none';
    document.getElementById('logout').style.display = 'none';
    document.getElementById('login').style.display = 'flex';
    //ça ne marche pas mieux si j'utilise la fonction importée
    //ni si j'utilise "submit" ou "change" à la place de "click"
    console.log("fonction deactivateEditMode");
}) 
}

//fermeture de la modale au clic sur la croix ou sur l'overlay

//faire apparaître la modale au clic sur le bouton modifier

//passage de la 2e modale à la 1re au clic sur la flèche