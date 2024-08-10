
<h1> En index.html</h1>
<p> Se procedio a cargar todos los elementos nesesarios  para copiar el diseño de Figma</p>

<ol type="I">
<li>El logo se cargo en el header.</li>
<li>En el main se hicieron dos secciones principales</li>
<li>En la prinera seccion  se creo la clase seccion_ingreso_texto.</li>

<h2>En su interior encontramos, dos div y un textarea</h2>
<ol type="a">
<li>En el textarea se ingresa el texto a encriptar</li>
<li>En la div advertencia hay, una img y una  h6</li>
<li>En la div botonesEncri encontramos  dos botones el encriptar y el desencriptar</li>
</ol>
<h2>En la segunda seccion vemos un textarea y dos divisiones</h2>
<ol type="a">
<li> En el textarea se ve el texto encriptado</li>
<li>En la primera div, se encuentran h4 y h5 </li>
<li>En la segunda div, esta el boton copiar</li>
</ol>
</ol>

<h1> En el style.css</h1>

<ol>
<li>Se carga las url con los tipos de letras que se van a utilizar</li>
<li>En el root se declaran las variables de los colores y las fuentes </li>
<li>En este caso  se establece el pading principal en 0</li>
<li>En el body se establece el color de bondo de pantalla o si deseo un tapiz</li>
<li>En el header secoloca el logo </li>
<li>En pantalla_main, establesco su tamaño, el modo de acomodarse las secciones y la distancia entre secciones</li>
<li>En la seccion_ingreso_texto, establesco distribucion de elementos,su tamaño y los margenes  de los elementos que la componen.</li>

<h2>La seccion_ingreso_texto estacompuesta de:</h2>
<ol type="a">
<li>.textarea</li>
<li>.advertencia</li>
<li>.advertenciaImg</li>
<li>.advertenciaTex</li>
<li>.botonesEncri, este se encaga de contener a los dos votones de esta seccion, en la cual se indica su dispoccion , tamaño y margen.</li>
<li>.botonEncriptar</li>
<li>.botonDesencriptar (este boton tiene un color mas oscuro cuando ahun no se activo el boton encriptar)</li>
<li>.botonDesencriptarOff (este es el mismo que el anterior solo cambia su color al estar activado)</li>
</ol>
<li>En la .seccion_copiar se define su tamaño,margeny color de fondo</li>

<h2>La seccion_copiar esta compuesta de:</h2>
<ol type="a">
<li>.textMensaje(en esta seccion aparte de establecer suformato se ingresa una img)</li>
<li>.mensaje_copi</li>
<li>.recTex1</li>
<li>.recTex2</li>
<li>.boton_copia</li>
<li>.botonCopia</li>
</ol>
<h2>Se quita el foco de las dos secciones de texto</h2>
<li>::placeholder{color: blueviolet;}</li>
<li>.textarea:focus</li>
<li>.textMensaje:focus</li>
<h2>-- Encriptador Formato Tablet--768--</h2>
<li>@media (max-width:768px )</li>
<h3>La responsividad en modo tableta esta compuesta:</h3>
<ol type="a">
<li>.pantalla__main</li>
<li>.logo</li>
<li>.seccion_ingreso_texto</li>
<li>.textarea</li>
<li>.advertencia</li>
<li>.seccion_copiar</li>
<li>.textMensaje</li>
<li>.botonCopia</li>
</ol>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
</ol>

.seccion_copiar{
    margin-left: 40px;
    
}
.copia{
    width: 688px;
    height: 343px;
    border-radius: 32px; 
    background-color: bisque;
    padding: 32px;
    margin-left: 32px;
    margin-top: 69px;
}
.textMensaje{
    width: 624px;
    height: 180px;
    display: flex;
    align-content: center;  
    background-image: none;/* */
    
}
.mensaje_copi{
    width: 624px;
    height: 69px;
    margin-top: 96px;
    align-content: center;
  /*  margin-left: 40px;
    */
    
}
.recTex1,.recTex2{
    width: 624px;
    height: 29px;
   
}
.boton_copia{
    width: 624px;
    height: 67px;
   
}
.botonCopia{
    width: 624px;
    height: 67px;
    border-radius: 24px;
    background-color: var(--color-terciario);
    color:var(--color-secundario);
   
}
.botonCopia{
    width: 624px;
    height: 67px;
    border-radius: 24px;
    background-color: var(--color-terciario);
    color:var(--color-secundario);
   
}
}








/*&&&&&&&&&&&&&&&&&&&&&-- Encriptador Formato Tablet--768--&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/
@media (max-width:768px ){
    .header{
        padding: 10%;
    }
  
    .pantalla__main{
       flex-direction: column;  /*cuando se reduce la pantalla la imagen se va al final*/
       padding: 1% 1%;/* Esto no cambio casinada , en elcodigo se debe cambiar algo mas*/
       
    }
   .logo{
    
        display: inline;
        margin-left: -12%;
        margin-top: 74.97;
       
    }
    /*&&&&&&&&&&&&&&&&&&--Seccion Texto ingresado -- */

    .seccion_ingreso_texto{
        width: 688px;
        height: 697px;
        margin-left: 40px;
        margin-top: 116px;
   /*     /* width: auto;Como se tiene contenido y no sabemos que % poner se pone auto*/
    }
    .textarea{
        display: flex;
        align-items: center;
    }
    .advertencia{
        margin-top: 308px;
    }
    /*&&&&&&&&&&&&&&&&&&&&&-- Seccion Copiado--*/
    .seccion_copiar{
        width: 688px;
        height: 343px;
        border-radius: 32px; 
        margin-left: 40px;
        gap: 64px;
        background-color: bisque;
        background-image: none;
    }
    .textMensaje{
        width: 624px;
        height: 180px;
        display: flex;
        align-content: center;
        margin-top: 32px;
    }
    .botonCopia{
        width: 624px;
        height: 67px;
        border-radius: 24px;
        background-color: var(--color-terciario);
        color:var(--color-secundario);
        margin: 32px;
    }
}
/*&&&&&&&&&&&&&&&&&&&&&&&&&&--Encriptador Formato Celular--375--&&&&&&&&&&&&&&&&&&&&&&&*/
@media (max-width:375px ){
    .header{
        padding: 20%;
    }
  
    .pantalla__main{
       flex-direction: column;  /*cuando se reduce la pantalla la imagen se va al final*/
       padding: 1% 1%;/* Esto no cambio casinada , en elcodigo se debe cambiar algo mas*/
    }
   .logo{
        display: inline;
        margin-left: -15%;
        margin-top:23px ;
       
    }

    /*&&&&&&&&&&&&&&&&&&--Seccion Texto ingresado -- */
    .seccion_ingreso_texto{
        width: 343px;
        height: 880px;
        margin-left: 16px;
        margin-top: 64px;
  
    }
    .textarea{
        width: 343px;
        height: 624px;
        display: flex;
        align-items: center;
    }
    .advertencia{
        margin-top: 64px;
        
    }
    .botonesEncri{
        display: flex;
        flex-direction: column;
        width: 343px;
        height: 158px; 
        gap: 24px; 
    
    }
    .botonEncriptar{
        width: 343px;     
    }
    .botonDesencriptar{
        width: 343px;
    }
    /*&&&&&&&&&&&&&&&&&&&&&-- Seccion Copiado--*/
    .seccion_copiar{
        width: 343px;
        height: 595px;
        border-radius: 32px; 
        margin-left: 16px;
        margin-top: px;
        
    }
    .textMensaje{
        width: 279px;
        height: 432px;
        margin-top: 32px;
        display: flex;
        align-content: center;
        background-image: none;
    }
    .botonCopia{
        width: 279px;
        height: 67px;
        border-radius: 24px;
        background-color: var(--color-terciario);
        color:var(--color-secundario);
        margin: 32px;
    }
}






