// Valida o formulário e envia a mensagem formatada para o WhatsApp.
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-whatsapp');

    if (!form) return;

    const telefone = '5591984536649';

    const setError = (field, message) => {
        const errorElement = field.nextElementSibling;
        if (errorElement && errorElement.classList.contains('field-error')) {
            errorElement.textContent = message;
        }
    };

    const validateField = (field) => {
        const value = field.value.trim();

        if (!value) {
            setError(field, 'Este campo é obrigatório.');
            return false;
        }

        if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            setError(field, 'Digite um e-mail válido.');
            return false;
        }

        if (field.minLength > 0 && value.length < field.minLength) {
            setError(field, `Digite pelo menos ${field.minLength} caracteres.`);
            return false;
        }

        setError(field, '');
        return true;
    };

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const nome = document.getElementById('nome');
        const email = document.getElementById('email');
        const mensagem = document.getElementById('mensagem');
        const campos = [nome, email, mensagem];
        const formularioValido = campos.every(validateField);

        if (!formularioValido) return;

        const texto = `Olá, meu nome é ${nome.value.trim()}.\nMeu e-mail: ${email.value.trim()}.\nAssunto: ${mensagem.value.trim()}`;
        const url = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;

        window.open(url, '_blank', 'noopener');
        form.reset();
    });

    form.querySelectorAll('input, textarea').forEach((field) => {
        field.addEventListener('input', () => validateField(field));
    });
});
