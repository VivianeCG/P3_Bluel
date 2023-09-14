const url = "http://localhost:5678/api/works"
//fonction pour créer les balises figure dans le HTML

let conteneurParent = document.getElementById("gallery");
let conteneurPhoto;
let imageGallerie;
let legendePhoto;
function creationConteneurPhoto() {
    conteneurPhoto = document.createElement("figure");
    imageGallerie = document.createElement("img");
    conteneurParent.appendChild(conteneurPhoto);
    legendePhoto = document.createElement("figcaption");
    conteneurPhoto.appendChild(imageGallerie);
    imageGallerie.setAttribute("src","");
    imageGallerie.setAttribute("alt","");
    conteneurPhoto.appendChild(legendePhoto);
    console.log();
}

/**pour récupérer les travaux depuis le Backend*/
fetch (url)
.then (function (response){
    return response.json()
})
.then (function (data){
//pour créer les balises figures dans le html
data.forEach(element => {
        creationConteneurPhoto()
        imageGallerie.src = element.imageUrl;
        imageGallerie.alt = element.title;
        legendePhoto.innerHTML = element.title; 
        console.log (element);
    });
});
