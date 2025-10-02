function checkAnswer() {
  const correctAnswer = "4"; // ✅ correct answer
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  const userAnswer = selectedOption ? selectedOption.value : null;
  const feedback = document.getElementById("feedback");

  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
    feedback.style.color = "#28a745"; // green
  } else {
    feedback.textContent = "That's incorrect. Try again!";
    feedback.style.color = "#dc3545"; // red
  }
}
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
