$(document).ready(function () {


    for (let i = 1; i < 5; i++) {
        $.ajax({
            url: "https://api.punkapi.com/v2/beers/" + i,
            method: "GET",
            dataType: "json",
        })

            .done(function (response) {
                addArticle(response, i)
            })
    }


    function addArticle(response, i) {
        $(".article" + (i - 1)).clone().prependTo(".feed").removeClass('article' + (i - 1)).addClass('article' + i);
        $(".article0").remove();
        $(".article" + i + " .title").text(response[0].name);
        $(".article" + i + " .description").text(response[0].description);
        $(".article" + i + " .image").attr('src', response[0].image_url);
    };












});