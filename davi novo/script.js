
// Selecionando os elementos do HTML
const nome = document.getElementById("nome");
const botaoEditar = document.getElementById("editar");
const botaoSair = document.getElementById("sair");

// Nome original
const nomeOriginal = "davi gomes vargaas";

// Recupera o nome salvo no navegador
const nomeSalvo = localStorage.getItem("nomeCurriculo");

// Exibe o nome salvo ou o nome original
nome.textContent = nomeSalvo || nomeOriginal;

// Função para editar o nome
botaoEditar.addEventListener("click", function () {

    const novoNome = prompt("Digite seu novo nome:");

    if (novoNome !== null && novoNome.trim() !== "") {

        nome.textContent = novoNome.trim();

        // Salva o novo nome no navegador
        localStorage.setItem("nomeCurriculo", novoNome.trim());

        alert("Nome atualizado com sucesso!");

    } else if (novoNome !== null) {

        alert("Digite um nome válido!");

    }

});

// Função para sair
botaoSair.addEventListener("click", function () {

    const confirmar = confirm("Deseja realmente sair?");

    if (confirmar) {

        // Remove o nome salvo
        localStorage.removeItem("nomeCurriculo");

        // Restaura o nome original
        nome.textContent = nomeOriginal;

        alert("Nome restaurado com sucesso!");

    }const botaoEditar = document.querySelector("#editar");
const botaoSair = document.querySelector("#sair");
const botaoCancelar = document.querySelector("#cancelar");

const areaFormulario = document.querySelector("#areaFormulario");
const formulario = document.querySelector("#formPerfil");

// Campos do formulário
const campoNome = document.querySelector("#nome");
const campoCurso = document.querySelector("#curso");
const campoEmail = document.querySelector("#email");
const campoCidade = document.querySelector("#cidade");
const campoDescricao = document.querySelector("#descricao");

// Elementos que exibem o perfil
const perfilNome = document.querySelector("#perfilNome");
const perfilCurso = document.querySelector("#perfilCurso");
const perfilEmail = document.querySelector("#perfilEmail");
const perfilCidade = document.querySelector("#perfilCidade");
const perfilDescricao = document.querySelector("#perfilDescricao");


});