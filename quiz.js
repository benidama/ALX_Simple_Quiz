function checkAnswer() {
  const correctAnswer = "4";
  const userAnswer = document.querySelector("input").value.checked;
  if (userAnswer === correctAnswer) {
    document.textContent("Correct! Well done.");
  } else {
    document.textContent("That's incorrect. Try again!");
  }
}

const submitAnswer = document.getElementById("submit-answer");
submitAnswer.addEventListener("click", checkAnswer);
