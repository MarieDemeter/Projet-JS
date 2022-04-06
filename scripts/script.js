$(document).ready(function () {

    function chooseajax() {
        $.ajax({
            url: "https://api.punkapi.com/v2/beers",
            method: "GET",
            dataType: "json",
        })

            .done(function (response) {
                addArticle(response)
            })

            .fail(function (error) {
                $(".feed").append("<div></div>");
                $(".feed div").text("Une Erreur s'est produite");
            })
    }

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
            }

            )
    }

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

    let button = document.createElement("input");
    document.getElementById("refresh").append(button);
    button.className = "icon";
    button.setAttribute('type', 'button');
    button.setAttribute('value', 'Refresh');
    button.onclick = chooseajax;





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



    function carouselImg(animals) {

        for (let i = 0; i < animals.length; i++) {
            console.log(animals[i].image_link);
            $("#img"+i).attr("src", animals[i].image_link)
        }
    }





});
