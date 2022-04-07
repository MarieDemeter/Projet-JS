$(document).ready(function () {


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
            .fail(function (error) {
                $(".feed").append("<div></div>");
                $(".feed div").text("Une Erreur s'est produite");
            })
    }
    // Fonction pour ajouter un nouvel article en Jquery (appelée dans le done)
    function addArticle(response) {
        for (element of response) {
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

    // En VANILLA utilisation de la fonction fetch pour récupérer les données d'une API (bière ici)
    function choosefetch() {

        fetch("https://api.punkapi.com/v2/beers")
            .then(
                response => response.json()
            )

            .then(
                newArticle
            )

            .catch(data => {
                let div = document.createElement("div");
                document.getElementById("feed").append(div);
                div.innerHTML = "Une erreur s'est produite";
            })
    }

    // Fonction pour ajouter un nouvel article en VANILLA (appelée dans le deuxième then)
    function newArticle(data) {
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

        .fail(function (error) {
            $(".feed").append("<div></div>");
            $(".feed div").text("Oups");
        })

    // Fonction pour ajouter chaque image au carousel
    function carouselImg(animals) {
        for (let i = 0; i < animals.length; i++) {
            $("#img" + i).attr("src", animals[i].image_link)
        }
    }


    // Création menu déroulant
    button = document.createElement("button");
    let div = document.createElement("div");

    button.className = "dropbtn";
    button.innerHTML = 'Mon super menu';
    document.getElementById("dropdown").append(button);

    div.setAttribute('id', 'myDropdown');
    div.className = 'dropdown-content';
    document.getElementById("dropdown").append(div);

    let lien = ["https://zoo-animal-api.herokuapp.com/animals/rand/6", "https://zoo-animal-api.herokuapp.com/animals/rand/1", "https://zoo-animal-api.herokuapp.com/animals/rand/2"]

    for (let i = 0; i < lien.length; i++) {
        let a = document.createElement("a");
        a.setAttribute('id', 'lien' + i);
        a.setAttribute('href', lien[i]);
        a.innerHTML = 'Lien' + i;
        document.getElementById("myDropdown").append(a);
    }

    button.onclick = printMenuElements;


    // Création fonction printMenuElements qui 
    function printMenuElements() {
        document.getElementById("myDropdown").classList.toggle("visible");
    }

    // Ferme le menu déroulant si on clique à coté du menu
    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('visible')) {
                    openDropdown.classList.remove('visible');
                }
            }
        }
    }













});
