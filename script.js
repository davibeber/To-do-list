const inputbox = document.getElementById("input-box");
const listContainer = document.getElementById("list_container");


function addTask(){

// O que é essa função toda? value? pq ===?
// Pq alert()? 

// Pela minha interpretação, se tiver algo escrito, crie e escreva dentro de <li>
// se estiver em branco, mande o alert("vc deve escrever algo!")
// Mas ainda não entendo a sintaxe

    if (inputbox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);


    }
    inputbox.value="";
    // Dps de adicionado uma tarefa, essa função limpa a caixa 
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
         e.target.classlist.toogle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);


}
function showtask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showtask();