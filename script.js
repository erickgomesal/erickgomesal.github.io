// Adicione no início do arquivo
function carregarRecursos() {
    // Pré-carregar imagens
    const imagens = [
        'https://images.unsplash.com/photo-1589471387966-2d0400a6d62f',
        'https://images.unsplash.com/photo-1532012197267-3adc5d7e4a54'
    ];
    
    imagens.forEach(src => {
        new Image().src = src;
    });
}

// Modifique a função de carrossel
function mudarTestemunho(direcao) {
    testemunhos[testemunhoAtual].classList.remove('ativo');
    testemunhoAtual = (testemunhoAtual + direcao + testemunhos.length) % testemunhos.length;
    testemunhos[testemunhoAtual].classList.add('ativo');
}

// Adicione no DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    carregarRecursos();
    
    // Intersection Observer para animações
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animated').forEach(el => observer.observe(el));
});
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
