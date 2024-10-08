let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio()
let tentativas = 1


//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto'; //inner = dentro .. inner html = dentro do html.. estamos puxando algo dentro do html

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 100';

function verificarChute() {
    let chute = document.querySelector('input').value;
    //console.log(numeroSecreto); 
    console.log(chute == numeroSecreto);
    if (chute ==  numeroSecreto) {
        exibirTextoNaTela('h1','Acertou!!');
        let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
        let mensagensTentativas = `você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagensTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

      } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O numero secreto é menor que o chute');
        } else{
            exibirTextoNaTela('p','O número secreto é maior que o chute');
        }
        tentativas++;
        limparCampo();        
      }
    }

//declaramos a função 
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}

//utilizando a função
function exibirMensagemINicial(){
exibirTextoNaTela('h1','Jogo do número Secreto');
exibirTextoNaTela('p','Escolha um número entre 1 e 10');
}
exibirMensagemINicial();

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
   if (quantidadeDeElementosNaLista == 10){
    listaDeNumerosSorteados=[];
   }
   if (listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
   } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
   }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemINicial();
    document.getElementById ('reiniciar').setAttribute('Disabled',true);
}

