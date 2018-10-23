// SIDEBAR DEL HOME
function mostrar() {
    document.getElementById("sidebar").style.width = "300px";
    document.getElementById("contenido").style.marginLeft = "300px";
    document.getElementById("abrir").style.display = "none";
    document.getElementById("cerrar").style.display = "inline";
}

function ocultar() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("contenido").style.marginLeft = "0";
    document.getElementById("abrir").style.display = "inline";
    document.getElementById("cerrar").style.display = "none";
}


// BOTON DEL LOGIN

function dropdown(e) {
    let textDropdown = e.target.parentNode.parentNode.firstChild.nextSibling;
    textDropdown.innerText = e.target.innerText;   
}

//CHECKBOX


let FirstChecked;


function handleCheck(e){
   
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
FirstChecked=this;

// console.log(lastCheked.cheked);
console.log(FirstChecked.checked);
if(FirstChecked.checked==true){

}}  
// if(e.shiftkey && this.checked){

// }
// if(lastChecked.checked==true){

// }}
// checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));