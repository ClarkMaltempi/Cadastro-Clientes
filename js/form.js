var botaoAdicionar = document.querySelector("#adicionar-cliente");
botaoAdicionar.addEventListener("click", function(event) {
event.preventDefault();

var form = document.querySelector("#form-adiciona");
var cliente = obtemClienteDoFormulario(form);


adicionaClienteNaTabela(cliente);


form.reset();


});


//adicionando o paciente na tabela
//cria Tr e TD

function adicionaClienteNaTabela(cliente){
    var clienteTr = montaTr(cliente);
    var tabela = document.querySelector("#tabela-clientes");
    tabela.appendChild(clienteTr);
}

    

function obtemClienteDoFormulario(form) {

    var clientes = {
        nome: form.nome.value,
        email:form.email.value,
        cpf: form.cpf.value,
        telefone: form.telefone.value,
        cep: form.cep.value,
        endereco: form.endereco.value,
        numero: form.numero.value,
        bairro: form.bairro.value,
        cidade: form.cidade.value,
        estado: form.estado.value
    }
    return clientes;
}


    function montaTr(cliente) {
    var clienteTr = document.createElement("tr");
    clienteTr.classList.add("cliente");

    clienteTr.appendChild(montaTd(cliente.nome, "info-nome"));
    clienteTr.appendChild(montaTd(cliente.email, "info-email"));
    clienteTr.appendChild(montaTd(cliente.cpf, "info-cpf"));
    clienteTr.appendChild(montaTd(cliente.telefone, "info-telefone"));
    clienteTr.appendChild(montaTd(cliente.cep, "info-cep"));
    clienteTr.appendChild(montaTd(cliente.endereco, "info-endereco"));
    clienteTr.appendChild(montaTd(cliente.numero, "info-numero"));
    clienteTr.appendChild(montaTd(cliente.bairro, "info-bairro"));
    clienteTr.appendChild(montaTd(cliente.cidade, "info-cidade"));
    clienteTr.appendChild(montaTd(cliente.estado, "info-estado"));

    return clienteTr;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

