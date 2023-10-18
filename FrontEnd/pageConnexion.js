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
