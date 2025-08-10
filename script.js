const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Se prepare para viajar no tempo e enfrentar decisões que marcaram a evolução tecnológica. Cada pergunta é uma escolha que pode mudar o rumo da história digital, será que você tem tudo para ser um verdadeiro pioneiro Tech? Para início de conversa, vamos contextualizar isso ao longo das últimas décadas, a programação e a tecnologia transformaram radicalmente a sociedade, impulsionando avanços que moldaram a comunicação, o entretenimento, a ciência e a exploração espacial. Desde os primeiros experimentos com redes de computadores que possibilitaram o envio do primeiro e-mail em 1971, até as plataformas revolucionárias de compartilhamento de vídeo no início dos anos 2000, cada inovação representou um marco no desenvolvimento digital. Este quiz convida você a vivenciar momentos decisivos dessa trajetória, enfrentando escolhas que refletem os desafios e decisões de pioneiros da programação. Seu desempenho revelará o quanto você compreende as complexidades e impactos dessas transformações tecnológicas. A tecnologia não apenas facilitou a conexão entre pessoas e informações, mas também abriu novas possibilidades para a resolução de problemas complexos, impulsionou o crescimento econômico e ampliou o alcance do conhecimento humano. Compreender esse legado é fundamental para reconhecer como essas ferramentas moldam nosso presente e pavimentam o futuro.",
        alternativas: [
            {
                texto: "Um verdadeiro desafio!",
                afirmacao: "No início você ficou com receio do peso de cada decisão na treajetória, mas prosseguiu. "
            },
            {
                texto: "Que viagem intrigante, como minhas escolhas poderiam influenciar?",
                afirmacao: "Com isso, possui visão mais aberta diante o ato de escolha e influência."
            }
        ]
    },
    {
        enunciado: "Em 1975, você encontra o primeiro computador pessoal montado por hobbyistas. Ele não tem monitor, só LEDs para mostrar dados. O que você faz?",
        alternativas: [
            {
                texto: "Criar um monitor improvisado com peças velhas.",
                afirmacao: "Foi responsável pela invenção do primeiro display para computadores caseiros e recebe reconhecimento mundial."
            },
            {
                texto: "Usar o sistema original apenas com os LEDs.",
                afirmacao: "Somente preservou a experiência original e se tornou referência histórica sobre computação retro."
            }
        ]
    },
    {
        enunciado: "Em 1991, você descobre um bug em um servidor da internet nascente.",
        alternativas: [
            {
                texto: "Corrigir o bug imediatamente, mesmo não sabendo como pode impactar.",
                afirmacao: "Você salvou um sistema que milhões de pessoas usam diariamente."
            },
            {
                texto: "Documentar e enviar para especialistas estudarem, pois aparenta ser mais seguro na sua visão.",
                afirmacao: "Seu relatório vira um estudo clássico sobre segurança digital."
            }
        ]
    },
    {
        enunciado: "Em 1983, um jogo que você programou tem um erro que o torna impossível de vencer.",
        alternativas: [
            {
                texto: "Lançar assim mesmo, pois é apenas um erro em linhas de uma só linguagem.",
                afirmacao: " O jogo vira lenda por sua dificuldade extrema."
            },
            {
                texto: "Atrasar o lançamento para corrigir, pois seu projeto não pode ser modificado.",
                afirmacao: "O jogo se torna um clássico justo e equilibrado."
            }
        ]
    },
    {
        enunciado: " No futuro, um código seu é escolhido para controlar robôs de resgate.",
        alternativas: [
            {
                texto: "Manter o código simples e seguro, afinal o básico bem feito é o necessário.",
                afirmacao: "Os robôs salvam vidas com estabilidade impecável."
            },
            {
                texto: "Adicionar funções avançadas para mais eficiência, quanto mais tecnologia maior o acesso",
                afirmacao: "Os robôs realizam resgates complexos, mas enfrentam falhas ocasionais."
            }
        ]
    },
    {
        enunciado: "No ano de 2004, você recebe uma oportunidade única: criar um site que permita às pessoas fazer upload e assistir a vídeos online. O desafio é grande, mas você sabe que essa pode ser uma revolução na forma como o mundo compartilha conteúdo audiovisual. Você decide:",
        alternativas: [
            {
                texto: "Aceitar o desafio e desenvolver o site imediatamente, mesmo com poucos recursos.",
                afirmacao: ""
            },
            {
                texto: " Guardar essa ideia e esperar o momento mais adequado para lançar, garantindo mais preparo e investimento.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Em 1971, em meio a experimentos com redes de computadores, você descobre uma maneira de enviar mensagens eletrônicas entre máquinas. Agora precisa decidir como usar essa nova tecnologia que pode mudar a comunicação para sempre. Você escolhe:",
        alternativas: [
            {
                texto: " Usar o sistema para testes internos, garantindo que funcione antes de divulgar.",
                afirmacao: ""
            },
            {
                texto: "Enviar uma mensagem para um amigo como demonstração, criando o primeiro e-mail da história.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "No futuro próximo, você desenvolve uma inteligência artificial capaz de escrever livros inteiros com qualidade surpreendente. Agora, deve decidir como disponibilizar essa tecnologia ao mundo:",
        alternativas: [
            {
                texto: "Vender a IA para grandes editoras, monetizando seu trabalho, mas limitando o acesso.",
                afirmacao: ""
            },
            {
                texto: "Liberar o código aberto para que qualquer pessoa possa usar e criar suas próprias obras.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Durante os anos 80, você inventa um novo sistema revolucionário para comprimir arquivos digitais, facilitando seu armazenamento e transmissão. Chega a hora de decidir qual caminho seguir com sua invenção:",
        alternativas: [
            {
                texto: "Patentar a tecnologia e licenciar para empresas, garantindo retorno financeiro",
                afirmacao: ""
            },
            {
                texto: "Compartilhar gratuitamente com a comunidade, promovendo o crescimento do conhecimento aberto.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Você descobre um bug crítico em um sistema que pode derrubar a internet mundial, causando caos global. Agora precisa agir rápido e escolher como lidar com essa situação delicada:",
        alternativas: [
            {
                texto: "Divulgar publicamente o problema para alertar todos e forçar uma solução imediata.",
                afirmacao: ""
            },
            {
                texto: "Corrigir o bug silenciosamente para evitar pânico e garantir a estabilidade da rede.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "No final dos anos 90, você cria um site de busca para ajudar usuários a encontrar informações na internet. Você tem duas opções para o design do site:",
        alternativas: [
            {
                texto: "Manter o site simples e rápido, focando na eficiência da busca.",
                afirmacao: ""
            },
            {
                texto: "Adicionar diversos recursos visuais e jogos para atrair mais usuários, mesmo que isso deixe o site mais pesado",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "No futuro, você é responsável por programar drones que entregam remédios em áreas remotas. A decisão é sobre o estilo de voo dessas máquinas:",
        alternativas: [
            {
                texto: "Programar rotas lentas, mas seguras, garantindo que o medicamento chegue em perfeitas condições",
                afirmacao: ""
            },
            {
                texto: "Criar rotas rápidas e arriscadas para acelerar as entregas, mesmo correndo alguns riscos.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Em 1989, uma grande empresa te contrata para desenvolver um sistema de senhas para proteger informações sensíveis. Você deve decidir entre:",
        alternativas: [
            {
                texto: "Criar senhas curtas e fáceis de lembrar, facilitando o uso pelos usuários.",
                afirmacao: ""
            },
            {
                texto: "Desenvolver senhas longas e complexas, aumentando a segurança, apesar da dificuldade para os usuários.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Em 2030, um jogo criado por você viraliza rapidamente, conquistando milhões de jogadores. Agora você deve decidir a estratégia para o futuro do jogo:",
        alternativas: [
            {
                texto: "Atualizá-lo constantemente para manter o interesse dos jogadores.",
                afirmacao: ""
            },
            {
                texto: "Deixá-lo como está, preservando seu charme original e nostálgico.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Em 1978, você desenvolve o primeiro chat online para comunicação entre pessoas. Agora, pensa em como ampliar as funcionalidades:",
        alternativas: [
            {
                texto: "Focar apenas em mensagens de texto para garantir leveza e acessibilidade.",
                afirmacao: ""
            },
            {
                texto: " Incluir chamadas de voz e vídeo, revolucionando a comunicação, porém exigindo internet mais rápida.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Você cria um aplicativo inovador de previsão do tempo com alta precisão. Agora precisa decidir como monetizá-lo:",
        alternativas: [
            {
                texto: " Cobrar uma assinatura mensal dos usuários para manter o app.",
                afirmacao: ""
            },
            {
                texto: "Torná-lo gratuito, mas com anúncios para gerar receita.",
                afirmacao: ""
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
    caixaPerguntas.textContent = "Você percorreu as grandes encruzilhadas da história da programação, tomou decisões que moldaram o passado, reinventaram o presente e abriram caminhos para o futuro. Cada escolha revelou um pouco sobre como você pensa, cria e resolve problemas no mundo da tecnologia. O poder da escolha é a força principal por trás da inovação. Na tecnologia, assim como na vida, cada decisão carrega consequências que podem impulsionar avanços extraordinários ou trazer desafios inesperados. Compreender esse processo fortalece sua capacidade de analisar situações, ponderar riscos e assumir responsabilidades, habilidades essenciais para qualquer área de atuação. Mais do que dominar ferramentas ou códigos, essa experiência ensina a importância de pensar estrategicamente, adaptar-se às mudanças e agir com visão. Esses aprendizados são valiosos não apenas para quem deseja influenciar o futuro da tecnologia, mas para qualquer pessoa que busca tomar decisões conscientes e impactar positivamente seu entorno.";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();