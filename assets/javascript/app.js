var question1 = $(".q1").val();
var question2 = $(".q2").val();
var question3 = $(".q3").val();
var question4 = $(".q4").val();
var question5 = $(".q5").val();

var correct = 0;
var wrong = 0;
var unanswered = 0;
var timer;
var counter = 0;
var timeLeft = 60;


correctText = $("#correct");
wrongText = $("#wrong");
unansweredText = $("#not-answered");

function ques1() {
    for (i = 0; i < question1.length; i++) {
        if (question1[i].checked === val("answer")) {
            console.log("correct");
        }
        else if (question1[i].checked === val("wrong")) {
            console.log("wrong");
        }
    }
}

function displayFinished() {
    $("#finished").css({
        "visibility": "visible", "position": "absolute", "top": "25%",
        "text-align": "center"
    });
    $("#radio").css("visibility", "hidden");
    $("#timer").css("visibility", "hidden");
}



function startTime() {

    var timer = $("#timer");
    timer.text("00:00");

    function timeIt() {
        counter++;
        timer.text(timeLeft - counter);

        if (counter == timeLeft) {
            console.log("out of time")
            clearInterval();
            displayFinished();
        }
    }
    setInterval(timeIt, 1000)
}

function timeUp() {
    $("#finished").css({
        "visibility": "visible", "position": "absolute", "top": "25%",
        "text-align": "center"
    });
    $("#radio").css("visibility", "hidden");
    $("#timer").css("visibility", "hidden");
}

setTimeout(timeUp, 60000);



$("#start-button").on("click", function () {
    $("#start-button").css("visibility", "hidden");
    $("#radio").css("visibility", "visible");

    startTime();
});



$("#button").on("click", function () {
    console.log("submit");


    $("#finished").css({
        "visibility": "visible", "position": "absolute", "top": "25%",
        "text-align": "center"
    });
    $("#radio").css("visibility", "hidden");
    $("#timer").css("visibility", "hidden");
});

