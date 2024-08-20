<!--function ocultar(id){
    var elemento = document.getElementById(id);
    elemento.style.display = "none";
    <div class="sport-table-wager" id="grupo1">
    <input type="submit" value="Ocultar" onclick="ocultar('grupo1')">
</div>}-->



 
function btnCopia(id){
    var elemento = document.getElementById(id);
    elemento.style.display = "visible";
}

function copia(botonCopia){

}

navigator.clipboard
  .readText()
  .then(
    (clipText) => (document.querySelector(".editor").innerText += clipText),
  );

  function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
<button onclick="myFunction()">Clickeame</button>

<div id="myDIV" style="border:1px solid black;">
  Este elemento aparece y desaparece con el botón
</div>

<script> 
   const btncompra = document.getElementById('place_order');
   btncompra.disabled = true; 
</script>




var logTarget = document.getElementById('logTarget');

function useAsyncApi() {
  return document.querySelector('input[value=async]').checked;
}

function log(event) {
  var timeBadge = new Date().toTimeString().split(' ')[0];
  var newInfo = document.createElement('p');
  newInfo.innerHTML = '' + timeBadge + ' ' + event + '.';
  logTarget.appendChild(newInfo);
}

function performCopyEmail() {
  var selection = window.getSelection();
  var emailLink = document.querySelector('.js-emaillink');

  if (useAsyncApi()) {
    navigator.clipboard.writeText(emailLink.textContent)
      .then(() => log('Async writeText successful, "' + emailLink.textContent + '" written'))
      .catch(err => log('Async writeText failed with error: "' + err + '"'));
  } else {
    selection.removeAllRanges();
    var range = document.createRange();
    range.selectNode(emailLink);
    selection.addRange(range);
  
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      log('Copy email command was ' + msg);
    } catch (err) {
      log('execCommand Error', err);
    }
    
    selection.removeAllRanges();
  }
}

function performCutTextarea() {
  var cutTextarea = document.querySelector('.js-cuttextarea');

  if (useAsyncApi()) {
    navigator.clipboard.writeText(cutTextarea.textContent)
      .then(() => {
        log('Async writeText successful, "' + cutTextarea.textContent + '" written');
        cutTextarea.textContent = '';
      })
      .catch(err => log('Async writeText failed with error: "' + err + '"'));
  } else {
    var hasSelection = document.queryCommandEnabled('cut');
    cutTextarea.select();
  
    try {
      var successful = document.execCommand('cut');
      var msg = successful ? 'successful' : 'unsuccessful';
      log('Cutting text command was ' + msg);
    } catch (err) {
      log('execCommand Error', err);
    }
  }
}

function performPaste() {
  var pasteTextarea = document.querySelector('.js-cuttextarea');
  
  if (useAsyncApi()) {
    navigator.clipboard.readText()
      .then((text) => {
        pasteTextarea.textContent = text;
        log('Async readText successful, "' + text + '" written');
      })
      .catch((err) => log('Async readText failed with error: "' + err + '"'));
  } else {
    pasteTextarea.focus();
    try {
      var successful = document.execCommand('paste');
      var msg = successful ? 'successful' : 'unsuccessful';
      log('Pasting text command was ' + msg);
    } catch (err) {
      log('execCommand Error', err);
    }
  }
}

// Get the buttons
var cutTextareaBtn = document.querySelector('.js-textareacutbtn');
var copyEmailBtn = document.querySelector('.js-emailcopybtn');
var pasteTextareaBtn = document.querySelector('.js-textareapastebtn');

// Add click event listeners
copyEmailBtn.addEventListener('click', performCopyEmail);
cutTextareaBtn.addEventListener('click', performCutTextarea);
pasteTextareaBtn.addEventListener('click', performPaste);

function logUserOperation(event) {
  log('User performed ' + event.type + ' operation. Payload is: ' + event.clipboardData.getData('text/plain') + '');
}

document.addEventListener('cut', logUserOperation);
document.addEventListener('copy', logUserOperation);
document.addEventListener('paste', logUserOperation);
HTML
<p class="heading">Use the forms below for programmatic clipboard access or invoke standard copy/cut/paste operations with your keyboard.</p>
<section>
  <label><input type="radio" name="api" value="sync"> Use older, synchronous API</label><br/>
  <label><input type="radio" name="api" value="async" checked> Use newer, asynchronous API</label>
</section>
<section>
  <h2>Cut/Paste Example</h2>
  <p>
    <textarea class="js-cuttextarea">Hello! Cut me programatically or maybe try pasting here.</textarea>
  </p>

  <p>
    <button class="js-textareacutbtn">Cut text programatically</button>
    <button class="js-textareapastebtn">Paste text programatically</button>
  </p>
</section>

<section>
  <h2>Copy Example</h2>
  <p>Email me at <a class="js-emaillink" href="mailto:matt@example.co.uk">matt@example.co.uk</a></p>
  <p>
    <button class="js-emailcopybtn">Copy Email Address programatically</button>
  </p>
</section>

<p id="logTarget"></p>

<p><small>Demo based on <a href="https://googlechrome.github.io/samples/cut-and-copy/index.html" target="_blank" rel="noopener">Google Chrome examples</a>.</small></p>
Compatibilidad con navegadores