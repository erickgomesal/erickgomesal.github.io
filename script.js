document.addEventListener("DOMContentLoaded", function() {
    // Carrossel SwiperJS
    var swiper = new Swiper(".swiper-container", {
        loop: true,
        pagination: { el: ".swiper-pagination", clickable: true },
        navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }
    });

    // Quiz interativo
    document.getElementById("enviarQuiz").addEventListener("click", function() {
        let respostaSelecionada = document.querySelector('input[name="quiz"]:checked');
        let resultado = document.getElementById("resultadoQuiz");
        
        if (respostaSelecionada) {
            resultado.innerText = "Sua resposta foi enviada!";
        } else {
            resultado.innerText = "Por favor, selecione uma opção.";
        }
    });

    // Formulário de pedido de oração
    let contador = localStorage.getItem("contadorOracoes") || 0;
    document.getElementById("contador").innerText = contador;

    document.getElementById("pedidoOracao").addEventListener("submit", function(event) {
        event.preventDefault();
        contador++;
        localStorage.setItem("contadorOracoes", contador);
        document.getElementById("contador").innerText = contador;
        document.getElementById("confirmacao").innerText = "Pedido enviado com sucesso!";
    });
});
