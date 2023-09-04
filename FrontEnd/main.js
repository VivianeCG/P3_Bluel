//pour lier le fichier à l'API
const url ="http://localhost:5678/api-docs/";

/**pour vérifier qu'on peut récupérer les travaux */
fetch ("http://localhost:5678/api/works")
.then (function (response){
    return response.json()
})
.then (function (data){
    console.log (data)
});

//récupération des données depuis api
const reponse =  fetch ("http://localhost:5678/api/works");
const travaux =  reponse.json();


//en théorie code (ou portion de code) pour créer les balises
const conteneurPhoto = document.createElement("figure");
const imageGallerie = document.createElement("img");
const legendePhoto = document.createElement("figcaption");

//en théorie devrait servir à permettre d'afficher les nouvelles div figure
let conteneurParent = document.querySelector(".gallery");
console.log()


/**base = boucle WHILE vu qu'on peut ajouter des travaux plus tard
 * let i = 0
 * while (i<bidule.length) {
 * console.log (i)
 * i++}
 * 
 * let parentFigure = document.querySelector("div", ".gallery");
    parentFigure.createElement("figure");
    console.log("figure");
 * 
    code récup dans documentation avec qqs modifs qui ne marchent pas (erreur = undefined ou alors pas une fonction)
    document.body.onload = addElement;

document.section.onload = addElement;

function addElement() {
  // create a new div element
  const baliseFigure = document.createElement("figure");

  // and give it some content
  const contenuTest = document.createTextNode("future balise image");

  // add the text node to the newly created div
   baliseFigure.appendChild(contenuTest);

  // add the newly created element and its content into the DOM
  const divOrigine = document.querySelector(".gallery");
  document.section.insertAfter(baliseFigure, divOrigine);
}
*/


/**pour vérifier qu'on peut récupérer les catégories */
fetch ("http://localhost:5678/api/categories")
.then (function (response){
    return response.json()
})
.then (function (data){
    console.log (data)
});