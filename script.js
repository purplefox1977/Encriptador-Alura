const textArea= document.querySelector(".textarea");// se almacenaloq el usuarioescribe
const textMensaje= document.querySelector(".textMensaje");
const botonCopia= document.querySelector(".boton_copia");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

//@@@@@@@@@@@@@@@@@@@@@@@--Encriptar--@@@@@@@@@@@@@@@@@@@@@@@@@@@

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

function btnEncriptar(){
    
    const textoEncriptado = encriptar(textArea.value);//recibe la funcion encriptar,recibe la const textArea
    textMensaje.value = textoEncriptado;// se muestra en el campo de mensaje, el textArea/ se crea el onclik enel html con el nombre de btnEncriptado
    textArea.value="";// se limpia el campo
    textArea.value="Ingrese el texto aqui";
    textMensaje.style.backgroundImage ="none";//oculta la imagen cuando aparece el texto encriptado
    var tex = document.getElementById("mensajeCopi");// oculta el texto cuando aparece el textEncriptado
        
        if (tex.style.visibility === "collapse") {//
            tex.style.visibility = "visible";
        } else {
            tex.style.visibility = "collapse";//
            
        }
     
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@--Desencriptar--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

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

function btnDesencriptar(){
    
    const textoEncriptado= desencriptar(textArea.value);
    textMensaje.value =textoEncriptado; 
    textArea.value="";
  /*  var copi = document.getElementById("btnCopi");
        
        if (copi.style.visibility === "hidden ") {//collapse
            copi.style.visibility = "visible";
        } else {
            copi.style.visibility = " hidden";//collapse
        }
    ocultar();*/
}

