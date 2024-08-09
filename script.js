const textArea= document.querySelector(".textarea");
const  textMensaje= document.querySelector(".textMensaje");
const  botonCopia= document.querySelector("boton_copia");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

//@@@@@@@@@@@@@@@@@@@@@@@--Encriptar--@@@@@@@@@@@@@@@@@@@@@@@@@@@

function btnEncriptar(){
    const textoEncriptado= encriptar(textArea.value)
    textMensaje.value =textoEncriptado;
    textArea.value="";
    textMensaje.style.backgroundImage ="none";

    var tex = document.getElementById("mensajeCopi");
        if (tex.style.visibility === " collapse") {
            tex.style.visibility = "visible";
        } else {
            tex.style.visibility = " collapse";
        }

}

function encriptar(stringEncriptado){
    
    let matrizCodigo = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];
// console.table(matrizCodigo);
    stringEncriptado = stringEncriptado.toLowerCase();//convercion a minuscula
    for(let i = 0; i< matrizCodigo.length ;i++){
        if (stringEncriptado.includes (matrizCodigo[i][0])){
            stringEncriptado= stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@--Desencriptar--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
function btnDesEncriptar(){
    const textoEncriptado= desEncriptar(textArea.value)
    textMensaje.value =textoEncriptado;
    textArea.value="";

    var copi = document.getElementById("btnCopi");
        if (copi.style.visibility === " collapse") {
            copi.style.visibility = "visible";
        } else {
            copi.style.visibility = " collapse";
        }
    /*ocultar();*/
}

function desEncriptar(stringDesEncriptado){
    
    let matrizCodigo = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];
// console.table(matrizCodigo);
    stringDesEncriptado = stringDesEncriptado.toLowerCase();//convercion a minuscula
    for(let i = 0; i< matrizCodigo.length ;i++){
        if (stringDesEncriptado.includes (matrizCodigo[i][1])){
            stringDesEncriptado= stringDesEncriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return stringDesEncriptado;
}
 
function btnCopia(id){
    var elemento = document.getElementById(id);
    elemento.style.display = "visible";
}

function copia(botonCopia){

}