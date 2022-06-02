const itemElement = document.getElementById("item");
const allItemsElement = document.getElementById("allItems")
const AddBtnElement = document.getElementById("addButton");

AddBtnElement.onclick= function(event){

    if(itemElement.value !==""){
    var h2 = document.createElement("h2");
    h2.textContent="- "+ itemElement.value;

    h2.addEventListener("click", function(){
        h2.style.textDecoration = "line-through";
    })

    let deletebtn = document.createElement("button");
    deletebtn.textContent="Delete";
    deletebtn.classList.add("deleteButton");

    deletebtn.addEventListener("click", function(){
        h2.textContent="";
    })

    h2.appendChild(deletebtn);
    allItemsElement.insertAdjacentElement("beforeend", h2);
    itemElement.value="";
}
}