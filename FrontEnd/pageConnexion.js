//connexion au compte
let remplissageIdentifiants = document.querySelector(".submit");
//pour récupérer la valeur de chaque champs (e-mail et mot de passe)
let identifiant = document.getElementById("email");
let motDePasse = document.getElementById("mot-de-passe");
    remplissageIdentifiants.addEventListener("click", async (event)=>{ 
        event.preventDefault();
    //pour stocker la valeur des 2 champs
    let seConnecter = {
        identifiant:identifiant.value,
        password:motDePasse.value
    };
    console.log(seConnecter);
})

try {
    const reponse = await fetch ("http://localhost:5678/api/users/login");
    method:"POST",
    headers
    body
} catch (error) {
    
}
