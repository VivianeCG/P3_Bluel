//fonction pour lancer l'apparence du mode édition
export function activateEditMode() {
    document.getElementById('edit').style.display='flex';
    document.getElementById('edit-button').style.display='flex';
    document.getElementById('login').style.display = 'none';
    document.getElementById('logout').style.display = 'flex';
  }
//activateEditMode();
//fermeture de la modale au clic sur la croix ou sur l'overlay

//faire apparaître la modale au clic sur le bouton modifier

//passage de la 2e modale à la 1re au clic sur la flèche