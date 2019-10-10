var question1 = $(".q1").val();
var question2 = $(".q2").val();
var question3 = $(".q3").val();
var question4 = $(".q4").val();
var question5 = $(".q5").val();
var valFilter;
var filtered;
var correct = 0;
var wrong = 0;
var unanswered = 0;
var timer;
var counter = 0;
var timeLeft = 60;


correctText = $("#correct");
wrongText = $("#wrong");
unansweredText = $("#not-answered");

$(document).ready(function () {
    var radio = $("input[name='question1']");
    radio.change(function () {
        var filtered = radio.filter(":checked");

        console.log(filtered.val());
        var valFilter = filtered.val();

        if (valFilter === "answer") {
            correct++;
            console.log(correct)
        }
        if (valFilter === "wrong") {
            console.log(wrong);
            wrong++;
        }



    })
});
$(document).ready(function () {
    var radio = $("input[name='question2']");
    radio.change(function () {
        var filtered = radio.filter(":checked");

        console.log(filtered.val());
        var valFilter = filtered.val();

        if (valFilter === "answer") {
            correct++;
            console.log(correct)
        }
        if (valFilter === "wrong") {
            console.log(wrong);
            wrong++;
        }



    })
});
$(document).ready(function () {
    var radio = $("input[name='question3']");
    radio.change(function () {
        var filtered = radio.filter(":checked");

        console.log(filtered.val());
        var valFilter = filtered.val();

        if (valFilter === "answer") {
            correct++;
            console.log(correct)
        }
        if (valFilter === "wrong") {
            console.log(wrong);
            wrong++;
        }



    })
});
$(document).ready(function () {
    var radio = $("input[name='question4']");
    radio.change(function () {
        var filtered = radio.filter(":checked");

        console.log(filtered.val());
        var valFilter = filtered.val();

        if (valFilter === "answer") {
            correct++;
            console.log(correct)
        }
        if (valFilter === "wrong") {
            console.log(wrong);
            wrong++;
        }

    })
});
$(document).ready(function () {
    var radio = $("input[name='question5']");
    radio.change(function () {
        var filtered = radio.filter(":checked");

        console.log(filtered.val());
        var valFilter = filtered.val();

        if (valFilter === "answer") {
            correct++;
            console.log(correct)
        }
        if (valFilter === "wrong") {
            console.log(wrong);
            wrong++;
        }



    })
});



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
    $("#start-screen").css("visibility", "hidden");
    $("#quiz").css({
        "visibility": "visible", "position": "absolute",
        "top": "20%"
    });


    startTime();
});



$("#button").on("click", function () {
    console.log("submit");


    $("#finished").css({
        "visibility": "visible", "position": "absolute", "top": "25%", "left": "30%",
        "text-align": "center"
    });
    $("#radio").css("visibility", "hidden");
    $("#timer").css("visibility", "hidden");

    correctText.text(correct);
    wrongText.text(wrong);
    unansweredText.text(unanswered);

});

