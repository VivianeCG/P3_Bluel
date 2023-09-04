//pour lier le fichier à l'API
const url ="http://localhost:5678/api-docs/";

/**pour vérifier qu'on peut récupérer les travaux */
fetch ("http://localhost:5678/api/works")
.then (function (response){
    return response.json()
})
.then (function (data){
    console.log (data)
});

/**base = boucle WHILE vu qu'on peut ajouter des travaux plus tard
 * let i = 0
 * while (i<bidule.length) {
 * console.log (i)
 * i++}
 *  pour créer les <figure> avec img avec src et alt
 * function creationBaliseFigure (baliseImg, baliseFigcaption) {
 * return la balise créée
 * }
 */

/**pour vérifier qu'on peut récupérer les catégories */
fetch ("http://localhost:5678/api/categories")
.then (function (response){
    return response.json()
})
.then (function (data){
    console.log (data)
});