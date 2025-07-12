const answers = [
  "Yes",
  "No",
  "Maybe",
  "Ask again later",
  "Definitely",
  "Absolutely not",
  "It is certain",
  "Very doubtful",
  "Outlook good",
  "Don't count on it",
  "Without a doubt",
  "Concentrate and ask again"
];

document.getElementById("shakeBtn").addEventListener("click", () => {
  const question = document.getElementById("question").value.trim();
  const response = document.getElementById("response");
  const answer = document.getElementById("answer");

  if (question === "") {
    response.textContent = "Please ask a question!";
    answer.textContent = "!";
    return;
  }

  // Random answer
  const randomIndex = Math.floor(Math.random() * answers.length);
  const reply = answers[randomIndex];

  // Animate and display answer
  answer.textContent = "";
  response.textContent = "Shaking...";
  
  setTimeout(() => {
    answer.textContent = "8";
    response.textContent = reply;
  }, 1000);
});
