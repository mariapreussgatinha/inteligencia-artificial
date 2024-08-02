const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Uma criança de 6 anos foi deixada em casa sozinha na parte da tarde, pois seus responsáveis não tinham com quem deixá-la. Qual o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Não vejo problema!",
                afirmacao: "Você considera que, dadas as circunstâncias, a criança está segura e não está em risco imediato, e que isso pode ser uma solução temporária aceitável."
            },
            {
                texto: "Isso é assustador!",
                afirmacao: "Você demonstra uma preocupação com a vulnerabilidade da criança e uma possível falta de supervisão adequada, levando-a a concluir que a situação precisa ser abordada com urgência para garantir a segurança da criança."
            }
        ]
    },
    {
        enunciado: "Você concorda que a educação com violência deve ser proibida em todas as circunstâncias, mesmo em casa?",
        alternativas: [
            {
                texto: "Sim, qualquer forma de violência contra crianças é inaceitável e pode causar danos físicos e psicológicos a longo prazo.",
                afirmacao: "Você provavelmente conclui que é fundamental proibir e impedir a violência como método educativo, garantindo assim o bem-estar e o desenvolvimento saudável das crianças.."
            },
            {
                texto: "Não, acho que na maioria dos casos é necessário uma surra bem dada.",
                afirmacao: "Na sua visão, é aceitável e até necessário aplicar punições físicas severas, como surras, como método de educação. Você provavelmente acredita que essa abordagem disciplinar é eficaz para corrigir comportamentos indesejados ou inadequados em crianças. "
            }
        ]
    },
    {
        enunciado: "Você concorda que adolescentes devem ter o direito de trabalhar a partir dos 14 anos, mesmo que em trabalhos informais?",
        alternativas: [
            {
                texto: "Sim, na verdade já passou da idade. Tem que trabalhar duro mesmo, para ajudar a sustentar a família.",
                afirmacao: "Você provavelmente considera que é importante que os adolescentes trabalhem arduamente para contribuir com a sustentação financeira da família." 
            },
            {
                texto: "Não, acho que isso pode prejudicar o desenvolvimento educacional e psicológico.",
                afirmacao: "Você provavelmente acredita que os adolescentes devem priorizar sua educação e desenvolvimento pessoal antes de assumir responsabilidades de trabalho, especialmente em idade tão jovem."
            }
        ]
    },
    {
        enunciado: "Na sua opinião, os adolescentes devem ter o direito de decidir sobre a sua orientação sexual?",
        alternativas: [
            {
                texto: "Sim, acredito que é fundamental respeitar a autonomia e identidade dos adolescentes.",
                afirmacao: "Demonstra o seu apoio à liberdade de escolha e à autodeterminação dos adolescentes em questões relacionadas à sua sexualidade. Promovendo assim um ambiente de respeito e inclusão."
            },
            {
                texto: "Não, acredito que eles deveriam buscar um encaminhamento de um psicólogo/psiquiatra ou uma instituição religiosa e perceber o quanto isso é errado.",
                afirmacao: "Demonstra uma visão que prioriza intervenções externas para influenciar a orientação sexual dos adolescentes, possivelmente com base em crenças religiosas ou em concepções de saúde mental que não apoiam a diversidade sexual como uma norma aceitável."
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
    caixaPerguntas.textContent = "...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " ";
}

mostraPergunta();