//fonction pour créer les balises figure dans le HTML et récupérer les photos
function creationFigure() {
    const url = "http://localhost:5678/api/works"
    /**pour récupérer les travaux depuis le Backend*/
    fetch (url)
    .then (function (response){
        return response.json()
    })
    .then (function (data){
        data.forEach(element => {
                //pour créer les balises figures dans le html
                let conteneurParent = document.getElementById("gallery");
                let conteneurPhoto = document.createElement("figure");
                let imageGallerie = document.createElement("img");
                let legendePhoto = document.createElement("figcaption");
                legendePhoto.innerText="legende photo";
                conteneurParent.appendChild(conteneurPhoto);
                conteneurPhoto.appendChild(imageGallerie);
                conteneurPhoto.appendChild(legendePhoto);
                imageGallerie.setAttribute("src","");
                imageGallerie.setAttribute("alt","");
                imageGallerie.src = element.imageUrl;
                imageGallerie.alt = element.title;
                legendePhoto.innerHTML = element.title; 
            });
        });
}
creationFigure()
//fontion pour créer les boutons de filtrage selon les catégories
function creationFiltres() {
    const urlCategories = "http://localhost:5678/api/categories"
    fetch (urlCategories)
    .then (function (response){
        return response.json()
    })
    .then (function (data) {
        let numeroId = 1;
        data.forEach(element=> {
            //pour créer les boutons des filtres avec leurs noms et id(sauf "Tous")
            let divConteneurCategories = document.getElementById("filtres");
            let button = document.createElement("button");
            button.setAttribute('class', 'categorie');
            button.setAttribute('id', 'categorie'+numeroId);
            numeroId++;
            button.setAttribute('value', numeroId)
            divConteneurCategories.appendChild(button);
            button.innerHTML = element.name;
            console.log(button);
        })
        
    });
}
creationFiltres()

function filtrageDesPhotos() {
    const urlCategories = "http://localhost:5678/api/categories"
    fetch (urlCategories)
    .then (function (response){
        return response.json()
    })
    .then (function (data) {
        //idée créer un set pour éviter des doublons??
        //const categorieId = categorieId.set("#categorie"+numeroId => categorieId.id); //problème de syntaxe à revoir
        //ajouter un addEventListener pour que ça marche?
        //un switch case serait plus adapté??
        if () { //si l'id du bouton = l'id de la photo on l'affiche
            console.log()
            
        } else {                // sinon on affiche toutes les photos
            console.log()
        }

    });
};
