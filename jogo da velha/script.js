let botao, quebraLinha, jogada = 1;
let tabuleiro = new Array(3);
const tabuleiroDiv = document.querySelector('.tabuleiro');

for (let i = 0; i < tabuleiro.length; i++) {
    tabuleiro[i] = new Array(3);
    let linhaDiv = document.createElement('div');
    linhaDiv.classList.add('linha');
   
    for (let j = 0; j < tabuleiro.length; j++) {
        botao = document.createElement('button');
        botao.setAttribute('type', 'button');
        botao.setAttribute('id', 'bt' + i + "" + j);
        botao.setAttribute('class', 'btJogo' + i);
        botao.setAttribute('onclick', 'marca' + i + "" + j + "()");
        botao.append(document.createTextNode(""));
        linhaDiv.append(botao);
    }
    tabuleiroDiv.append(linhaDiv);
}

function marca00(){
    marcarCasa("bt00")
}

function marca01(){
    marcarCasa("bt01")
}

function marca02(){
    marcarCasa("bt02")
}

function marca10(){
    marcarCasa("bt10")
}

function marca11(){
    marcarCasa("bt11")
}

function marca12(){
    marcarCasa("bt12")
}

function marca20(){
    marcarCasa("bt20")
}
function marca21(){
    marcarCasa("bt21")
}

function marca22(){
    marcarCasa("bt22")
}

function marcarCasa(nomeBotao){
    if(jogada % 2 == 0){
        document.getElementById(nomeBotao).innerText = "O"
        document.getElementById(nomeBotao).style.color = "black"
    }else{
        document.getElementById(nomeBotao).innerText = "X"
        document.getElementById(nomeBotao).style.color = "red"
    }
    document.getElementById(nomeBotao).disabled = true
    jogada++
    if(jogada >= 5){
        encerraJogo()
    }
}

function encerraJogo(){
    if(document.getElementById("bt00").innerText == document.
    getElementById("bt01").innerText && document.getElementById
    ("bt01").innerText == document.getElementById("bt02").
    innerText && document.getElementById("bt00").innerText != ""){
        alert("Jogo finalizado!!\nVencedor: " + document.
        getElementById("bt00").innerText)
    }
    if(document.getElementById("bt10").innerText == document.
    getElementById("bt11").innerText && document.getElementById
    ("bt11").innerText == document.getElementById("bt12").
    innerText && document.getElementById("bt10").innerText != ""){
        alert("Jogo finalizado!!\nVencedor: " + document.
        getElementById("bt10").innerText)
    }
    if(document.getElementById("bt20").innerText == document.
    getElementById("bt21").innerText && document.getElementById
    ("bt21").innerText == document.getElementById("bt22").
    innerText && document.getElementById("bt20").innerText != ""){
        alert("Jogo finalizado!!\nVencedor: " + document.
        getElementById("bt20").innerText)
    }
    if(document.getElementById("bt00").innerText == document.
    getElementById("bt10").innerText && document.getElementById
    ("bt10").innerText == document.getElementById("bt20").
    innerText && document.getElementById("bt00").innerText != ""){
        alert("Jogo finalizado!!\nVencedor: " + document.
        getElementById("bt00").innerText)
    }
    if(document.getElementById("bt01").innerText == document.
    getElementById("bt11").innerText && document.getElementById
    ("bt11").innerText == document.getElementById("bt21").
    innerText && document.getElementById("bt01").innerText != ""){
        alert("Jogo finalizado!!\nVencedor: " + document.
        getElementById("bt01").innerText)
    }
    if(document.getElementById("bt02").innerText == document.
    getElementById("bt12").innerText && document.getElementById
    ("bt12").innerText == document.getElementById("bt22").
    innerText && document.getElementById("bt02").innerText != ""){
        alert("Jogo finalizado!!\nVencedor: " + document.
        getElementById("bt02").innerText)
    }
    if(document.getElementById("bt00").innerText == document.
    getElementById("bt11").innerText && document.getElementById
    ("bt11").innerText == document.getElementById("bt22").
    innerText && document.getElementById("bt00").innerText != ""){
        alert("Jogo finalizado!!\nVencedor: " + document.
        getElementById("bt00").innerText)
    }
    if(document.getElementById("bt02").innerText == document.
    getElementById("bt11").innerText && document.getElementById
    ("bt11").innerText == document.getElementById("bt20").
    innerText && document.getElementById("bt02").innerText != ""){
        alert("Jogo finalizado!!\nVencedor: " + document.
        getElementById("bt02").innerText)
    }
}