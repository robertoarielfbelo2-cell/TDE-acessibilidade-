document.addEventListener('DOMContentLoaded', () => {
    const botaoTema = document.getElementById('trocarTema');
    const linkTema = document.getElementById('tema');

    // Caminhos dos arquivos CSS baseados na sua estrutura de pastas
    const caminhoEscuro = '../css/index.css';
    const caminhoClaro = '../css/indexClaro.css';

    // 1. Ao carregar a página, aplica o tema que estava salvo no localStorage
    const temaSalvo = localStorage.getItem('temaPreferido');
    if (temaSalvo === 'claro') {
        linkTema.setAttribute('href', caminhoClaro);
    } else {
        linkTema.setAttribute('href', caminhoEscuro);
    }

    // 2. Quando clicar no botão, alterna o arquivo CSS e salva no localStorage
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