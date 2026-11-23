document.addEventListener('DOMContentLoaded', () => {
    const botaoTema = document.getElementById('trocarTema');
    const linkTema = document.getElementById('tema');


    const caminhoEscuro = '../css/index.css';
    const caminhoClaro = '../css/indexClaro.css';


    const temaSalvo = localStorage.getItem('temaPreferido');
    if (temaSalvo === 'claro') {
        linkTema.setAttribute('href', caminhoClaro);
    } else {
        linkTema.setAttribute('href', caminhoEscuro);
    }
    if (botaoTema && linkTema) {
        botaoTema.addEventListener('click', () => {
            const hrefAtual = linkTema.getAttribute('href');

            if (hrefAtual === caminhoEscuro) {
                linkTema.setAttribute('href', caminhoClaro);
                localStorage.setItem('temaPreferido', 'claro');
            } else {
                linkTema.setAttribute('href', caminhoEscuro);
                localStorage.setItem('temaPreferido', 'escuro');
            }
        });
    }
});
