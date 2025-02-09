const sagas = [
    "Pilaf",
    "21º Torneio de Artes Marciais",
    "22º Torneio de Artes Marciais",
    "23º Torneio de Artes Marciais",
    "Sayajin",
    "Freeza",
    "Cell",
    "Majin Buu",
    "Especial Bardock",
    "Deus da Destruição",
    "Trunks do Futuro",
    "Champa",
    "Torneio do Poder",
    "Filme Broly"
];


const personagens = {
    'androide17': { img: "img/androide17.jpeg", genero: "Masculino", especie: "Androide", origem: "Terra", aparicao: "Z", mortes: 1, saga: "Cell"},
    'androide18': { img: "img/androide18.jpeg", genero: "Feminino", especie: "Androide", origem: "Terra", aparicao: "Z", mortes: 1, saga: "Cell"},
    'bardock': { img: "img/bardock.jpeg", genero: "Masculino", especie: "Sayajin", origem: "Vegeta", aparicao: "Especial", mortes: 1, saga: "Especial Bardock"},
    'bills': { img: "img/bills.jpeg", genero: "Masculino", especie: "Deus da Destruição", origem: "Desconhecido", aparicao: "Super", mortes: 0, saga: "Deus da Destruição"},
    'bra': { img: "img/bra.jpeg", genero: "Feminino", especie: "Humano, Sayajin", origem: "Terra", aparicao: "Super", mortes: 0, saga: "Champa"},
    'broly': { img: "img/broly.jpeg", genero: "Masculino", especie: "Sayajin", origem: "Vegeta", aparicao: "Filme", mortes: 0, saga: "Filme Broly"},
    'bulma': { img: "img/bulma.jpeg", genero: "Feminino", especie: "Humano", origem: "Terra", aparicao: "Clássico", mortes: 0, saga: "Pilaf"},
    'caulifla': { img: "img/caulifla.jpeg", genero: "Feminino", especie: "Sayajin", origem: "Universo 6", aparicao: "Super", mortes: 0, saga: "Torneio do Poder"},
    'cell': { img: "img/cell.jpeg", genero: "Masculino", especie: "Bioandroide, Androide, Namekuseijin, Sayajin", origem: "Terra", aparicao: "Z", mortes: 1, saga: "Cell"},
    'chichi': { img: "img/chichi.jpeg", genero: "Feminino", especie: "Humano", origem: "Terra", aparicao: "Clássico", mortes: 1, saga: "21º Torneio de Artes Marciais"},
    'dende': { img: "img/dende.jpeg", genero: "Masculino", especie: "Namekuseijin", origem: "Namekusei", aparicao: "Z", mortes: 1, saga: "Freeza"},
    'fasha': { img: "img/fasha.jpeg", genero: "Feminino", especie: "Sayajin", origem: "Vegeta", aparicao: "Especial", mortes: 1, saga: "Especial Bardock"},
    'freeza': { img: "img/freeza.jpeg", genero: "Masculino", especie: "Mutante", origem: "Desconhecido", aparicao: "Z", mortes: 2, saga: "Freeza"},
    'gohan': { img: "img/gohan.jpeg", genero: "Masculino", especie: "Humano, Sayajin", origem: "Terra", aparicao: "Z", mortes: 1, saga: "Sayajin"},
    'goku': { img: "img/goku.jpeg", genero: "Masculino", especie: "Sayajin", origem: "Vegeta", aparicao: "Clássico", mortes: 3, saga: "Pilaf"},
    'gokublack': { img: "img/gokublack.jpeg", genero: "Masculino", especie: "Kaioshin", origem: "Universo 10", aparicao: "Super", mortes: 1, saga: "Trunks do Futuro" },
    'goten': { img: "img/goten.jpeg", genero: "Masculino", especie: "Humano, Sayajin", origem: "Terra", aparicao: "Z", mortes: 1, saga: "Majin Buu"},
    'jiren': { img: "img/jiren.jpeg", genero: "Masculino", especie: "Desconhecido", origem: "Universo 11", aparicao: "Super", mortes: 0, saga: "Torneio do Poder" },
    'kaioshin': { img: "img/kaioshin.jpeg", genero: "Masculino", especie: "Kaioshin", origem: "Desconhecido", aparicao: "Z", mortes: 1, saga: "Majin Buu" },
    'kuririn': { img: "img/kuririn.jpeg", genero: "Masculino", especie: "Humano", origem: "Terra", aparicao: "Clássico", mortes: 3, saga: "21º Torneio de Artes Marciais"},
    'mai': { img: "img/mai.jpg", genero: "Feminino", especie: "Humano", origem: "Terra", aparicao: "Clássico", mortes: 0, saga: "Pilaf" },
    'mestrekame': { img: "img/kame.jpg", genero: "Masculino", especie: "Humano", origem: "Terra", aparicao: "Clássico", mortes: 2, saga: "21º Torneio de Artes Marciais"},
    'pan': { img: "img/pan.jpeg", genero: "Feminino", especie: "Humano, Sayajin", origem: "Terra", aparicao: "Z", mortes: 0, saga: "Majin Buu"},
    'piccolo': { img: "img/piccolo.jpeg", genero: "Masculino", especie: "Namekuseijin", origem: "Namekusei", aparicao: "Clássico", mortes: 2, saga: "23º Torneio de Artes Marciais"},
    'raditz': { img: "img/raditz.jpeg", genero: "Masculino", especie: "Sayajin", origem: "Vegeta", aparicao: "Z", mortes: 1, saga: "Sayajin"},
    'mr.satan': { img: "img/satan.jpeg", genero: "Masculino", especie: "Humano", origem: "Terra", aparicao: "Z", mortes: 0, saga: "Cell"},
    'shenlong': { img: "img/shenlong.jpeg", genero: "Masculino", especie: "Dragão", origem: "Terra", aparicao: "Clássico", mortes: 0, saga: "Pilaf"},
    'senhorkaioh': { img: "img/senhorkaioh.jpg", genero: "Masculino", especie: "Kaiosama", origem: "Kaioh", aparicao: "Z", mortes: 1, saga: "Sayajin" },
    'superbuu': { img: "img/superbuu.jpeg", genero: "Masculino", especie: "Majin", origem: "Desconhecido", aparicao: "Z", mortes: 1, saga: "Majin Buu"},
    'tenshinhan': { img: "img/tenshinhan.jpeg", genero: "Masculino", especie: "Humano, Triclopes", origem: "Terra", aparicao: "Clássico", mortes: 2, saga: "22º Torneio de Artes Marciais" },
    'trunks': { img: "img/trunks.jpeg", genero: "Masculino", especie: "Humano, Sayajin", origem: "Terra", aparicao: "Z", mortes: 1, saga: "Cell"},
    'uub': { img: "img/uub.jpeg", genero: "Masculino", especie: "Humano, Majin", origem: "Terra", aparicao: "Z", mortes: 0, saga: "Majin Buu"},
    'vegeta': { img: "img/vegeta.jpeg", genero: "Masculino", especie: "Sayajin", origem: "Vegeta", aparicao: "Z", mortes: 2, saga: "Sayajin"},
    'videl': { img: "img/videl.jpeg", genero: "Feminino", especie: "Humano", origem: "Terra", aparicao: "Z", mortes: 0, saga: "Majin Buu"},
    'whis': { img: "img/whis.jpeg", genero: "Masculino", especie: "Anjo", origem: "Desconhecido", aparicao: "Super", mortes: 0, saga: "Deus da Destruição"},
    'yamcha': { img: "img/yamcha.jpeg", genero: "Masculino", especie: "Humano", origem: "Terra", aparicao: "Clássico", mortes: 2, saga: "Pilaf" },
    'zenoh': { img: "img/zenoh.jpg", genero: "Desconhecido", especie: "Desconhecido, Deus Supremo", origem: "Desconhecido", aparicao: "Super", mortes: 0, saga: "Torneio do Poder" }
};

let personagemSorteado;
let busca = true;
let tentativas = 0;

function iniciarJogo() {
    document.getElementById("btn-iniciar").addEventListener("click", function() {
        document.getElementById("tela-inicio").style.display = "none";
        document.getElementById("tela-jogo").style.display = "flex";
        document.getElementById("container-indicadores").style.display = "flex";
    });
}

function recomecar() {
    document.getElementById("btn-recomecar").addEventListener("click", function() {
        location.reload();
    });
}

function listarPersonagens() {
    const listaPersonagens = document.getElementById("lista-personagens");
    
    for (let nome in personagens) {
        let opcao = document.createElement("option");
        opcao.value = nome;
        listaPersonagens.appendChild(opcao);
    }
}

function sortearPersonagem() {
    const chaves = Object.keys(personagens);
    const posicaoAleatoria = Math.floor(Math.random() * chaves.length);
    personagemSorteado = personagens[chaves[posicaoAleatoria]];
    //console.log('Personagem sorteado:', personagemSorteado);
}

window.onload = function () {
    document.getElementById("tela-jogo").style.display = "none";
    document.getElementById("personagem-container").style.display = "none";
    document.getElementById("tela-vitoria").style.display = "none";
    document.getElementById("container-indicadores").style.display = "none";
    document.getElementById("recomecar").style.display = "none";

    iniciarJogo();
    listarPersonagens();
    sortearPersonagem();
    recomecar();
}; 

document.getElementById('btn-buscar').addEventListener('click', encontrarPersonagem);
document.getElementById('input-personagem').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        encontrarPersonagem();
    }
});

function encontrarPersonagem() {
    tentativas++;
    const personagemContainer = document.getElementById('personagem-container');
    const input = document.getElementById('input-personagem');
    const dadosPersonagem = document.getElementById('dados-personagem');
    const nomePersonagem = input.value.toLowerCase().split(' ').join('');

    input.value = '';

    if (busca) {
        personagemContainer.style.display = 'flex';
        busca = false;
    }

    if (personagens[nomePersonagem]) {
        const personagemDigitado = personagens[nomePersonagem];
        const novaDiv = document.createElement('div');
        novaDiv.id = 'dados';
        novaDiv.innerHTML = `
            <img class="imagem" src="${personagemDigitado.img}" alt="Imagem de ${nomePersonagem}">
            <div class="genero">${personagemDigitado.genero}</div>
            <div class="especie">${personagemDigitado.especie}</div>
            <div class="origem">${personagemDigitado.origem}</div>
            <div class="aparicao">${personagemDigitado.aparicao}</div>
            <div class="mortes">${personagemDigitado.mortes}</div>
            <div class="saga">${personagemDigitado.saga}</div>
        `;
        dadosPersonagem.prepend(novaDiv);

        verificarPersonagemDigitado(personagemDigitado, personagemSorteado);
    } else {
        const erroDiv = document.createElement('div');
        erroDiv.innerHTML = `<p class="erro" >Personagem "${nomePersonagem}" não encontrado.</p>`;
        dadosPersonagem.prepend(erroDiv);
        tentativas--;
    }
}

function comparar(valorDigitado, valorSorteado) {
    const partesDigitadas = valorDigitado.split(', ');
    const partesSorteadas = valorSorteado.split(', ');

    if (valorDigitado === valorSorteado) {
        return '#0BC22E';
    } else if (partesDigitadas.some(parte => partesSorteadas.includes(parte))) {
        return '#DB820C';
    }
}

function compararSagas(sagaDigitada, sagaSorteada) {
    const sagaDigitadaIndice = sagas.indexOf(sagaDigitada);
    const sagaSorteadaIndice = sagas.indexOf(sagaSorteada);

    if (sagaDigitadaIndice < sagaSorteadaIndice) {
        return 'linear-gradient(to top, #da150f, #0bc22e)';
    }else if (sagaDigitadaIndice > sagaSorteadaIndice) {
        return 'linear-gradient(to bottom, #da150f, #0bc22e)';
    } else {
        return '#0bc22e';
    }
}

function compararMortes(personagemDigitado, personagemSorteado) {
    const mortesDigitada = personagemDigitado;
    const mortesSorteada = personagemSorteado;

    if (mortesDigitada < mortesSorteada) {
        return 'linear-gradient(to top, #da150f, #0bc22e)';
    } else if (mortesDigitada > mortesSorteada) {
        return 'linear-gradient(to bottom, #da150f, #0bc22e)';
    } else {
        return '#0bc22e';
    }
}

function verificarPersonagemDigitado(personagemDigitado, personagemSorteado) {
    const resultado = {
        genero: comparar(personagemDigitado.genero, personagemSorteado.genero),
        especie: comparar(personagemDigitado.especie, personagemSorteado.especie),
        origem: comparar(personagemDigitado.origem, personagemSorteado.origem),
        aparicao: comparar(personagemDigitado.aparicao, personagemSorteado.aparicao),
        mortes: compararMortes(personagemDigitado.mortes, personagemSorteado.mortes),
        saga: compararSagas(personagemDigitado.saga, personagemSorteado.saga)
    };

    document.querySelector('.genero').style.backgroundColor = resultado.genero;
    document.querySelector('.especie').style.backgroundColor = resultado.especie;
    document.querySelector('.origem').style.backgroundColor = resultado.origem;
    document.querySelector('.aparicao').style.backgroundColor = resultado.aparicao;
    document.querySelector('.mortes').style.background = resultado.mortes;
    document.querySelector('.saga').style.background = resultado.saga;

    //console.log(resultado);
    verificarVitoria(personagemDigitado, personagemSorteado)
}

function verificarVitoria(personagemDigitado, personagemSorteado) {
    const totalTentativas = document.getElementById("total-tentativas");
    const vitoria = (
        personagemDigitado === personagemSorteado
    );

    if (vitoria) {
        document.getElementById('aviso-jogo').style.display = 'none';
        document.getElementById('tela-vitoria').style.display = 'flex';
        totalTentativas.textContent = `Total de tentativas: ${tentativas}`;

        document.getElementById('recomecar').style.display = 'block';

        document.getElementById('input-personagem').disabled = true;
        document.getElementById('btn-buscar').disabled = true;
    }
}
