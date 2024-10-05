function checkAnswer() {
  let correctAnswer = "4";
  let userAnswer = document.querySelector("input").value.checked;
  if (correctAnswer === userAnswer) {
    document.getElementById("feedback").innerHTML = "Correct! Well done.";
  } else {
    document.getElementById("feedback").innerHTML =
      "That's incorrect. Try again!";
  }
}

const submitAnswer = document.getElementById("submit-answer");
submitAnswer.addEventListener("click", checkAnswer);
