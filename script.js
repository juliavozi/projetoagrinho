document.addEventListener('DOMContentLoaded', function() {
    // Suaviza scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Atualiza ano no rodapé
    document.querySelector('.rodape p:last-child').innerHTML = 
        `© ${new Date().getFullYear()} Todos os direitos reservados`;

    // Validação simples do formulário
    const form = document.querySelector('.contato-form');
    if(form) {
        form.addEventListener('submit', function(e) {
            const email = form.querySelector('input[type="email"]');
            if(!email.value.includes('@')) {
                e.preventDefault();
                alert('Por favor, insira um e-mail válido.');
                email.focus();
            }
        });
    }
});