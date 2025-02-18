// Sistema de Testemunhos
let testemunhoAtual = 0;
const testemunhos = document.querySelectorAll('.testemunho');

function mudarTestemunho(direcao) {
    testemunhos.forEach(testemunho => {
        testemunho.style.opacity = '0';
        testemunho.classList.remove('ativo');
    });
    
    testemunhoAtual = (testemunhoAtual + direcao + testemunhos.length) % testemunhos.length;
    
    setTimeout(() => {
        testemunhos[testemunhoAtual].style.opacity = '1';
        testemunhos[testemunhoAtual].classList.add('ativo');
    }, 300);
}

// Sistema de Oração
function mostrarOracao() {
    document.getElementById('oracao').classList.toggle('escondido');
}

// Contador de Visitantes
function atualizarContador() {
    if (typeof Storage !== 'undefined') {
        let visitas = localStorage.getItem('visitas') || 0;
        visitas = parseInt(visitas) + 1;
        localStorage.setItem('visitas', visitas);
        document.getElementById('contador').textContent = visitas;
    }
}

// Sistema de Pedidos de Oração
document.getElementById('formOracao').addEventListener('submit', function(e) {
    e.preventDefault();
    const texto = this.querySelector('textarea').value.trim();
    
    if (texto) {
        const pedidos = JSON.parse(localStorage.getItem('pedidosOracao')) || [];
        pedidos.unshift({
            texto: texto,
            data: new Date().toLocaleString('pt-BR')
        });
        
        localStorage.setItem('pedidosOracao', JSON.stringify(pedidos.slice(0, 5)));
        this.reset();
        carregarPedidos();
    }
});

function carregarPedidos() {
    if (typeof Storage !== 'undefined') {
        const pedidos = JSON.parse(localStorage.getItem('pedidosOracao')) || [];
        const container = document.getElementById('oracoesRecentes');
        container.innerHTML = pedidos.map(pedido => `
            <div class="pedido-item">
                <p>${pedido.texto}</p>
                <small>${pedido.data}</small>
            </div>
        `).join('');
    }
}

// Sistema de Newsletter
document.getElementById('formNewsletter').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input').value;
    
    if (validateEmail(email)) {
        alert('📬 Inscrição confirmada! Verifique seu e-mail.');
        this.reset();
    } else {
        alert('⚠️ Por favor, insira um e-mail válido.');
    }
});

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Ativar recursos
    if (typeof Storage !== 'undefined') {
        atualizarContador();
        carregarPedidos();
    }
    
    // Configurar carrossel automático
    setInterval(() => mudarTestemunho(1), 7000);
    
    // Scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
