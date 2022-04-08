
// Création menu déroulant
let menuButton = document.createElement("button");
let div = document.createElement("div");

menuButton.className = "dropbtn";
menuButton.innerHTML = 'Mon super menu';
document.getElementById("dropdown").append(menuButton);

div.setAttribute('id', 'myDropdown');
div.className = 'dropdown-content';
document.getElementById("dropdown").append(div);

let liens = ["index.html", "indexJquery.html", "galerie.html"]

for (let i = 0; i < liens.length; i++) {
    let a = document.createElement("a");
    a.setAttribute('href', liens[i]);
    a.innerHTML = liens[i];
    document.getElementById("myDropdown").append(a);
}

menuButton.onclick = printMenuElements;

// Affichage et création de la galerie
const liensImgGalerie = ["https://images.pexels.com/photos/5055188/pexels-photo-5055188.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/5055189/pexels-photo-5055189.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/5054687/pexels-photo-5054687.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/5054688/pexels-photo-5054688.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/5054686/pexels-photo-5054686.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/5055187/pexels-photo-5055187.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/5055179/pexels-photo-5055179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/5055182/pexels-photo-5055182.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/5054690/pexels-photo-5054690.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"];

for (let i = 0; i < liensImgGalerie.length; i++) {
    let galerie = document.querySelector("#galerie");
    let img = document.createElement("img");
    img.className = "imgGalerie";
    img.setAttribute("id", "img" + i);
    img.src = liensImgGalerie[i];
    galerie.append(img);
}

const imagesGalerie = document.querySelectorAll(".imgGalerie");
console.log(imagesGalerie)
for (let i = 0; i < imagesGalerie.length; i++) {
    imagesGalerie[i].addEventListener("click", showBigImg);
}
function showBigImg(event) {
    const imagesGalerie = document.querySelector(".show");
    let idClique = event.target.id;
    let imgAAfficher = document.getElementById(idClique);
    console.log(imgAAfficher)
    imgAAfficher.classList.toggle("show");
    if(imagesGalerie || imagesGalerie==imgAAfficher){
    imagesGalerie.classList.remove("show");
    }
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


