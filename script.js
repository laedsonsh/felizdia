const text = `Oi, passando só pra te desejar feliz aniversário. 

Eu poderia começar essa mensagem de várias formas.. mas a verdade é que mesmo com nosso distanciamento, ainda existe uma parte de mim que lembra de você em silêncio, principalmente em dias como hoje. Eu lembro do seu sorriso, da sua voz, da forma como você iluminava até os momentos mais simples, nunca irei esquecer de como você me fazia se sentir em dias bons, mesmo que a vida tenha seguido caminhos diferentes pra nós dois, nada disso deixou de ser real ou importante pra mim, hoje mais do que qualquer coisa eu só quero te desejar coisas boas. Que sua vida esteja leve, que seus dias sejam felizes, que você esteja sendo cuidada pela vida do jeito que merece. A gente não foi pra sempre, mas foi verdadeiro, e isso sempre vai ter valor pra mim. 

Fica com Deus, e feliz aniversário. MFDM. 🩵 21/04/2026`

let i = 0;
const speed = 40;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;

function openImage() {
  document.getElementById("modal").classList.add("active");
}

function closeImage() {
  document.getElementById("modal").classList.remove("active");
}
