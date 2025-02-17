// script.js
let testemunhoAtual = 0;
const testimonials = document.querySelectorAll(".testemunho");

// Função do Carrossel
function mudarTestemunho(n) {
  testimonials[testemunhoAtual].classList.remove("ativo");
  testemunhoAtual =
    (testemunhoAtual + n + testimonials.length) % testimonials.length;
  testimonials[testemunhoAtual].classList.add("ativo");
}

// Troca Automática
setInterval(() => mudarTestemunho(1), 5000);

// Newsletter
document
  .getElementById("form-newsletter")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const email = this.querySelector("input").value;
    if (validateEmail(email)) {
      alert("Recursos enviados para: " + email);
      this.reset();
    } else {
      alert("Por favor, insira um e-mail válido.");
    }
  });

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Mostrar/Ocultar Oração
function mostrarOracao() {
  document.getElementById("oracao").classList.toggle("hidden");
}
// Novas Funções Interativas
// Modo Noturno
function toggleModoNoturno() {
  document.body.classList.toggle("modo-noturno");
  localStorage.setItem(
    "modoNoturno",
    document.body.classList.contains("modo-noturno")
  );
}

// Progresso de Leitura
window.addEventListener("scroll", () => {
  const scrollTotal =
    document.documentElement.scrollHeight - window.innerHeight;
  const porcentagem = (window.scrollY / scrollTotal) * 100;
  document.querySelector(".barra").style.width = porcentagem + "%";
});

// Quiz Bíblico
function verificarResposta(botao, correta) {
  const feedback = document.getElementById("feedback-quiz");
  feedback.classList.remove("hidden");

  if (correta) {
    feedback.innerHTML =
      "🎉 Resposta Correta! 'Pedro chorou amargamente...' (Lucas 22:62)";
    feedback.style.color = "green";
    botao.style.background = "#2ecc71";
  } else {
    feedback.innerHTML = "❌ Tente novamente! Leia Lucas 22:54-62";
    feedback.style.color = "red";
    botao.style.background = "#e74c3c";
  }
}

// Caixa de Oração
function enviarOracao() {
  const texto = document.querySelector(".caixa-oracao textarea").value;
  if (texto.length > 10) {
    alert("Oração enviada! Deus te ouve sempre ❤️");
    document.querySelector(".caixa-oracao").classList.remove("ativo");
  } else {
    alert("Escreva pelo menos 10 caracteres");
  }
}

// Mostrar Caixa de Oração
document.querySelector("nav").addEventListener("dblclick", () => {
  document.querySelector(".caixa-oracao").classList.toggle("ativo");
});

// Carregar Modo Noturno
if (localStorage.getItem("modoNoturno") === "true") {
  document.body.classList.add("modo-noturno");
}

// Efeito de Digitação no Título
const tituloHero = document.querySelector(".hero h1");
new TypeIt(tituloHero, {
  speed: 100,
  lifeLike: true,
  cursor: false
}).go();
// Sistema de Pedidos de Oração
const formOracao = document.getElementById("form-oracao");
const listaOracoes = document.getElementById("oracoes-recentes");

function carregarOracoes() {
  const oracoes = JSON.parse(localStorage.getItem("oracoes")) || [];
  listaOracoes.innerHTML = oracoes
    .slice(-5)
    .reverse()
    .map(
      (oracao) => `
        <div class="oracao-item">
            <p>"${oracao.texto}"</p>
            <small>${new Date(oracao.data).toLocaleDateString()}</small>
        </div>
    `
    )
    .join("");
}

formOracao.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(this);

  const novaOracao = {
    nome: formData.get("nome") || "Anônimo",
    email: formData.get("email") || "",
    texto: formData.get("texto"),
    data: new Date().toISOString()
  };

  const oracoes = JSON.parse(localStorage.getItem("oracoes")) || [];
  oracoes.push(novaOracao);
  localStorage.setItem("oracoes", JSON.stringify(oracoes));

  carregarOracoes();
  this.reset();
  alert("Seu pedido foi enviado! Nossa comunidade irá orar por você ❤️");
});

// Contador de Visitantes
function atualizarContador() {
  let visitas = localStorage.getItem("visitas") || 0;
  visitas = parseInt(visitas) + 1;
  localStorage.setItem("visitas", visitas);

  // Simulação de crescimento orgânico
  const contador = document.getElementById("contador");
  let contagem = parseInt(contador.textContent);
  const incremento = Math.floor(Math.random() * 3) + 1; // Simula visitas em tempo real

  const intervalo = setInterval(() => {
    contagem += incremento;
    contador.textContent = contagem;
    if (contagem >= visitas) clearInterval(intervalo);
  }, 100);
}

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  carregarOracoes();
  atualizarContador();

  // Atualização periódica do contador
  setInterval(() => {
    const contador = document.getElementById("contador");
    contador.textContent =
      parseInt(contador.textContent) + Math.floor(Math.random() * 2);
  }, 300000); // Atualiza a cada 5 minutos
});