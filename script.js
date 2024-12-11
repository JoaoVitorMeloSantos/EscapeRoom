// Código correto e de distração
const correctCode = "7216";

// Pegando elementos da página
const input = document.getElementById("codeInput");
const feedback = document.getElementById("feedback");
const button = document.getElementById("submitButton");

// Sons
const successSound = new Audio('sons/som_sucesso.wav');
const errorSound = new Audio('sons/som_erro.wav');

// Função para efeitos visuais
function applyVisualEffect(type) {
  const body = document.body;
  if (type === "success") {
    body.style.backgroundColor = "#00AF54";
    setTimeout(() => (body.style.backgroundColor = "#1a1a1a"), 8000);
  } else if (type === "error") {
    body.style.backgroundColor = "#FF101F";
    setTimeout(() => (body.style.backgroundColor = "#1a1a1a"), 5000);
  }
}

// Função para verificar o código
function validateCode() {
  const inputCode = input.value.trim();

  if (inputCode === correctCode) {
    successSound.play();
    applyVisualEffect("success");
    feedback.style.color = "#00AF54";
    feedback.textContent = "🎉 Parabéns! Você conseguiu escapar! 🎯";
  } else {
    errorSound.play();
    applyVisualEffect("error");
    feedback.style.color = "#FF101F";
    feedback.textContent = "❌ Código inválido! Tente novamente. ❌";
  }
}

// Event listener do botão
button.addEventListener("click", validateCode);
