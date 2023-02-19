// ---------------------------------------------------------------------------- //
// - Função para gerar palavras, sendo uma delas escolhidas para o jogo
function gerandoPalavras() {
  var armazenandoPalavras = [
    "escritor",
    "pastel",
    "papel",
    "emprego",
    "mulher",
    "almoço",
    "desinfetante",
    "estudo",
    "material",
    "homem",
    "salgado",
    "hotel",
  ];

  return armazenandoPalavras;
}

// ---------------------------------------------------------------------------- //
// Futuro upgrade:

// ["Frutas", "Nome Próprio", "Eletrodomesticos", "Marcas de Notebooks"]
// ["maça", "banana", "caju", "amora", "pessego", "uva", "pera"]
// ["erica", "joao", "guilherme", "henrique", "matheus", "pedro", "kaio"]
// ["geladeira", "fogao", "forno", "refrigerador", "microondas", "lavadora"]
// ["acer", "sansung", "lenovo", "positivo", "vaio", "hp", "apple", "dell"]

// ---------------------------------------------------------------------------- //
// - Armazenando tamanho do vetor que gera as palavras
function tamanhoVetor() {
  return armazenamentoPalavras.length;
}

// ---------------------------------------------------------------------------- //
// - Gerando o número aleatório para escolher uma palavra
function Random(e) {
  return Math.floor(Math.random() * e + 1);
}

// ---------------------------------------------------------------------------- //
// - Separando a palavra escolhida em caracteres dentro de um vetor
function separandoLetras(ran) {
  let ar = armazenamentoPalavras[ran];
  let pronto = ar.split("");

  return pronto;
}

// ---------------------------------------------------------------------------- //
// - Inicializando o vetor que possuirá as letras certas digitadas
// - Comparando se letra digitada é igual a letra dentro de um vetor guardad
// - Inserindo letra correta dentro do vetor inicializado
// - Realizando contagem das letras ou espaços diferentes, assim tem como saber
// se a letra digitada já foi inserida ou se a letra digitada não existe dentro
// do vetor que armazenou a palavra do jogo
function comparandoResposta(letra, palavraCheia) {
  let cont = 0;

  if (palavraCheia.length == 0) {
    for (let i = 0; i < palavraSeparada.length; i++) {
      palavraCheia.push("_");
    }
  }

  for (let i = 0; i < palavraSeparada.length; i++) {
    if (
      letra.localeCompare(palavraSeparada[i]) == 0 &&
      palavraCheia[i] == "_"
    ) {
      palavraCheia[i] = letra;
    } else if (
      letra.localeCompare(palavraSeparada[i]) != 0 &&
      palavraCheia[i] == "_"
    ) {
      palavraCheia[i] = "_";
      cont++;
    } else if (
      letra.localeCompare(palavraSeparada[i]) == 0 &&
      palavraCheia[i] != "_"
    ) {
      return -1;
    } else {
      cont++;
    }
  }

  return cont;
}

// -------------------------------------------------------------------------- //
// - Conferindo se o vetor está totalmente preenchido com a palavra COMPLETA
function ganhouPartida() {
  let contador = 0;

  for (let i = 0; i < palavraCheia.length; i++) {
    if (palavraCheia[i] != "_") {
      contador++;
    }
  }
  if (palavraCheia.length == contador) {
    console.log("Você ganhou a partida!");
    return -2;
  }
}

// ---------------------------------------------------------------------------- //
// - Mostrando espaços na tela do usuário (prompt de comando)
function inicializandoForca() {
  let vet = [];
  for (let i = 0; i < palavraSeparada.length; i++) {
    vet.push("_");
  }

  console.log("\n                   " + vet.join(" "));
}

function iniciandoValoresVariaveis() {
  armazenamentoPalavras = gerandoPalavras();
  // console.log(armazenamentoPalavras);

  tamanho = tamanhoVetor();
  // console.log(tamanho);

  random = Random(tamanho);
  // console.log(random);

  palavraSeparada = separandoLetras(random);
  // console.log(palavraSeparada);

  palavrasErradas = [];
  palavraCheia = [];
  cont = [];
  tentativa = 0;
}

// ---------------------------------------------------------------------------- //
// - Variáveis
const PromptFunction = require("prompt-sync");
const prompt = PromptFunction();

let armazenamentoPalavras = gerandoPalavras();
// console.log(armazenamentoPalavras);

let tamanho = tamanhoVetor();
// console.log(tamanho);

let random = Random(tamanho);
// console.log(random);

let palavraSeparada = separandoLetras(random);
// console.log(palavraSeparada);

let palavrasErradas = [];
let palavraCheia = [];
let cont = [];
let tentativa = 0;
let resposta = "s";
let letra = "";

// ---------------------------------------------------------------------------- //
// Interface principal:

do {
  console.log("\n\n\n             ---------- Forca ----------");

  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  // Mostra as palavras erradas e quantas tentativas ainda tem
  console.log(
    "  Erros: " +
      palavrasErradas +
      "   |   Tentativas Restantes: " +
      tentativa +
      " / 5"
  );
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

  // - Verifica se é a primeira vez que está executando o while
  if (palavraCheia.length == 0) {
    inicializandoForca();
    console.log("\n");
    letra = prompt("Digite uma letra: ");
    cont = comparandoResposta(letra, palavraCheia);
    console.log("\n");
  } else {
    console.log("\n                   " + palavraCheia.join(" "));
    console.log("\n");
    if (ganhouPartida() == -2) {
      resposta = prompt("Deseja jogar de novo? [s/n]: ");
      iniciandoValoresVariaveis();
    } else if (tentativa == 5) {
      // Verifica se o usuário errou 5 vezes
      console.log("Você Perdeu!");
      console.log("Resposta Correta: " + palavraSeparada.join(""));
      console.log("\n");

      resposta = prompt("Deseja jogar de novo? [s/n]: ");
      iniciandoValoresVariaveis();
    } else {
      letra = prompt("Digite uma letra: ");
      cont = comparandoResposta(letra, palavraCheia);
    }
  }

  if (resposta.localeCompare("s") == 0) {
    palavraCheia.lenght = 0;
  } else if (resposta.localeCompare("n") == 0) {
    break;
  }
  console.clear();

  // - Verifica se a letra já foi digitada
  if (cont == -1) {
    console.log("Você já digitou essa letra. Tente novamente!");
  } else if (cont == palavraSeparada.length) {
    palavrasErradas.push(letra);
    tentativa++;
  }
} while (resposta.localeCompare("s") == 0);
