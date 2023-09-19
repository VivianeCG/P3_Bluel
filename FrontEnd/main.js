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
        data.forEach(element=> {
            let divConteneurCategories = document.getElementById("filtres");
            button = document.createElement("button");
            button.setAttribute('class', 'categorie');
            divConteneurCategories.appendChild(button);
            button.innerHTML = element.name;
            console.log(button);
        })
    });
}
creationFiltres()

/*const photo = ["Booki","Celeste1", "Celeste2", "Celeste3", "Celeste4"]
for (let button of photo) {
    button = document.createElement("button");
    button.setAttribute('class', 'categorie');
    button.innerHTML = photo;
    divConteneurCategories.appendChild(button);
    console.log(button);
};*/