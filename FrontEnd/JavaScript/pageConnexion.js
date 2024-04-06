document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.log-in');

  form.addEventListener('submit', function(event) {
      event.preventDefault();

      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      // Création des données à envoyer à l'API
      const data = {
          email: email,
          password: password
      };

      // Configuration de la requête
      const requestOptions = {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      };

      // Envoi de la requête à l'API
      fetch('http://localhost:5678/api/users/login', requestOptions)
          .then(response => {
              if (!response.ok) {
                  throw new Error('Erreur lors de la connexion');
              }
              return response.json();
          })
          .then(data => {
              // Traitement de la réponse de l'API (par exemple, rediriger l'utilisateur vers une nouvelle page)
              console.log(data); // Vous pouvez afficher la réponse dans la console pour le débogage
              // Redirection de l'utilisateur après la connexion réussie
              window.location.href = '../index.html';
          })
          .catch(error => {
              console.error('Erreur:', error);
              // Gérer l'erreur, par exemple, afficher un message d'erreur à l'utilisateur
          });
  });
});