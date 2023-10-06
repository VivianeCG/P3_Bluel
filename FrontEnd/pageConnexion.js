//changer la graisse des liens lorsqu'on est sur la page sélectionnée
function changementGraisseLien() {
    let lien = document.querySelectorAll(".lien");
    lien.addEventListener("clic",()=>{
    lien.setAttribute("font-weight=600");
});
};
changementGraisseLien();