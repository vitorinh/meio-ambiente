const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
      enunciado: "quais dos dois gases principais que temos na atmosfera vocẽ prefere? nitrigenio ou oxigenio",
        alternativas: [
            {
                texto: "nitrogenio",
                afirmacao: "porque fornece materiais para construção",
            },
            {
                texto: "oxigenio",
                afirmacao: "porque é um elemento mais abundante no universo",
            }
        ]
    },
    {
        enunciado: "vocẽ acredita que estamos sentindo os resultado dos gases de efeito estufa",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "voce que se atenta pras questoes ambientais",
            },
            {
                texto: "nao",
                afirmacao: "voce é uma pesoa que nao está se importando com o mundo",
            }
        ]
    },
    {
        enunciado: "voce sabe quais o nomes da camada da atmosfera ",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "voce j estudo sobre isso",
            },
            {
                texto: "nao",
                afirmacao: "voce nunca ouviu falar",
            }
        ]
    },
 
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();