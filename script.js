// Função para scroll suave para seções
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Função para toggle do FAQ
function toggleFaq(element) {
    const faqItem = element.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Fechar todos os outros FAQs
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Abrir o FAQ clicado se não estava ativo
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// Animações ao scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.benefit-item, .audience-column, .faq-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Inicializar animações
document.addEventListener('DOMContentLoaded', function() {
    // Configurar elementos para animação
    const elements = document.querySelectorAll('.benefit-item, .audience-column, .faq-item');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
    });
    
    // Executar animações no scroll
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Executar uma vez no carregamento
});

// Adicionar efeitos de hover nos botões
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.cta-button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Função para destacar seção ativa no scroll
function highlightActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            // Aqui você pode adicionar lógica para destacar navegação se houver
        }
    });
}

window.addEventListener('scroll', highlightActiveSection);

// Adicionar funcionalidade aos botões CTA
document.addEventListener('DOMContentLoaded', function() {
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Aqui você pode adicionar a lógica para redirecionar para a página de compra
            // Por exemplo: window.location.href = 'https://link-de-compra.com';
            
            // Por enquanto, vamos apenas mostrar um alerta
            if (this.textContent.includes('Quero o Ebook')) {
                alert('Redirecionando para a página de compra...');
            } else if (this.textContent.includes('Transforme a alimentação')) {
                // Scroll para a seção sobre
                scrollToSection('sobre');
            }
        });
    });
});

// Adicionar efeito de parallax sutil no hero
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image img');
    
    if (heroImage && scrolled < window.innerHeight) {
        heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Função para validar e-mail (caso seja adicionado um formulário)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Adicionar loading state nos botões
function addLoadingState(button) {
    const originalText = button.textContent;
    button.textContent = 'Carregando...';
    button.disabled = true;
    
    // Simular carregamento
    setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
    }, 2000);
}

