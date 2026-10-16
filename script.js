const inputbox = document.getElementById("input-box");
const listContainer = document.getElementById("list_container");


function addTask(){

    if (inputbox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li);

        let btn = document.createElement("button");
        btn.classList.add("checked");
        li.appendChild(btn);

        let span = document.createElement("span"); 
        span.innerHTML = "\u00d7"; 
        li.appendChild(span);
    }
    inputbox.value="";
    saveData();
}

listContainer.addEventListener("click",function(e){

    if(e.target.tagName === "LI"){
        e.target.classList.toggle("ativo");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
    else if(e.target.tagName === "BUTTON"){
    e.target.parentElement.classList.toggle("ativo");
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