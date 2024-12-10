function toggleProjeto(projetoId) {
    const projeto = document.getElementById(projetoId);
    projeto.style.display = projeto.style.display === 'block' ? 'none' : 'block';
}

// Alterna o tema claro e escuro
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('modo-claro');
}


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('menuToggle').addEventListener('click', function () {
        const navMenu = document.getElementById('navMenu');
        navMenu.classList.toggle('active');
    });
});


function reiniciarAnimacao() {
    const texto = document.getElementById('efeitoTexto');
    texto.classList.remove('animado'); // Remove a classe da animação
    void texto.offsetWidth; // Força o navegador a recarregar o layout
    texto.classList.add('animado'); // Adiciona a classe de animação novamente
}

// Inicia o processo de reinício de animação
document.addEventListener('DOMContentLoaded', function () {
    reiniciarAnimacao();
    setInterval(reiniciarAnimacao, 4800); // Reinicia a animação a cada 4800ms (4s de duração da animação)
});

