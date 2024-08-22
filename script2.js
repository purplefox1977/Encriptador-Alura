const textArea= document.querySelector(".textarea");// se almacenaloq el usuarioescribe
const textMensaje= document.querySelector(".textMensaje");
const botonCopia= document.querySelector(".boton_copia");
const botonDesen= document.querySelector(".botonDesencriptar");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@--Encriptar--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
function btnEncriptar(){
    
    const textoEncriptado = encriptar(textArea.value);//recibe la funcion encriptar,recibe la const textArea
    textMensaje.value = textoEncriptado;// se muestra en el campo de mensaje, el textArea/ se crea el onclik enel html con el nombre de btnEncriptado
    textArea.value="";// se limpia el campo
    textArea.value="Ingrese el texto aqui";
    textMensaje.style.backgroundImage ="none";//oculta la imagen cuando aparece el texto encriptado
    var tex = document.getElementById("mensajeCopi");// oculta el texto cuando aparece el textEncriptado
    tex.style.visibility = "collapse";// hace invisible el texto dentro de div mensaje_copi
    botonCopia.style.visibility = "visible";// hace visible el boton copiar
    botonDesen.style.backgroundColor = "#E5E5E5";// cambia el color del boton#E5E5E5
}
function encriptar(stringEncriptado){
    
    let matrizCodigo = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];//carga de matriz
    stringEncriptado = stringEncriptado.toLowerCase();//convercion a minuscula 
        for(let i = 0; i< matrizCodigo.length ;i++){//Recorre la matriz
            if (stringEncriptado.includes (matrizCodigo[i][0])){//verificacion de las letrasque se ingresan 
                stringEncriptado= stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);//replaceAllcambia una cadena de caracteres por otros
            }
        }
    return stringEncriptado;
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@--Desencriptar--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
function btnDesencriptar(){
    
    const textoEncriptado= desencriptar(textArea.value);
    textMensaje.value =textoEncriptado; 
    textArea.value="";
   // botonDesen.style.background = "#D8DFE8";// cambia el color del boton
}

function desencriptar(stringDesencriptado){
    
    let matrizCodigo = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];//carga de matriz
    stringDesencriptado = stringDesencriptado.toLowerCase();//convercion a minuscula
        for(let i = 0; i< matrizCodigo.length ;i++){//Recorre la matriz
            if (stringDesencriptado.includes(matrizCodigo[i][1])){//verificacion de las letrasque se ingresan  
                stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
            }
        }
    return stringDesencriptado;
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@--Copiar--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
function btnCopiar(){

    textArea.value="";
    copiar();
    pegar();

}
function copiar(){

    let copyText = document.getElementById("mensaje");//
    copyText.querySelectorAll;
    navigator.clipboard.writeText(copyText.value);
    alert("Se copio el texto: " + copyText.value +" en la papelera");
    
}

addEventListener("paste", (event) => {});

onpaste = (event) => {};
function pegar(){
    document.addEventListener('DOMContentLoaded',function(){
        let pasteButton = document.getElementsByTagName('button')[0];
        pasteButton.addEventListener('click', function () {
            navigator.clipboard
                .readText()
                .then(
                    cliptext =>
                        (document.getElementById('clipboard-paste').innerText = cliptext),
                        err => console.log(err)
                );
        });
}
