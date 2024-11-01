var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var trPacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < trPacientes.length; i++) {

    var trPaciente = trPacientes[i];

    var tdPeso = trPaciente.querySelector(".info-peso");
    var tdAltura = trPaciente.querySelector(".info-altura");
    var tdImc = trPaciente.querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        pesoEhValido = false;
        trPaciente.classList.add("paciente-invalido");
        tdPeso.classList.add("peso-invalido");
    }

    if (altura <= 0 || altura >= 3.00) {
        alturaEhValida = false
        trPaciente.classList.add("paciente-invalido");
        tdAltura.classList.add("altura-invalida");

    }

    if (pesoEhValido && alturaEhValida) {
        var imc = (peso / (altura * altura));
        tdImc.textContent = imc.toFixed(2);
    } else {
        tdImc.textContent = "Peso inválido!"
    }

}

titulo.addEventListener("click", mostraMensagem)
function mostraMensagem() {
    console.log("Olá eu fui clicado!");
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function
(event){
    event.preventDefault();
    var form = document.querySelector('#form-adiciona');
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement('tr')
    var nomeTd = document.createElement('td')
    var alturaTd = document.createElement('td')
    var gorduraTd = document.createElement('td')
    var pesoTd = document.createElement('td')
    var imcTd = document.createElement('td')

    nomeTd.textContent = nome;
    alturaTd.textContent = altura;
    pesoTd.textContent = peso;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes")

    tabela.appendChild(pacienteTr);


});