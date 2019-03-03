var questionArea = $("#quiz");

// questions and answers

var questions = [{
    question: "Who is Harry's Godfather?",
    answers: ["Dumbledore", "Sirius Black", "Hagrid", "Mr. Weasley"],
    correct: "Sirus Black"
    },
    {
    question: "What is the name of the creature you can see only if you have seen someone die?",
    answers: ["Basilisk", "Centaur", "Thestrals", "Hippogriff"],
    correct: "Thestrals"
    },
    {
    question: "What is Ron Weasley deathly afraid of?",
    answers: ["Snakes", "His mum.", "Spiders", "Werewolves"],
    correct: "Spiders"
    },
    {
    question: "Who poses as Mad Eyed Moody?",
    answers: ["Lucius Malfoy", "Pedigrew", "Severus Snape", "Barty Crouch Junior"],
    correct: "Barty Crouch Junior"
    },
    {
    question: "What is the spell to make things float?",
    answers: ["Obliviate", "Sectumsempra", "Alohomora", "Wingardium Leviosa"],
    correct: "Wingardium Leviosa"
    },
    {
    question: "What did Professor Lupin believe Harry's biggest fear was?",
    answers: ["Voldemort", "Dementors", "Werewolf", "Death"],
    correct: "Seeker"
    },
    {
    question: "Who does Hermione go to the Yule Ball with?",
    answers: ["Ron Weasley", "Harry Potter", "Cedric Diggory", "Viktor Krum"],
    correct: "Viktor Krum"
    },
    {
    question: "Who killed Dumbledore?",
    answers: ["Voldemort", "Severus Snape", "Bellatrix Lestrange", "Draco Malfloy"],
    correct: "Severus Snape"
    },
    {
    question: "What would Sirius Black transfigure into when Lupin would change into a werewolf?",
    answers: ["A dog", "A deer", "A rat", "A cat"],
    correct: "A dog"
    },
    {
    question: "Out of the seven horcruxes which was the last horcrux destroyed?",
    answers: ["Tom Riddle's diary", "The Riddle family ring", "Nagini", "Ravenclaw's diadem"],
    correct: "Nagini"
}];

var timer;

var game = {

    correct: 0,
    incorrect: 0,
    counter: 110, // timer starts countdown from this number

    countdown: function() {
        game.counter--;
        $("#count-number").html(game.counter);
        if (game.counter === 0) {
            game.finished();
        }
    },

    start: function() {
        timer = setInterval(game.countdown, 1000);

        $("#quiz").prepend("<h2 style='text-align: center';>Time Remaining: <span id='count-number'>120</span> seconds</h2>");

        $("#button").remove();

        for (var i = 0; i < questions.length; i++) {
            questionArea.append("<h3>" + questions[i].question + "</h3>");
            for (var j = 0; j < questions[i].answers.length; j++) {
                questionArea.append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "''>" + " " + questions[i].answers[j] + "<br>");
           }
        }
        questionArea.append("<br><br><button id='done'>DONE</button>");
    },

    finished: function() {

        $.each($("input[name='question-0']:checked"), function(){
            if ($(this).val() === questions[0].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"), function(){
            if ($(this).val() === questions[1].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"), function(){
            if ($(this).val() === questions[2].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"), function(){
            if ($(this).val() === questions[3].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"), function(){
            if ($(this).val() === questions[4].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-5']:checked"), function(){
            if ($(this).val() === questions[5].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-6']:checked"), function(){
            if ($(this).val() === questions[6].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-7']:checked"), function(){
            if ($(this).val() === questions[7].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-8']:checked"), function(){
            if ($(this).val() === questions[8].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        this.result();
    },

    result: function() {

        clearInterval(timer);

        $("#quiz h2").remove();

        questionArea.html("<h2>Results</h2>");
        questionArea.append("<h3>Correct answers: " + this.correct + "</h3>");
        questionArea.append("<h3>Incorrect answers: " + this.incorrect + "</h3>");
        questionArea.append("<h3>Unanswered questions: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    }  
};

//click events//

$(document).on("click", "#button", function() {
    game.start();
});

$(document).on("click", "#done", function() {
    game.finished();
});