function populate(){
    if (quiz.isEnded()){
        showScores();

    }
    else {
        // show questions
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
        
        // show choices
        var choices = quiz.getQuestionIndex().choices;
        for (var i=0; i < choices.length ; i++){
            var element = document.getElementById("choice"+i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();
    }
};

function guess(id, guess){
    var button = document.getElementById(id);
    button.onclick = function(){
        quiz.guess(guess);
        populate();
    }

};

function showProgress(){
    var currentQuestionNumber = quiz.questionIndex + 1 ;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores(){
    var gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2 id='score'>Your scores:" + quiz.score + "</h2>";

    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
};

var  questions = [
    new Question("A rocket moves forward when ___________ are expelled from the rear of the rocket",["waters","gases","forces of gravity","fuels"],"gases"),
    new Question("The development of multistage rockets made it possible to send rockets farther into space.",["True","Flase"],"True"),
    new Question("There are usually ____________ stages in a multistage rockets.",["3","4","2","1"],"3"),
    new Question("The moon is a satellite.",["True","False"],"True"),
    new Question("The first artificial satellite was launched in",["1967","1947","1977","1957"],"1957"),
    new Question("Geosynchronous satellites revolve around Earth ______________ Earth rotates.",["faster than the","slower than the","None of these","at the same rate that"],"at the same rate that"),
    new Question("The first space station was launched in",["1971","1961","1951","1981"],"1971"),
    new Question("The first space shuttle was launched in",["1991","1981","1961","1971"],"1981")
];

var quiz = new Quiz(questions);

populate();
