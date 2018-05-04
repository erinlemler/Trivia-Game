var questions = [
  {
    question: "Who is known as the ''Queen of Dragons?''",
    choices: ["Daenerys Targaryen", "Sansa Stark", "Cersei Lannister", "Arya Stark"],
    answer: "Daenerys Targaryen"
  },
  {
    question: "What kind of creature is a White Walker?",
    choices: ["Zomie", "Dragon", "Humanoid", "Robot"],
    answer: "Humanoid"
  },
  {
    question: "What is Bran Stark's ability called?",
    choices: ["Yellowsight", "Greensight", "Redsight", "Whitesight"],
    answer: "Greensight"
},
  {
    question: "Fill in the blank: 'You know nothing,______'",
    choices: ["Lord Varys", "Jaime Lannister", "Tyrion Lannister", "Jon Snow"],
    answer: "Jon Snow"
  }
];

var score = 0;
var clock = 20;

$(document).ready(function() {
  var timer = $('#timer');

  timer.text(clock);
  var gameTimer = setInterval(function(){
    clock = clock - 1;
    timer.text(clock);
    if(clock === 0) {
      clearInterval(gameTimer);
      scoreGame();
    }
  }, 1000);



  for(var i = 0; i < questions.length; i++) {
    var questionBox = $('<div>');
    var questionStem = $('<p>');
    questionStem.text(questions[i].question);

    var answerSection = $('<div>');
    for(var j = 0; j < questions[i].choices.length; j++) {
      var answerBtn = $('<input>' + questions[i].choices[j] + "</input>");
      answerBtn.attr('type', 'radio');
      answerBtn.attr('name', 'question' + i);
      answerBtn.attr('answer', questions[i].choices[j]);
      answerSection.append(answerBtn);
    }

    questionBox.append(questionStem);
    questionBox.append(answerSection);
    $('#game-zone').append(questionBox);
  }

  $('#score-btn').on('click', function() {
    scoreGame();
  });

  function scoreGame() {
    var userChoices = $( "input:checked" );
    for(var i = 0; i < userChoices.length; i++) {
      console.log($(userChoices[i]).attr('answer'));
      if($(userChoices[i]).attr('answer') === questions[i].answer) {
        score++;
      }
    }
    console.log(score);

    $('#results').text("you got " + score + " correct!");
  }

});




//
//
// make a game timer
// score questions after game ends on submit or timer up
