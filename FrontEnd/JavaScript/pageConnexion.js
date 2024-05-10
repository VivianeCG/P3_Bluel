document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".log-in");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let checkValidUserMail = new RegExp(
      "[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+"
    );
    if (!checkValidUserMail.test(email)) {
      alert("Erreur dans l'identifiant ou le mot de passe");
      return;
    }
    let checkValidUserPassword = new RegExp("(?=.*[a-zA-Z])(?=.*\\d).{6,}");
    if (!checkValidUserPassword.test(password)) {
      alert("Erreur dans l'identifiant ou le mot de passe");
      return;
    }

    // Création des données à envoyer à l'API
    const data = {
      email: email,
      password: password,
    };

    // Configuration de la requête
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    // Envoi de la requête à l'API
    fetch("http://localhost:5678/api/users/login", requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la connexion");
        }
        return response.json();
      })
      .then((data) => {
        // Sauvegarde du token dans le stockage local
        localStorage.setItem("token", data.token);
        console.log(data);
        // Redirection de l'utilisateur après la connexion réussie
        window.location.href = "../index.html";
      })
      .catch((error) => {
        console.error("Erreur:", error);
        // Gérer l'erreur, par exemple, afficher un message d'erreur à l'utilisateur
      });
  });
});
// stockage du token pour les besoins de la page édition
//export function saveToken(token) {
//localStorage.setItem('token', token);
//}
