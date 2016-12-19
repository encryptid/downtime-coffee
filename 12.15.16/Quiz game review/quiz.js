let current = {
    answer: null,
    points: 0,
    }; // the current question

    let score = 0; // the player's current score

/**
 * Anonymous function version of init().
 */
window.addEventListener('load', function() {
    // 1. Get a question
    // 2. make the button check the answer and get a new question
    getNewQuestion();

    let submit = document.querySelector('#submit');
    submit.addEventListener('click', checkAnswer);
});

function checkAnswer() {
    // 1. check if the text they typed in (guess) is the same as
    // the answer to the question
    let guessBox = document.querySelector('#guess'); // create "guess" which
    // references id #guess in html and is referencing the text (or value) of
    // the text box
    // let answer = 'something'; // here, this function doesn't have the info that
    // the other sections have from the API, so we need to include the info
    // somehow. So we added the info up at line 1 to share with the functions.
    // So...

    if (guessBox.value === current.answer) { // check user guess against known answer
        //give points
        score = score + current.points;
        // display in on the screen
        document.querySelector('#player-score').textContent = score;
    }
    guessBox.value = '';
    getNewQuestion(); // this runs after points are given
}

// Make an AJAX request to get a new question
function getNewQuestion() {
    let request = new XMLHttpRequest(); // create new request obj
    request.open('GET', 'http://jservice.io/api/random'); // request what?
    request.addEventListener('load', function () {
        // responseText is built-in to the XMLHttpRequest object
        let response = JSON.parse(request.responseText);
        let question = response[0];

        showQuestion(question); //adding the question text from the API
    }); // what do we do once we get the response back
    request.send();
}

function showQuestion (q) {
    // "DOM"-my things
    // Update the question text
    let question = document.querySelector('#question');
    question.textContent = q.question;

    // Update the points display
    let points = document.querySelector('#points');
    points.textContent = q.value;

    // Update the category
    let category = document.querySelector('#category');
    category.textContent = q.category.title;
}