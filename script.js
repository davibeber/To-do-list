const inputbox = document.getElementById("input-box");
const listContainer = document.getElementById("list_container");


function addTask(){

// O que é essa função toda? value? pq ===?
// Pq alert()? 

// Pela minha interpretação, se tiver algo escrito, crie e escreva dentro de <li>
// se estiver em branco, mande o alert("vc deve escrever algo!")
// Mas ainda não entendo a sintaxe

    if (inputbox.value === ''){
// .value = é a propriedade que guarda exatamente o texto que está escrito lá dentro naquele momento.
// pq não usar == ou = ao inves de === ?

// = atribuição, guarda um valor, como x = 10;

// == Igualdade, compara valores
// mas tenta dar um "jeitinho" se os tipos forem diferentes. Se você comparar (5 == "5"), ele retorna 
// true porque ele converte o texto para número. 


// === Igualdade Estrita (Rigorosa, precisa), diferente do anteirior (==) este compara valor e tipo de dado.
// Se comparar 5 === "5", retorna false, porque um é um número (number) e o outro é um texto (string).



        alert("You must write something!");
        //função nativa do JS que abre uma janela pop-up
    }
    else{
        let li = document.createElement("li");

// let e const = criam variaveis, porem const não permite que vc altere o valor guardado
// let pode ser uma opção interessante caso eu consiga criar uma função que edite o que estiver escrito em <li>
// document é o ponto de partida, o objeto raiz que representa a página inteira.

        li.innerHTML = inputbox.value;
// innerHTML é o que estiver entre as tags
// então seria " complete o vazio de <li> com o valor de inputbox"


        listContainer.appendChild(li);
        // está pegando a variavel lá em cima e adicionando li

        let btn = document.createElement("button");

        btn.classList.add("checked");

        li.appendChild(btn);

        let span = document.createElement("span"); // está adicionando uma tag para tornar clicavel
        span.innerHTML = "\u00d7"; // X
        li.appendChild(span);


    }
    inputbox.value="";
    // Dps de adicionado uma tarefa, essa função limpa a caixa 
    saveData();
}

const btn = document.getElementsByClassName("checked");


btn.addEventListener("click", () => {
    btn.classList.toggle("ativo");
});


// Provavelmente isso que fiz é meio que redundante pois ja existi um .addEventListener("click") como o a seguir
// Porem optei por criar um outro do zero para:
// Não criar outra falha
// Aprender a criar uma função do zero com base na minha visao

// Mais pra frente eu tento juntar as duas



listContainer.addEventListener("click",function(e){
// está pegando a variavel la de cima (é a tag ul que envolve o li), adicionando a função de evento
// para "prestar atenção" no click mas daqui pra frente não entendo.
//funcion()? (e)? e = event



    if(e.target.tagName === "LI"){
        // não entendo cada palavra
         e.target.classList.toggle("checked");// Aqui eu acho que vai trocar o svg para "concluido"
         // target = alvo exato onde o dedo do usuário clicou
        saveData();// chamando a função que foi criada mais a frente para salvar os dados no navegador
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();// se clicar no span, remove a tarefa
        //parentElement = remove o elemento pai e tudo dentro dele
        //nao entendo cada palavra
        saveData();
    }
},false);// pq false? ainda não entendi

// Nome da função,não é algo nativo
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
    //localStorage = recurso nativo, um mini BD
    // setItem() = uma função que pede chave, valor 
    // chave = data (pode ser qualquer nome)
    // valor = listContainer.innerHTML (literalmente o que estiver guardado aqui)
}
function showtask(){// função que serve para mostrar os dados assim que carregar a pagina
    listContainer.innerHTML = localStorage.getItem("data");
// Compreendo cada palavra mas a ordem de como é pedido, a ordem da sintaxe ainda não tenho familiaridade

}

showtask();