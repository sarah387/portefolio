const texte = "Bonjour, je suis Sarah Lansari";
let i = 0;
const typing = document.getElementById("typing");

function typeWriter() {
  if (i < texte.length) {
    typing.innerHTML += texte.charAt(i);
    i++;
    setTimeout(typeWriter, 70);
  }
}

typing.innerHTML = "";
typeWriter();
const toggleBtn = document.getElementById("toggle-theme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
