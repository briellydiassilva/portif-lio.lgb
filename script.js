document.addEventListener("DOMContentLoaded", function(){
    const formElemento = document.getElementById('form');
    const email = document.getElementById('email');
    const nome = document.getElementById('nome');
    const mensagem = document.getElementById('mensagem');

    formElemento.addEventListener('submit', evento => {
        if (nome.value === "" || email.value === "" || mensagem.value === "") {
            evento.preventDefault(); 
            alert("Por favor, preencha todos os campos.");
            return;
        }
    });

})






