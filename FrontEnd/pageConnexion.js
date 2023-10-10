//connexion au compte
let remplissageIdentifiants = document.querySelector(".submit");
    remplissageIdentifiants.addEventListener("click" /*"submit" ???*/ , ()=>{
    //pour récupérer la valeur de chaque champs (e-mail et mot de passe)
    let identifiant = document.getElementById("email").value;
    let password = document.getElementById("mot-de-passe").value;
    //pour stocker la valeur des 2 champs
    let logIn = {identifiant,password};
    console.log(logIn);
})

const urlUsers = "http://localhost:5678/api/users/login";
fetch (urlUsers)
.then (response=> response.json())
.then //si (if) valeurs logIn sont correcte -> page d'accueil (else) sinon ->message d'erreur "votre e-mail et/ou mot de passe n'est pas correct"
