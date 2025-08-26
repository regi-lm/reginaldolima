
document.getElementById("form-whatsapp").addEventListener("submit", function(e){
    e.preventDefault(); // Evita envio padrão

    // Pega os valores
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    // Número de destino (substitua pelo seu número com DDI e DDD, ex: 5511999998888)
    let telefone = "5591984536649";

    // Monta a mensagem
    let texto = `Olá, meu nome é ${nome}.%0A` +
                `Meu e-mail: ${email}.%0A` +
                `Assunto: ${mensagem}`;

    // Redireciona para o WhatsApp
    let url = `https://wa.me/${telefone}?text=${texto}`;

    // Abre o WhatsApp
    window.open(url, "_blank");

    // Limpa os campos do formulário
    this.reset();
});