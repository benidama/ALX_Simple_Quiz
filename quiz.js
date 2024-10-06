function checkAnswer() {
  let correctAnswer = "4";
  let userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;
  // const names = document.querySelector("quiz");
  // const answer = document.querySelector("#choice1").value.checked;
  if (userAnswer === correctAnswer) {
    document.getElementById("feedback").textContent = "Correct! Well done.";
  } else {
    document.getElementById("feedback").textContent =
      "That's incorrect. Try again!";
  }
}

const submitAnswer = document.getElementById("submit-answer");
submitAnswer.addEventListener("click", checkAnswer);
