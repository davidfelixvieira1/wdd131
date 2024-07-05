// Seleciona o elemento span onde será exibido o ano atual
const currentYearSpan = document.getElementById('currentyear');

// Obtém o ano atual
const currentYear = new Date().getFullYear();

// Define o ano atual no elemento span
currentYearSpan.textContent = currentYear;

// Seleciona o elemento p onde será exibida a data da última modificação
const lastModifiedParagraph = document.getElementById('lastModified');

// Obtém a data da última modificação do documento
const lastModified = document.lastModified;

// Define a data da última modificação no elemento p
lastModifiedParagraph.textContent = `Last Modified: ${lastModified}`;


