function valida() {

    let textEnd = document.forms['meuForm']['endereco'].value
    let textTel = document.forms['meuForm']['telefone'].value
    let msgErro = ''
    let avancar = true

    if (textEnd == "") {
        msgErro = "O campo endereço é de preenchimento obrigatório"
        avancar = false;
    }

    if (textTel == "") {
        msgErro = "O campo telefone é de preenchimento obrigatório!"
        avancar = false;
    }

    if (avancar == false) {
        document.getElementById('erro').innerHTML = msgErro
    }

    return avancar
}

function enviar() {

    var endId = document.getElementById("endId");
    var telId = document.getElementById("telId");

    if (endId.value != "" && telId.value != "") {
        alert('Obrigado, seu endereço é ' + endId.value + ' e seu telefone é: ' + telId.value + ' os seus dados foram encaminhados com sucesso');
    }

}