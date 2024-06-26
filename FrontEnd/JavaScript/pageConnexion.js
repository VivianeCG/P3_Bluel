  const form = document.querySelector('.log-in');
  form.addEventListener('submit', test)
   async function test (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    //vérification de la validité de l'adresse e-mail saisie
    let checkValidUserMail = new RegExp(
      "[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+"
    );
    if (!checkValidUserMail.test(email)) {
      alert("Erreur dans l'identifiant ou le mot de passe");
      return;
    }
    //vérification de la validité du mot de passe saisi
    let checkValidUserPassword = new RegExp("(?=.*[a-zA-Z])(?=.*\\d).{6,}");
    if (!checkValidUserPassword.test(password)) {
      alert("Erreur dans l'identifiant ou le mot de passe");
      return;
    }
    // Création des données à envoyer à l'API
    const data = {
      email: email,
      password: password
    };
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
      fetch('http://localhost:5678/api/users/login', requestOptions)
          .then(response => {
              if (!response.ok) {
                  throw new Error('Erreur lors de la connexion');
              }
              return response.json();
          })
          .then(data => {
              const token = data.token;
              localStorage.setItem('token', token);
              window.location.href = '../index.html';
            })
          .catch(error => {
              console.error('Erreur:', error);
          });
        };
    
