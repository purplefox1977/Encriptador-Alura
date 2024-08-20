
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
<h2>En la segunda seccion, tenemos otraseccion que nos permite empaquetar el textarea y dos div </h2>
<ol type="a">
<li>En laseccion copia,vemos un textarea y dos divisiones </li>
<li>En el textarea se ve el texto encriptado</li>
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
<li>En la .seccion_copiar se define su tamaño</li>

<h2>La seccion_copiar esta compuesta de:</h2>
<ol type="a">
<li>.copia se define tamaño,margen y color de fondo<</li>
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
<li>.botonesEncri</li>
<li>.seccion_copiar</li>
<li>.copia</li>
<li>.textMensaje</li>
<li>.mensaje_copi</li>
<li>.recTex1,.recTex2</li>
<li>.botonCopia</li>
</ol>

<h2>--Encriptador Formato Celular--375--</h2>
<ol type="I">
<li>@media (max-width:375px )</li>
<li>.pantalla__main</li>
<li>.logo</li>
<li>.seccion_ingreso_texto</li>
<li>.textarea</li>
<li>.advertencia</li>
<li>.botonesEncri</li>
<li>.botonEncriptar</li>
<li>.seccion_copiar</li>
<li>.copia</li>
<li>.textMensaje</li>
<li>.mensaje_copi</li>
<li>.recTex1</li>
<li>.recTex2</li>
<li>.botonCopia</li>
</ol>

<h1> En el script.js</h1>

<ol type="I">
<li>Lo primero que hacemos es declarar las variables glovales</li>
<li>Empezamos a hacer las funciones</li>
<li>funcion btnEncriptar(), declaramos variables,const</li>
    <ol type="a">
    <li>La funcion encriptar,recibe la const textArea</li>
    <li>Se muestra en el campo de mensaje, el textArea/ se crea el onclik en el html con el nombre de btnEncriptado</li>
    <li>Se limpia el campo</li>
    <li>Se ingresa el texto predeterminado en textarea</li>
    <li>Se oculta la imagen cuando aparece el texto encriptado</li>
    <li>Se oculta el texto cuando aparece el textEncriptado</li>
    <li>Hace invisible el texto dentro de div mensaje_copi</li>
    <li>Hace visible el boton copiar</li>
    <li>Cambia el color del boton encriptar</li>
<p>falta</p>
    <li>Desabilitar el boton desencriptar </li>
    <li>Habilitar el boton desencriptar </li>
    <li>Deshabilitar el botone encriptar </li>
    </ol>
<li>funcion copiar()</li>
    <ol type="a">
    <li>El texto de textArea aparece encriptado en el campo de textMensaje </li>
    <li>Aparece el boton copiar en el campo textMensaje</li>
    <li>Se selecciona el texto del campo y se presiona el boton copiar</li>
    <li>El boton copiar realiza la accion de copiar el texto en el portapapeles  y a su ves de pegarlo en el campo textArea</li>
    </ol>
<li>funcion Desencriptar()</li>
    <ol type="a">
    <li>El texto que se encuentra encriptado, en el campo textArea</li>
    <li>Se presiona el boton desencriptar, para modificar el texto </li>
    <li>El texto desenciptado, se visualiza en el campo textMensaje</li>
    </ol>
</ol>



