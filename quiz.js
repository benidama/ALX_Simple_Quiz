function checkAnswer() {
  let correctAnswer = "4";
  let userAnswer = document.querySelector("input").value.checked;
  const names = document.querySelector("quiz");
  const answer = document.querySelector("#choice1").value.checked;
  if (correctAnswer === userAnswer && correctAnswer === answer) {
    document.getElementById("feedback").innerHTML = "Correct! Well done.";
  } else {
    document.getElementById("feedback").innerHTML =
      "That's incorrect. Try again!";
  }
}

const submitAnswer = document.getElementById("submit-answer");
submitAnswer.addEventListener("click", checkAnswer);
