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

//créer la deuxième partie de la modale

//faire apparaître la modale au clic sur le bouton modifier

//fermeture de la modale au clic sur la croix ou sur l'overlay

//faire apparaître la galerie dans la 1re modale

//passage de la 2e modale à la 1re au clic sur la flèche