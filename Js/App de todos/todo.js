var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
/* Criação de 3 variaveis contendo os elemtnos da div app
   para identificar o botao, o input e o ul
*/

var content = JSON.parse(localStorage.getItem('listTodo')) || [];
// Criando o array content contendo os elemtnos a ser exibidos
// Ou retornando um array vazio


function renderContent(){
    listElement.innerHTML = ''; // Listando o ul presente no html
    for(todo of content){
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo);
    // Criação de duas variaveis contendo um li com o conteudo
    // Dentro de um for que percorre o tamanho do array

    var linkElement = document.createElement('a');
    linkElement.setAttribute('href', '#');
    var linkText = document.createTextNode('Excluir');
    linkElement.appendChild(linkText);
    // Criando um a href para excluir um li desejado
    // Nele contem um texto excluir.
    
    var pos = content.indexOf(todo);
    linkElement.setAttribute('onclick', 'deleteTodo('+ pos + ')');
    // Criação da variavel que ira percorrer o array
    // atras do botão excluir selecionado
    // Fazendo isso via comparação do texto e posição(indexOf)

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);
    listElement.appendChild(todoElement);
    // Indicando oque o elemento deve conter
    // e exibindo ele por final

    }
}

function addContent(){
var todoText = inputElement.value;
// Criação da função add para criar um novo conteudo
// recebido do input

content.push(todoText);
inputElement.value = '';
renderContent();
saveStorage()
// Puxando o valor do input e renderizando 

}

buttonElement.onclick = addContent;

function deleteTodo(pos){
    content.splice(pos, 1);
    renderContent();
    saveStorage()
    // Função que deleta um conteúdo ao clicar em seu
    // a href
}


function saveStorage(){
    localStorage.setItem('listTodo', JSON.stringify(content));
}
// Criação da função save para salvar os conteudos
// no armazenamento local, utilizando ainda o JSON.

renderContent();