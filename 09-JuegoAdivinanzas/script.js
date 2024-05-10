const riddles = [
  {
    question: "Se mira pero no se toca. ¿Qué es?",
    answer: "espejo",
  },
  {
    question:
      "Blanco por dentro, verde por fuera. Si quieres que te lo diga, espera. ¿Qué es?",
    answer: "pera",
  },
  {
    question: "¿Qué tiene llaves pero no abre puertas?",
    answer: "piano",
  },
  {
    question: "Siempre va por delante, pero nunca llega. ¿Qué es?",
    answer: "camino",
  },
  {
    question: "Tiene dientes y no puede comer. ¿Qué es?",
    answer: "peine",
  },
  {
    question: "Cuanto más seca, más moja. ¿Qué es?",
    answer: "toalla",
  },
  {
    question: "Vuela sin alas, llora sin ojos. ¿Qué es?",
    answer: "nube",
  },
  {
    question:
      "Es pequeño como un ratón, pero guarda la casa como un león. ¿Qué es?",
    answer: "cerradura",
  },
  {
    question: "Tiene agujas pero no cose. ¿Qué es?",
    answer: "reloj",
  },
  {
    question:
      "Es blanco como la nieve, pero si lo metes en el café, el café se pone negro. ¿Qué es?",
    answer: "azúcar",
  },
];

let currentRiddle;
let correctAnswer = 0;

function loadNewRiddle() {
  currentRiddle = riddles[Math.floor(Math.random() * riddles.length)];
  document.getElementById("riddle").innerText = currentRiddle.question;
}

document.addEventListener("DOMContentLoaded", function () {
  loadNewRiddle();
});

function checkAnswer() {
  const userAnswer = document.getElementById("answer").value.toLowerCase();

  if (userAnswer === currentRiddle.answer) {
    document.getElementById("result").innerText = "¡Correcto!";
    document.getElementById("result").style.color = "green";
    correctAnswer++;
    document.getElementById("correctCount").innerText = correctAnswer;

    loadNewRiddle();
  } else {
    document.getElementById("result").innerText = "¡Inténtalo de nuevo!";
    document.getElementById("result").style.color = "red";
  }
}
