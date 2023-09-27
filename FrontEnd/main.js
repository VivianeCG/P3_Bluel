//fonction pour créer les balises figure dans le HTML et récupérer les photos
function creationFigure() {
    const url = "http://localhost:5678/api/works";
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
    const urlCategories = "http://localhost:5678/api/categories";
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

function filtrageCategories(){
    console.log("coucou");
   const url = "http://localhost:5678/api/works";
    let button = document.querySelectorAll(".categorie");
        for (const filtrage of button) {
            filtrage.addEventListener("click", ()=> {
            fetch (url)
            .then (response=> response.json())
            .then ((data) => {
                if (filtrage.value==1) {
                    console.log("salut");
                        creationFiltres();
                    } else {
                        console.log("bidule");
                        /*let numeroId = 1;
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
                        })*/
                    }
                });
                
            });
        }
    
};
filtrageCategories();
/*let button = document.querySelector("#categorie0");
button.addEventListener("click", function(){
    filtrageCategories()
});*/