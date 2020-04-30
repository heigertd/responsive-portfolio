$(".mo-bo").on("click", function () {
        let newP = $("<p>").html("<strong>HTML CSS JavaScript</strong><br> This was the first project for the UW bootcamp. I worked on the CSS and HTML for the social page. I also worked on the API routes to populate the news articles");

        let newA = $("<a>").text("Github Repository");
        newA.attr("href", "https://github.com/bbelka/covidDistractions")

        let newA2 = $("<a>").text("Deployed Site");
        newA2.attr("href", "https://bbelka.github.io/covidDistractions/")

        $(".content").append(newP, newA, newA2)

    $(".pop-up").attr("style", "display: flex")
});

$(".mo-bo2").on("click", function () {
    let newP = $("<p>").html("<strong>HTML CSS JavaScript</strong><br> An app that uses local storage to save the results of previous quizes. Also tells you how far you are from the top position. It includes a timer that counts down and removes time for every wrong answer. Once the timer hits zero the quiz is over.");

    let newA = $("<a>").text("Github Repository");
    newA.attr("href", "https://github.com/heigertd/quiz-timed")

    let newA2 = $("<a>").text("Deployed Site");
    newA2.attr("href", "https://heigertd.github.io/quiz-timed/")

    $(".content").append(newP, newA, newA2)

$(".pop-up").attr("style", "display: flex")
});

$(".mo-bo3").on("click", function () {
    let newP = $("<p>").html("<strong>HTML CSS JavaScript</strong><br> Another local stoage app that allows you to keep track of your day plans. It also keeps track of the time and changes style depending on the time of day");

    let newA = $("<a>").text("Github Repository");
    newA.attr("href", "https://github.com/heigertd/work-day")

    let newA2 = $("<a>").text("Deployed Site");
    newA2.attr("href", "hhttps://heigertd.github.io/work-day/")

    $(".content").append(newP, newA, newA2)

$(".pop-up").attr("style", "display: flex")
});

$(".mo-bo4").on("click", function () {
    let newP = $("<p>").html("<strong>HTML CSS JavaScript mySQL Node Express</strong><br> Full stack application that allows a user to create a profile and then creat a tournament bracket with 8 options. Other users can view the bracket and vote on the pairings. I worked mainly on the front HTML, CSS, and connecting the front end to the back end");

    let newA = $("<a>").text("Github Repository");
    newA.attr("href", "https://github.com/meganjacobs97/MODY")

    let newA2 = $("<a>").text("Deployed Site");
    newA2.attr("href", "https://modybrackets.herokuapp.com/")

    $(".content").append(newP, newA, newA2)

$(".pop-up").attr("style", "display: flex")
});



$(".close-btn").on("click", function () {
    $(".pop-up").attr("style", "display: hidden")
    $(".content").empty()
})

