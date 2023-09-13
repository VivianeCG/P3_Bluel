const url = "http://localhost:5678/api/works"
/**pour récupérer les travaux depuis le Backend*/
fetch (url)
.then (function (response){
    return response.json()
})
.then (function (data){
//pour rendre les filtres opérationnels
    let valeursDeSet;
            //valeursDeSet = document.querySelectorAll("button")
            //valeursDeSet = document.querySelectorAll(".categorie");
    //pour récupérer les valeurs de chaque categorie
    let categorieTous;
    categorieTous = document.getElementById("categorieIdTous");
    let categorieObjets;
    categorieObjets = document.getElementById("categorieId-1");
    let categorieAppartements;
    categorieAppartements = document.getElementById("categorieId-2");
    let categorieHotelsEtRestaurants;
    categorieHotelsEtRestaurants = document.getElementById("categorieId-3");
    //pour réunir les valeurs des catégories dans un seul endroit
    valeursDeSet = ["categorieTous", "categorieObjets", "categorieAppartements", "categorieHotelsEtRestaurants"]
    //pour tenter d'avoir une mise en forme différente au clic sur le bouton
    valeursDeSet.addEventListener('click', ()=>{
        valeursDeSet.setAttribute('backaground-color', '#1D6154');
    });
    //pour tenter d'avoir un filtrage 
    valeursDeSet = new Set(data);
        data.forEach(element => {
            valeursDeSet = element.categorieId;
            console.log(element)
        })

//pour créer les balises figures dans le html
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
//creation des catégories de filtres
/*let conteneurParentCategories;
let conteneurPhoto=document.getElementById("gallery");
window.onload=function (){
    conteneurParentCategories = document.getElementById("portfolio"); //je veux le mettre dans le portfolio sous le h2
    let divConteneurCategories = document.createElement("div");
    conteneurParentCategories.appendChild(divConteneurCategories);
    divConteneurCategories.setAttribute("id", "filtres");//éléments de class attribués à la nouvelle div
    console.log(divConteneurCategories);
    
    function contenuFiltres(data) {
        data.forEach(element=>{
            divFiltre.innerHTML=element.categoryId;
            console.log(divFiltre);
        })
        return contenuFiltres;
    }

}
 {
    let divConteneurCategories =document.getElementById("filtres");
        let divFiltre;
            for (let index = 0; index < 4; index++) {
                divFiltre = document.createElement("div");
                divFiltre.setAttribute('class', 'categorie');
                divConteneurCategories.appendChild(divFiltre);
                console.log(divFiltre);
            };
        }*/

/*let conteneurParent = document.getElementById("gallery");
let divConteneurCategories;
window.onload=function(){
divConteneurCategories.insertBefore(conteneurPhoto);
divConteneurCategories=document.getElementById("filtres");
}*/


/*let conteneurParentCategories = document.querySelector("#portfolio"); //je veux le mettre dans le portfolio sous le h2
let divConteneurCategories = document.createElement("div");
conteneurParentCategories.appendChild(divConteneurCategories);
divConteneurCategories.setAttribute("id", "filtres");//éléments de class attribués à la nouvelle div
console.log (divConteneurCategories);*/
    //console.log(divConteneurCategories);

//faudra peut-être créer la catégorie "tous" avant de faire la boucle pour les autres
/*fetch ("http://localhost:5678/api/categories")
.then (function (response){
    return response.json()

})
.then (function creationZoneFiltres(data) {
    let conteneurParentCategories = document.getElementById(portfolio); //je veux le mettre dans le portfolio sous le h2
    let divConteneurCategories = document.createElement("div");
    conteneurParentCategories.appendChild(divConteneurCategories);
    divConteneurCategories.setAttribute("id", "filtres");//éléments de class attribués à la nouvelle div
    let divFiltre;
    data.for (let 'category' = 1; category < 4; category++;) {
            divFiltre = document.createElement("div");
            divFiltre.setAttribute('class', 'categorie');
            divFiltre.innerText= "categories"
            divConteneurCategories.appendChild(divFiltre);
            console.log(divFiltre);
        };
});
*/