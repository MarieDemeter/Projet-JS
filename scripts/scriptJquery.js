$(document).ready(function () {

    // Création du bouton refresh
    let button = document.createElement("input");
    document.getElementById("refresh").append(button);
    button.className = "icon";
    button.setAttribute('type', 'button');
    button.setAttribute('value', 'Refresh');
    button.onclick = chooseajax;

    // En JQUERY utilisation de la fonction AJAX pour récupérer les données d'une API (animaux ici)
    $.ajax({
        url: "https://zoo-animal-api.herokuapp.com/animals/rand/6",
        method: "GET",
        dataType: "json",
    })

        .done(function (response) {
            carouselImg(response)
        })

        .fail(error)

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

    // En JQUERY utilisation de la fonction AJAX pour rcupérer les données d'une API (bière ici)
    function chooseajax() {
        // Utilisation Ajax choix de l'url pour récupérer l'API
        $.ajax({
            url: "https://api.punkapi.com/v2/beers",
            method: "GET",
            dataType: "json",
        })
            // Fonctions à mettre en place lorsque que l'API est chargée
            .done(function (response) {
                addArticle(response)
            })
            // Fonction à executer en cas d'echec de chargement de l'API
            .fail(error)
    }
    // Fonction pour ajouter un nouvel article en Jquery (appelée dans le done)
    function addArticle(biers) {
        for (element of biers) {
            if (element.id < 9) {
                $(".feed").append("<div id='" + element.id + "'></div>");
                $("#" + element.id).append("<h2></h2>").append("<p></p>").append("<img>").addClass('article');
                $("#" + element.id + " h2").text(element.name);
                $("#" + element.id + " p").text(element.description);
                $("#" + element.id + " img").attr('src', element.image_url).css('height', '200px');
            } else {
                break
            }
        }
    };



    // Fonction pour ajouter chaque image au carousel
    function carouselImg(animals) {
        for (let i = 0; i < animals.length; i++) {
            $("#img" + i).attr("src", animals[i].image_link)
        }
    }

    // Création fonction printMenuElements qui 
    function printMenuElements() {
        document.getElementById("myDropdown").classList.toggle("visible");
    }

    // CreateNewArticle création d'un nouvel article par le formulaire
    function createNewArticle() {
        const dataForm = [{
            id: 0,
            name: document.querySelector("#titre").value,
            description: document.querySelector("#description").value,
            image_url: document.querySelector("#image").value,
        }];
        addArticle(dataForm);
    }

    function error() {
        $(".feed").append("<div></div>");
        $(".feed div").text("Oups");
    }




});
