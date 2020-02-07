var button      = document.querySelector("button"),
    input       = document.querySelector("input"),
    ul          = document.querySelector("ul"),
    listItems   = document.querySelectorAll("li"),
    spans       = document.querySelectorAll("span");


listItems.forEach(addToggleDoneOnClick);

spans.forEach(AddSpanEventListener);

button.addEventListener("click", addToListOnClick);

input.addEventListener("keypress", addToListOnEnter)

function inputLength (){
    return input.value.length;
}

function clearInput (){
    input.value = "";
}

function addElementToList() {
    var li = document.createElement("li");
    li.innerHTML = '<span class="icon-wrap"><i class="fas fa-minus"></i></span>';
    li.appendChild(document.createTextNode(input.value));
    AddSpanEventListener(li.firstChild);
    addToggleDoneOnClick(li);
    ul.appendChild(li);
    clearInput();
}

function addToListOnClick () {
    if (inputLength() > 0){
        addElementToList();
    }
}

function addToListOnEnter(){
    if(inputLength() > 0 && event.keyCode === 13){
        addElementToList();
    }
}

function AddSpanEventListener(span){
    span.addEventListener("click", function () {
        this.parentElement.remove();
    })
}

function addToggleDoneOnClick(li){
    li.addEventListener("click", function(){
        this.classList.toggle("done");
    }) 
}