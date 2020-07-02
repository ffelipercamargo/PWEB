/*
Criar uma página utilizando JavaScript que execute as seguintes funções: 

A página principal deve conter uma caixa de seleção com nomes de cursos (os cursos da Fatec Sorocaba). 

Quando o usuário escolher um curso, deverá aparecer uma caixa confirmando se a janela contendo o curso 
deve realmente ser aberta. 

Caso o usuário confirme (clicando em Ok), o curso  escolhido deverá ser carregado em uma nova janela 
(coloque algumas informações sobre ele) com 600 × 300 pixels. 

Use o evento onchange do tag <select> para carregar o curso escolhido.
*/

var cursos = [
    [
        'ads', 
        'Análise e Desenvolvimento de Sistemas', 
        'O tecnólogo em Análise e Desenvolvimento de Sistemas analisa, projeta, documenta, especifica, testa, implanta e mantém sistemas computacionais de informação. Esse profissional trabalha, também, com ferramentas computacionais, equipamentos de informática e metodologia de projetos na produção de sistemas. Raciocínio lógico, emprego de linguagens de programação e de metodologias de construção de projetos, preocupação com a qualidade, usabilidade, robustez, integridade e segurança de programas computacionais são fundamentais à atuação desse profissional.'], [
        'pol', 
        'Polímeros', 
        'Esse profissional trabalha na fabricação dos Polímeros, compostos químicos utilizados na fabricação de produtos como o plástico, por exemplo. Avalia o desempenho de equipamentos e processos, interpreta fluxogramas de processos, aplica formulação química de polímeros, tintas e vernizes e desenvolve métodos de análises laboratoriais para caracterização dos materiais poliméricos, além de processos de modelagem. O monitoramento da qualidade e dos processos de reciclagem envolvidos; a identificação e acompanhamento das variáveis relevantes, inclusive as referentes ao meio ambiente, são também funções desse profissional.'
    ], [
        'log', 
        'Logística', 
        'O tecnólogo em Logística é o profissional especializado em armazenagem, distribuição e transporte. Atuando na área logística de uma empresa, planeja e coordena a movimentação física e de informações sobre as operações multimodais de transporte, para proporcionar fluxo otimizado e de qualidade para peças, matérias-primas e produtos. Ele gerencia redes de distribuição e unidades logísticas, estabelecendo processos de compras, identificando fornecedores, negociando e estabelecendo padrões de recebimento, armazenamento, movimentação e embalagem de materiais, podendo ainda ocupar-se do inventário de estoques, sistemas de abastecimento, programação e monitoramento do fluxo de pedidos.'
    ], [
        'pme', 
        'Processos Metalúrgicos', 
        'O tecnólogo em Processos Metalúrgicos utiliza os fenômenos envolvidos em processos como: tratamentos térmicos, fundição, siderurgia, laminação, forjamento de metais, sinterização e tratamentos de superfície .São atividades inerentes aos egressos deste Curso o planejamento, gestão, controle dos processos e comercialização dos produtos metalúrgicos, através da seleção, dimensionamento de equipamentos e métodos de fabricação. Incluem-se as atividades de laboratórios de ensaios mecânicos e de ensaios metalográficos, com o domínio da interrelação entre microestrutura, propriedades e aplicações dos produtos metálicos. Este profissional possui competências de gestão ambiental, de pessoas e processos industriais. Pode atuar em diversas empresas do ramo metal-mecânico e ainda no ensino superior.'
    ], [
        'fme', 
        'Fabricação Mecânica', 
        'O tecnólogo em Fabricação Mecânica atua no segmento de fabricação, envolvendo usinagem, conformação, soldagem, montagem e outros processos mecânicos. Planeja, controla e gerencia os diversos processos, atuando no desenvolvimento e melhoria de produtos, dos processos de fabricação e na gestão de projetos, aliando competências das áreas de gestão, qualidade e controle ambiental. Exerce suas atividades em empresas do ramo metal-mecânico, incluindo indústrias manufatureiras e ferramentarias, podendo ainda atuar em institutos e centros de pesquisa, órgãos governamentais, escritórios de consultoria, dentre outros.'
    ], [
        'mav', 
        'Manufatura Avançada', 
        'O que o aluno estuda: ' +
        'O aluno aprenderá a transformar ambientes de manufatura convencional em ambientes mais tecnológicos. Estruturado por blocos temáticos direcionados a projetos, o conteúdo do curso é dividido em processos de manufatura, eletrônica e automação e áreas multidisciplinares. O aluno terá uma base de artes para desenho técnico, matemática para cálculos de projetos e gestão de carreira. O inglês para linguagem técnica também é uma disciplina recorrente no curso.' +
        'O que o profissional faz: ' +
        'Atua como um integrador de tecnologia. Além de projetar e desenvolver projetos de manufatura, o profissional é responsável por agregar novas tecnologias voltadas para a Indústria 4.0. Oferece informações tecnológicas relacionadas às principais técnicas de produção empregadas na indústria mundial, tais como materiais e processos de fabricação, realidade aumentada e virtual, Internet das Coisas, Big Data, entre outros. É responsável por identificar dispositivos e ferramentas disponíveis no mercado. Como empreendedor, pode abrir sua própria consultoria ou empresa. Pode ainda atuar em pesquisas.' +
        'Onde trabalhar: ' +
        'Indústria, instituição governamental, escola, hospital, centro de pesquisa tecnológica, empresa de geração, transmissão e distribuição de energia.'
    ], [
        'ela', 
        'Eletrônica Automotiva', 
        'O tecnólogo em Eletrônica Automotiva:\n' +
        '<ul><li>participa de equipes de desenvolvimento de novos produtos, novas tecnologias e subsistemas na área automotiva;</li>' +
        '<li>supervisiona, coordena e orienta equipes na área automotiva; realiza a padronização, mensuração e controle de qualidade nas áreas automotivas de veículos especiais, carga e passeio;</li>' +
        '<li>especifica instrumentos e equipamentos para teste de veículos; oferece assistência, assessoria e consultoria referentes a instrumentos e equipamentos usados em testes de veículos de especiais, carga e passeio;</li>' +
        '<li>elabora orçamentos referentes à instrumentos e equipamentos usados na industria automotiva;</li>' +
        '<li>gerencia e realiza vistorias, perícias, avaliações, arbitramento, laudo e parecer técnico referentemente à áreas afetadas à veículos especiais, carga e de passeio;</li>' +
        '<li>supervisiona, coordena e orienta tecnicamente equipes de uma linha de inspeção veicular;</li>' +
        '<li>é capaz de selecionar e desenvolver novas tecnologias levando-se em conta características técnicas, humanas, econômicas e gerenciais de sistemas automobilístico;</li>' +
        '<li>opera e faz manutenção de equipamentos em inspeção veicular;</li>' +
        '<li>estuda a viabilização técnico-econômica de uma oficina autorizada ou independente;</li>' +
        '<li>supervisiona, coordena e orienta tecnicamente equipes de uma oficina autorizada ou independente.</li></ul>'
        ], [
            'gem', 
            'Gestão Empresarial - EAD', 
            'O Tecnólogo em Gestão Empresarial elabora e implementa planos de negócios, utilizando métodos e técnicas de gestão na formação e organização empresarial especificamente nos processos de comercialização, suprimento, armazenamento, movimentação de materiais e no gerenciamento de recursos financeiros e humanos. A habilidade para lidar com pessoas, capacidade de comunicação, trabalho em equipe, liderança, negociação, busca de informações, tomada de decisão em contextos econômicos, políticos, culturais e sociais distintos, são requisitos importantes a esse profissional. '
        ], [
            'prm', 
            'Projetos Mecânicos', 
            'O tecnólogo em Projetos Mecânicos está habilitado a realizar projetos, com detalhamento técnico de sistemas mecânicos que envolvam máquinas, motores, instalações mecânicas e termo-mecânicas. Tem conhecimento de todos os materiais usuais em construção mecânica e suas aplicações práticas. Está capacitado a atuar na área de organização industrial mecânica, tanto para processos como para produtos industriais. Domina a técnica do projeto de dispositivos e ferramentas de produção mecânica. Pode dedicar-se ao ensino, à pesquisa tecnológica, bem como realizar vistoria, avaliação e laudo técnico, em seu campo profissional.'
        ], [
            'sbm', 
            'Sistemas Biomédicos', 
            'O tecnólogo em Sistemas Biomédicos é responsável por planejar, gerenciar, implantar e manter equipamentos clínicos e médico-hospitalares. Supervisiona e coordena equipes de manutenção e otimização do uso de equipamentos eletro-médicos. Assessora a aquisição, executa a instalação, capacita usuários de equipamentos e sistemas biomédicos, além de participar de equipes de pesquisa aplicada. Responsável também pela implantação e controle das normas de segurança dos equipamentosnos serviços de saúde, pode atuar em hospitais, policlínicas, laboratórios, fabricantes e distribuidoras de equipamentos hospitalares.'
        ]
];

var janela;
var composicao = "menubar=no, location=yes, resizable=no, scrollbars=no, status=yes, titlebar=yes, url_toolbar=no, innerWidth=600, innerHeight=300, directories=no";
var titulo = "Detalhes do curso: ";

function abreJanela() {
    var opc = form1.elements[0].selectedIndex;
    
    janela = window.open(
        "popup.html?opc=" + opc,
        cursos[opc][1],
        composicao
    );
}

function questao() {

    if(confirm("Deseja ver detalhes deste curso?\n(Necessário permitir popups desta página)")) {
        console.log("OK");
        abreJanela();
    } else {
        console.log("Not OK");
    }
    
}


var a = location.search.split(/\?|=|&/).filter(Boolean);
    
var obj = {}, i = 0;

function insereDetalhes() {

    while(i < a.length) {
        obj[a[i]] = a[++i];
    }
    console.log(obj);
    
    var opc = obj.opc;

    document.title = cursos[opc][1];
    document.getElementById("titulo").innerText = cursos[opc][1] + " (" + cursos[opc][0].toUpperCase() + ")";
    document.getElementById("descricao").innerText = cursos[opc][2];
    
    console.log(
        "Curso:\t" +
        cursos[opc][0] +
        "\nDesc:\t" +
        cursos[opc][1]
    );

}
