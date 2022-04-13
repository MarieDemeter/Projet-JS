// Création du bouton refresh
let button = document.createElement("input");
document.getElementById("refresh").append(button);
button.className = "icon";
button.setAttribute('type', 'button');
button.setAttribute('value', 'Refresh');
button.onclick = choosefetch;


fetch("https://zoo-animal-api.herokuapp.com/animals/rand/6")
    .then(
        response => response.json()
    ).then(
        carouselImg
    ).catch(
        error
    )

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
    a.setAttribute('id', 'lien' + i);
    a.setAttribute('href', liens[i]);
    a.innerHTML = liens[i];
    document.getElementById("myDropdown").append(a);
}

menuButton.onclick = printMenuElements;
document.getElementById("submit").onclick = createNewArticle;



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

// Fonction pour ajouter chaque image au carousel
function carouselImg(animals) {
    for (let i = 1; i < animals.length; i++) {
        document.getElementById("img" + i).setAttribute('src', animals[i].image_link);
    }
}

// En VANILLA utilisation de la fonction fetch pour récupérer les données d'une API (bière ici)
function choosefetch() {
    fetch("https://api.punkapi.com/v2/beers")
        .then(
            response => response.json()
        )
        .then(
            AddArticle
        )
        .catch(
            error
        )
}

// Fonction pour ajouter un nouvel article en VANILLA (appelée dans le deuxième then)
function AddArticle(biers) {
    for (element of biers) {
        if (element.id < 9) {
            let div = document.createElement("div");
            div.className = "article";
            div.id = "article" + element.id;
            let title = document.createElement("h2");
            let description = document.createElement("p");
            let img = document.createElement("img");

            title.innerHTML = element.name;
            description.innerHTML = element.description;
            img.src = element.image_url;
            img.style.height = '200px';

            div.append(title, description, img);
            document.getElementById("feed").append(div);
        } else {
            break;
        }
    }
}

// Création fonction printMenuElements qui affiche les éléments du menu déroulant
function printMenuElements() {
    document.getElementById("myDropdown").classList.toggle("visible");
}

// CreateNewArticle création d'un nouvel article par le formulaire
function createNewArticle() {
    const name = document.querySelector("#titre").value;
    const description = document.querySelector("#description").value;
    const image_url = document.querySelector("#image").value;

    if (name && description && image_url) {
        const dataForm = [{
            id: 0,
            name: document.querySelector("#titre").value,
            description: document.querySelector("#description").value,
            image_url: document.querySelector("#image").value,
        }];
        AddArticle(dataForm);
    } else {
        alert("Veuillez remplir tous les champs du formulaire !");
    }
    //document.getElementById("form").reset();
}

function error() {
    let div = document.createElement("div");
    document.getElementById("feed").append(div);
    div.innerHTML = "Une erreur s'est produite";
}

