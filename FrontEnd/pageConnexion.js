// récupération e-mail
let mailInput = document.getElementById("email");
let userMail = mailInput.value;
console.log(userMail);
// vérifier que format e-mail est correct
let checkValidUserMail = new RegExp('^[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+$');
let resultUserMail = checkValidUserMail.test(userMail);
console.log(resultUserMail);
// récupération mdp
let passwordInput = document.getElementById("mot-de-passe");
let userPassword = passwordInput.value;
console.log(userPassword);
// vérifier que format du mdp est correct?
//let checkValidUserPassword = new RegExp('^[a-z0-9._-#@{(^=+-*/%§?!)}]+$');
//let resultUserPassword = checkValidUserPassword.test(userPassword);
//console.log(resultUserPassword);
// gestion de l'evt submit
const form = document.querySelector("form");
form.addEventListener("submit", (event)=>{
  event.preventDefault();
  console.log("la page ne s'est pas rechargée")
  if (userMail === "") {
    console.log("userMail est vide");
  } else {
    console.log("userMail est rempli");
  }
  if (userPassword === "") {
    console.log("userPassword est vide");
  } else {
    console.log("userPassword est rempli");
  }
});
// prévenir user s'il y a une erreur
// vérifier que user a le droit de se connecter,quel type de requête pour envoyer les infos?
// stocker les infos de connexion
// rediriger vers la page d'accueil en maintenant la connexion
// stocker le token d'authentification pour pouvoir réaliser les envois et suppressions de travaux (= étape suivante)
















/*
//connexion au compte
let remplissageIdentifiants = document.querySelector(".submit");
//pour récupérer la valeur de chaque champs (e-mail et mot de passe)
let identifiant = document.getElementById("email");
let motDePasse = document.getElementById("mot-de-passe");
remplissageIdentifiants.addEventListener("click", (event) => {
  event.preventDefault();
  //pour stocker la valeur des 2 champs
  let seConnecter = {
    identifiant: identifiant.value,
    password: motDePasse.value,
  };
  console.log(seConnecter);
});
const identifiantConnexion = JSON.stringify(seConnecter);
try {
  const reponse = fetch("http://urlConnexion:5678/api/users/login");
  method: "POST",
    (headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    }),
    (body = identifiantConnexion);
  console.log(reponse);
} catch (error) {
  alert("l'identifiant ou le mot de passe est erroné");
}
*/