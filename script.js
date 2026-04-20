const text = `Oi Clara, passando só pra te desejar feliz aniversário.

Eu poderia começar essa mensagem de várias formas…
mas a verdade é que, mesmo com o nosso distanciamento,
ainda existe uma parte de mim que lembra de você em silêncio
principalmente em dias como hoje.

Eu lembro do seu sorriso
(era tão bom te ver sorrindo),
da sua voz,
da forma como você iluminava até os momentos mais simples.

Nunca vou esquecer de como você me fazia se sentir
nos momentos em que havia leveza entre a gente.

E mesmo que a vida tenha trilhado caminhos diferentes pra nós dois,
nada disso deixou de ser real
ou importante pra mim.

Hoje, mais do que qualquer coisa,
eu só quero te desejar coisas boas.

Que sua vida esteja leve,
que seus dias sejam felizes,
que você esteja sendo cuidada pela vida
do jeito que merece, espero que possa realizar todos seus sonhos e metas.

A gente não foi pra sempre…
mas foi verdadeiro.

E isso sempre vai ter valor pra mim.

Fica com Deus,
e feliz aniversário.

MFDM 🩵
21/04/2026
` 

let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;

    let delay = Math.random() * 60 + 20;

    // pausas 
    if (text.substring(i-10, i).includes("aniversário")) delay = 800;
    if (text.substring(i-10, i).includes("verdadeiro")) delay = 1000;

    setTimeout(typeWriter, delay);
  }
}

window.onload = () => {
  typeWriter();

  // música começa baixa
  const music = document.getElementById("bgMusic");
  music.volume = 0.2;
};

function openImage() {
  document.getElementById("modal").classList.add("active");

  // vibração (mobile)
  if (navigator.vibrate) {
    navigator.vibrate(50);
  }
}

function closeImage() {
  document.getElementById("modal").classList.remove("active");
}

const music = document.getElementById("bgMusic");

document.body.addEventListener("click", () => {
  music.volume = 0.15;
  music.play();
}, { once: true });
