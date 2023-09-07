const url = "http://localhost:5678/api/works"
/**pour récupérer les travaux */
fetch (url)
.then (function (response){
    return response.json()
})
.then (function (data){//pour créer les balises figures dans le html
    let conteneurParent = document.getElementById("gallery");
    let conteneurPhoto;
    let imageGallerie;
    let legendePhoto;
    data.forEach(element => {
        conteneurPhoto = document.createElement("figure");
        imageGallerie = document.createElement("img");
        conteneurParent.appendChild(conteneurPhoto);
        legendePhoto = document.createElement("figcaption");
        conteneurPhoto.appendChild(imageGallerie);
        conteneurPhoto.appendChild(legendePhoto);
        imageGallerie.setAttribute("src","");
        imageGallerie.src = element.imageUrl;
        imageGallerie.setAttribute("alt","");
        imageGallerie.alt = element.title;
        legendePhoto.innerHTML = element.title; 
        //console.log (data)
        console.log (element);
    });
});

/**
*/


/**pour vérifier qu'on peut récupérer les catégories */
/*fetch ("http://localhost:5678/api/categories")
.then (function (response){
    return response.json()
})
.then (function (data){
    console.log (data)
});*/