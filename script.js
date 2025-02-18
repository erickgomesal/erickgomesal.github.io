document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-pedido");
    const btnReceber = document.getElementById("btn-receber");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const nome = document.getElementById("nome").value;
        const pedido = document.getElementById("pedido").value;
        
        if (nome.trim() === "" || pedido.trim() === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }
        
        alert("Pedido enviado com sucesso! Que Deus te abençoe.");
        
        form.reset();
    });
    
    if (btnReceber) {
        btnReceber.addEventListener("click", function () {
            alert("Obrigado! Em breve você receberá novidades.");
        });
    }
});
