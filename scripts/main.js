let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if (meuSrc === 'img/one_piece_capa.png') {
        minhaImagem.setAttribute('src', 'img/one_piece_chopper.png');
    } else {
        minhaImagem.setAttribute('src', 'img/one_piece_capa.png');
    }
}


let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');


function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu nome.');
    if (!meuNome || meuNome === null) {
        defineNomeUsuario();
    } else {
        localStorage.setItem('nome', meuNome);
        meuCabecalho.textContent = 'Bem vindo, ' + meuNome;
    }
}


if (!localStorage.getItem('nome')) {
    defineNomeUsuario();
} else {
    let nomeGuardado = localStorage.getItem('nome');
    meuCabecalho.textContent = 'ONE PIECE é FODA, ' + nomeGuardado;
}

meuBotao.onclick = function() {
    defineNomeUsuario();
}