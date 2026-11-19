const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();

    const empresa = document.getElementById("empresa").value.trim();

    const telefone = document.getElementById("telefone").value.trim();

    const mensagem = document.getElementById("mensagem").value.trim();


    const numeroWhatsApp = "5561991843211";


    const texto = `
Olá! Gostaria de solicitar um atendimento para minha empilhadeira.

Nome: ${nome}

Empresa: ${empresa}

Telefone: ${telefone}

Problema / serviço:
${mensagem}
    `;


    const url =
        `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;


    window.open(url, "_blank");

});
