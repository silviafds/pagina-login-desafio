function validaEmail() {
    var emailRecebido = document.getElementById("emailT").value;

    if( emailRecebido=="" || emailRecebido.indexOf('@')==-1 || emailRecebido.indexOf('.')==-1 ) {
       document.getElementById("erroEmail").innerHTML = "Por favor, insira um email válido.";
       document.getElementById("emailT").style.borderColor = "red";
	   return false;
	}
    return true;
}