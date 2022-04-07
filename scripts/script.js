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

    // Création du bouton refresh
    let button = document.createElement("input");
    document.getElementById("refresh").append(button);
    button.className = "icon";
    button.setAttribute('type', 'button');
    button.setAttribute('value', 'Refresh');
    button.onclick = choosefetch;



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


    // Création fonction printMenuElements qui 
    function printMenuElements() {
        document.getElementById("myDropdown").classList.toggle("visible");
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
    
    function newArticle() {
        let newArticle = document.forms['addArticle'][0]['value'];
        let test = document.createElement("div");
        test.className = "article";
        document.getElementById("feed").append(test);
        test.innerHTML = newArticle;
        console.log(document.forms);
        console.log(document.forms['addArticle'][0]['value'])
    }

    let formSubmit=document.getElementById("submit");
    console.log(formSubmit)
    formSubmit.onclick = newArticle;





});
