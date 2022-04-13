// Création menu déroulant
let menuButton = document.createElement("button");
let div = document.createElement("div");

menuButton.className = "dropbtn";
menuButton.innerHTML = 'Mon super menu';
document.getElementById("dropdown").append(menuButton);

div.setAttribute('id', 'myDropdown');
div.className = 'dropdown-content';
document.getElementById("dropdown").append(div);
let liens = ["index.html", "indexJquery.html", "galerie.html", "memory.html"]

for (let i = 0; i < liens.length; i++) {
    let a = document.createElement("a");
    a.setAttribute('href', liens[i]);
    a.innerHTML = liens[i];
    document.getElementById("myDropdown").append(a);
}

menuButton.onclick = printMenuElements;

let btnLevel = document.querySelector("#level");
btnLevel.onclick = chooseLevel;

function chooseLevel(){
    console.log("btn btn")

}



// Ferme le menu déroulant si on clique à coté du menu
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            // openDropdown.classList.toggle('visible');
            if (openDropdown.classList.contains('visible')) {
                openDropdown.classList.remove('visible');
            }
        }
    }
}

// Création fonction printMenuElements qui affiche les éléments du menu déroulant
function printMenuElements() {
    document.getElementById("myDropdown").classList.toggle("visible");
}
