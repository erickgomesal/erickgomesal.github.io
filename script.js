document.addEventListener('DOMContentLoaded', function() {
    // Formulário de Pedido de Oração
    const oracaoForm = document.querySelector('#oração form');
    oracaoForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        const nome = document.querySelector('#oração input[type="text"]').value;
        const email = document.querySelector('#oração input[type="email"]').value;
        const mensagem = document.querySelector('#oração textarea').value;

        // Exibir mensagem de sucesso
        alert('Pedido de oração enviado com sucesso!');

        // Limpar o formulário
        oracaoForm.reset();
    });

    // Formulário de Comentários
    const comentariosForm = document.querySelector('#comentarios form');
    comentariosForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        const nome = document.querySelector('#comentarios input[type="text"]').value;
        const comentario = document.querySelector('#comentarios textarea').value;

        // Criar novo comentário
        const novoComentario = document.createElement('div');
        novoComentario.classList.add('comentario');
        novoComentario.innerHTML = `<p>"${comentario}" - ${nome}</p>`;

        // Adicionar novo comentário à lista
        const comentariosLista = document.querySelector('#comentarios-lista');
        comentariosLista.appendChild(novoComentario);

        // Exibir mensagem de sucesso
        alert('Comentário adicionado com sucesso!');

        // Limpar o formulário
        comentariosForm.reset();
    });

    // Formulário de Newsletter
    const newsletterForm = document.querySelector('#newsletter form');
    newsletterForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        const email = document.querySelector('#newsletter input[type="email"]').value;

        // Exibir mensagem de sucesso
        alert('Inscrição realizada com sucesso!');

        // Limpar o formulário
        newsletterForm.reset();
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Função para exibir mensagem de sucesso
    function mostrarMensagemSucesso(mensagem) {
        const mensagemSucesso = document.createElement('div');
        mensagemSucesso.id = 'mensagem-sucesso';
        mensagemSucesso.classList.add('show');
        mensagemSucesso.textContent = mensagem;
        document.body.appendChild(mensagemSucesso);

        // Remover mensagem após 5 segundos
        setTimeout(() => {
            mensagemSucesso.remove();
        }, 5000);
    }

    // Formulário de Pedido de Oração
    const oracaoForm = document.querySelector('#oração form');
    oracaoForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        const nome = document.querySelector('#nome-oracao').value;
        const email = document.querySelector('#email-oracao').value;
        const mensagem = document.querySelector('#mensagem-oracao').value;

        // Exibir mensagem de sucesso
        mostrarMensagemSucesso('Pedido de oração enviado com sucesso!');

        // Limpar o formulário
        oracaoForm.reset();
    });

    // Formulário de Comentários
    const comentariosForm = document.querySelector('#comentarios form');
    comentariosForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        const nome = document.querySelector('#nome-comentario').value;
        const comentario = document.querySelector('#comentario-texto').value;

        // Criar novo comentário
        const novoComentario = document.createElement('div');
        novoComentario.classList.add('comentario');
        novoComentario.innerHTML = `<p>"${comentario}" - ${nome}</p>`;

        // Adicionar novo comentário à lista
        const comentariosLista = document.querySelector('#comentarios-lista');
        comentariosLista.appendChild(novoComentario);

        // Exibir mensagem de sucesso
        mostrarMensagemSucesso('Comentário adicionado com sucesso!');

        // Limpar o formulário
        comentariosForm.reset();
    });

    // Formulário de Newsletter
    const newsletterForm = document.querySelector('#newsletter form');
    newsletterForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        const email = document.querySelector('#email-newsletter').value;

        // Exibir mensagem de sucesso
        mostrarMensagemSucesso('Inscrição realizada com sucesso!');

        // Limpar o formulário
        newsletterForm.reset();
    });
});
