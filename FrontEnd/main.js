const url = "http://localhost:5678/api/works"
//fonction pour créer les balises figure dans le HTML

window.onload=function creationFigure() {
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
    //return conteneurPhoto;
}

/**pour récupérer les travaux depuis le Backend*/
fetch (url)
.then (function (response){
    return response.json()
})
.then (function (data){
//pour créer les balises figures dans le html
data.forEach(element => {
        creationFigure()
        imageGallerie.src = element.imageUrl;
        imageGallerie.alt = element.title;
        legendePhoto.innerHTML = element.title; 
        console.log (element);
    });
});
