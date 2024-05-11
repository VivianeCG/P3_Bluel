//afficher la bannière et le bouton une fois redirigé sur la page index après la connexion
function activateEditMode() {
    document.getElementById('edit').style.display='flex';
    document.getElementById('edit-button').style.display='flex';
}
// Récupération du token depuis le "local storage"
const token = localStorage.getItem('token');
//afficher logout une fois redirigé sur la page index après la connexion
function changeLogStatus(token) {
    let logInStatus = document.getElementById('login-link');
    console.log(logInStatus)
    if (token) {
        logInStatus.innerText = 'Logout';
        console.log("déconnexion")
    }
}
//si la connexion est effective appeler les fonctions modifiant l'aspect de la page
function successfullLogin(token) {
    //pour vérifier que le token est bien récupéré avant de lancer la fonction changeLogStatus
    console.log(token);
    if (token) {
        activateEditMode();
        changeLogStatus(token);
    }
}
successfullLogin();
// Appeler successfulLogin après que la page a fini de charger
document.addEventListener('DOMContentLoaded', successfullLogin);