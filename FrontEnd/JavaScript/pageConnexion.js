//connexion au compte
let identifierFilled = document.querySelector(".submit");
//pour récupérer la valeur de chaque champs (e-mail et mot de passe)
let identifier = document.getElementById("email");
let password = document.getElementById("password");
identifierFilled.addEventListener("click", async (event) => {
  event.preventDefault();
  let emailValue = identifier.value;
  let passwordValue = password.value;
  //pour stocker la valeur des 2 champs
  let connect = {
    identity: emailValue,
    thePassword: passwordValue,
  };
  console.log(connect);
  const connexionIdentifier = JSON.stringify(connect);
  // Effectuez la requête fetch à l'URL de connexion
  try {
    const response = await fetch("http://localhost:5678/api/users/login", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: connexionIdentifier
    });

  } catch (error) {
    console.error("Erreur lors de la requête fetch :", error);
  }
});


    // Vérifiez si la réponse est correcte (code 200)
    //if (response.ok) {
      // Traitez la réponse et stockez le token si nécessaire
    //} else {
      // Affichez une alerte si les identifiants sont incorrects
      //alert("Erreur dans l’identifiant ou le mot de passe");
    //}