// Adicione o link do Font Awesome nas configurações do CodePen:
// https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css

// Sistema de Testemunhos
let testemunhoAtual = 0;
const testemunhos = document.querySelectorAll('.testemunho');

function mudarTestemunho(direcao) {
    testemunhos[testemunhoAtual].classList.remove('ativo');
    testemunhoAtual = (testemunhoAtual + direcao + testemunhos.length) % testemunhos.length;
    testemunhos[testemunhoAtual].classList.add('ativo');
}

// Sistema de Oração
function mostrarOracao() {
    document.getElementById('oracao').classList.toggle('escondido');
}

// Contador de Visitantes
function atualizarContador() {
    let visitas = localStorage.getItem('visitas') || 0;
    visitas = parseInt(visitas) + 1;
    localStorage.setItem('visitas', visitas);
    document.getElementById('contador').textContent = visitas;
}

// Sistema de Pedidos de Oração
document.getElementById('formOracao').addEventListener('submit', function(e) {
    e.preventDefault();
    const texto = this.querySelector('textarea').value;
    const pedidos = JSON.parse(localStorage.getItem('pedidosOracao')) || [];
    
    pedidos.unshift({
        texto: texto,
        data: new Date().toLocaleString()
    });

    localStorage.setItem('pedidosOracao', JSON.stringify(pedidos.slice(0, 5)));
    this.reset();
    carregarPedidos();
});

function carregarPedidos() {
    const pedidos = JSON.parse(localStorage.getItem('pedidosOracao')) || [];
    document.getElementById('oracoesRecentes').innerHTML = pedidos
        .map(pedido => `
            <div class="pedido-item">
                <p>${pedido.texto}</p>
                <small>${pedido.data}</small>
            </div>
        `).join('');
}

// Sistema de Newsletter
document.getElementById('formNewsletter').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input').value;
    if (validateEmail(email)) {
        alert('Inscrição confirmada! Verifique seu e-mail 📧');
        this.reset();
    }
});

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    atualizarContador();
    carregarPedidos();
    setInterval(() => mudarTestemunho(1), 7000);
    
    // Scroll Suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
