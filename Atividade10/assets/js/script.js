var bv = null;

function boasVindas() {
    if(bv != null && bv == false) {
        document.getElementById("boasv").innerHtml = "Que bom que você voltou a visitar esta página!";
    }
    if(bv != null && bv == true) {
        document.getElementById("boasv").innerHtml = "Volte sempre à esta página!";
    }
}

function validar() {

    var elementos = document.getElementById("form1").elements;
    var padrao = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if(elementos[1].value.length < 10) {
        alert("Nome curto demais");
        document.getElementById("nome").focus();
    }
    if(elementos[5].value.length < 20) {
        alert("Comentário curto demais");
        document.getElementById("comentario").focus();
    }
    if(!elementos[3].value.match(padrao)) {
        alert("E-Mail inválido!");
        document.getElementById("email").focus();
    }
    
    if(elementos[7].checked) {
        bv = false;
    } else {
        bv = true;
    }
}
