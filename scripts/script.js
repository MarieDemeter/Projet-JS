// Création du bouton refresh
let button = document.createElement("input");
document.getElementById("refresh").append(button);
button.className = "icon";
button.setAttribute('type', 'button');
button.setAttribute('value', 'Refresh');
button.onclick = choosefetch;
carrou;
function carrou() {

fetch("https://zoo-animal-api.herokuapp.com/animals/rand/6")
.then(
    response => response.json()
)

.then(
    carouselImg
)

.catch(data => {
    let div = document.createElement("div");
    document.getElementById("feed").append(div);
    div.innerHTML = "Une erreur s'est produite";
})
}

// Fonction pour ajouter chaque image au carousel
function carouselImg(animals) {
    for (let i = 0; i < animals.length; i++) {
        document.getElementById("img"+i).setAttribute('src',animals[i].image_link);
    }
}

// Création menu déroulant
let menuButton = document.createElement("button");
let div = document.createElement("div");

menuButton.className = "dropbtn";
menuButton.innerHTML = 'Mon super menu';
document.getElementById("dropdown").append(menuButton);

div.setAttribute('id', 'myDropdown');
div.className = 'dropdown-content';
document.getElementById("dropdown").append(div);

let liens = ["https://zoo-animal-api.herokuapp.com/animals/rand/6", "https://zoo-animal-api.herokuapp.com/animals/rand/1", "https://zoo-animal-api.herokuapp.com/animals/rand/2"]

for (let i = 0; i < liens.length; i++) {
    let a = document.createElement("a");
    a.setAttribute('id', 'lien' + i);
    a.setAttribute('href', liens[i]);
    a.innerHTML = 'Lien' + i;
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



// En VANILLA utilisation de la fonction fetch pour récupérer les données d'une API (bière ici)
function choosefetch() {

    fetch("https://api.punkapi.com/v2/beers")
        .then(
            response => response.json()
        )

        .then(
            fetchAddArticle
        )

        .catch(data => {
            let div = document.createElement("div");
            document.getElementById("feed").append(div);
            div.innerHTML = "Une erreur s'est produite";
        })
}

// Fonction pour ajouter un nouvel article en VANILLA (appelée dans le deuxième then)
function fetchAddArticle(data) {
    for (element of data) {
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

            document.getElementById("feed").append(div);
            document.getElementById("article" + element.id).append(title);
            document.getElementById("article" + element.id).append(description);
            document.getElementById("article" + element.id).append(img);
        } else {
            break;
        }
    }
}

// Création fonction printMenuElements qui 
function printMenuElements() {
    document.getElementById("myDropdown").classList.toggle("visible");
}

function createNewArticle() {
    const dataForm = [{
        id: 1,
        name: document.getElementById("titre"),
        description: document.getElementById("description"),
        image_url: document.getElementById("image"),
    }];
    fetchAddArticle(dataForm);
}


