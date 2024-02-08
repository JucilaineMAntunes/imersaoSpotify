//BOM DIA | BOA TARDE | BOA NOITE

// Obtém a referência do elemento com o ID "greeting"
const greetingElement = document.getElementById("greeting");

// Busca a hora atual
const currentHour = new Date().getHours();

// Mostra Mensagem
const greetingMessage =
  currentHour >= 5 && currentHour < 12
    ? "Good Morning!"
    : currentHour >= 12 && currentHour < 18
    ? "Good Afternoon!"
    : "Good Night!";

greetingElement.textContent = greetingMessage;
