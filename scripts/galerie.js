const liensImgGalerie = ["https://images.pexels.com/photos/5055188/pexels-photo-5055188.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/5055189/pexels-photo-5055189.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/5054687/pexels-photo-5054687.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/5054688/pexels-photo-5054688.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/5054686/pexels-photo-5054686.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/5055187/pexels-photo-5055187.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/5055179/pexels-photo-5055179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/5055182/pexels-photo-5055182.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/5054690/pexels-photo-5054690.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"];

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

for (let i = 0; i < liensImgGalerie.length; i++) {
    printGallery(liensImgGalerie, i)
}



//Affiche les photos de la galerie en plus gros si on clique dessus
function showBigImg(event) {
    const imagesGalerie = document.querySelector(".show");
    let idClique = event.target.id;
    let imgAAfficher = document.getElementById(idClique);
    imgAAfficher.classList.toggle("show");
    if (imagesGalerie || imagesGalerie == imgAAfficher) {
        imagesGalerie.classList.remove("show");
    }
}

//Création du bouton changeView
let buttonChangeView = document.createElement("input");
buttonChangeView.setAttribute('type', 'button');
buttonChangeView.setAttribute('value', 'Changer la vue de la galerie');
document.getElementById("changeView").append(buttonChangeView);
buttonChangeView.onclick = changeView;

//Création du bouton addImage
let buttonFormImage = document.createElement("input");
buttonFormImage.setAttribute('type', 'button');
buttonFormImage.setAttribute('value', 'Formulaire ajout d\'une image à la galerie');
document.getElementById("addImage").append(buttonFormImage);
buttonFormImage.onclick = printFormAddImage;


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


// Fonction changement de vue galerie
function changeView() {
    const galerie = document.querySelector(".galerie");
    galerie.classList.toggle("changeView")

}

//Fonction printFormAddImage
function printFormAddImage() {
    let form = document.createElement("form");
    let inputURL = document.createElement("input");
    let buttonAddImage = document.createElement("input");

    inputURL.setAttribute('type', 'text');
    inputURL.setAttribute('id', 'URL');
    buttonAddImage.setAttribute('type', 'button');
    buttonAddImage.setAttribute('value', 'Ajouter');
    document.getElementById("addImage").append(inputURL);
    document.getElementById("addImage").append(buttonAddImage);
    document.getElementById("addImage").append(form);

    buttonAddImage.onclick = addImage;
}

//Fonction AddImage
function addImage() {
    const newURL = document.getElementById("URL").value;
    liensImgGalerie.push(newURL);
    const i = liensImgGalerie.length-1;
    printGallery(liensImgGalerie, i);
}

// Fonction affichage et création de la galerie
function printGallery(liensImgGalerie, i) {
    let galerie = document.querySelector("#galerie");
    let img = document.createElement("img");
    img.className = "imgGalerie";
    img.setAttribute("id", "img" + i);
    img.src = liensImgGalerie[i];
    galerie.append(img);
    const imagesGalerie = document.querySelectorAll(".imgGalerie");
    for (let j = 0; j < imagesGalerie.length; j++) {
        imagesGalerie[j].addEventListener("click", showBigImg);
        imagesGalerie[j].addEventListener("dblclick", deleteImg);
    }
}

// Fonction suppression image galerie
function deleteImg(event){
    let idClique = event.target.id;
    let imgAAfficher = document.getElementById(idClique);
    imgAAfficher.remove();
}
