//botão de proximo e volta
let menu = document.getElementById("menu");
let adicionar = document.getElementById("adicionar");
let adicionar2 = document.getElementById("adicionar2");
let adicionar3 = document.getElementById("adicionar3");
let remover = document.getElementById("remover");
let update = document.getElementById("update");
let update2 = document.getElementById("update2");
let update3 = document.getElementById("update3");
let box = document.getElementById("box");
let vizualizar = document.getElementById("vizualizar");

let buttonAdicionar = document.getElementById("buttonAdicionar");
let buttonRemover = document.getElementById("buttonRemover");
let buttonAtualizar = document.getElementById("buttonAtualizar");
let buttonVizualizar = document.getElementById("buttonVizualizar");

let button0 = document.getElementById("button0");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");

let button6 = document.getElementById("button6");

let button8 = document.getElementById("button8");
let button9 = document.getElementById("button9");
let button10 = document.getElementById("button10");
let button11 = document.getElementById("button11");
let button12 = document.getElementById("button12");

let button_menu = document.getElementById("button-menu");


buttonAdicionar.onclick = function (e) {
    e.preventDefault();

    menu.style.left = "-450px"
    adicionar.style.left = "5px"
}

button0.onclick = function (e) {
    adicionar.style.left = "450px"
    menu.style.left = "5px"


}

button1.onclick = function (e) {
    if(nome.value != '' && nome.value != '' && email.value != ''){
        adicionar.style.left = "-450px"
        adicionar2.style.left = "5px"
        e.preventDefault()
    }
}

button2.onclick = function (e) {
    e.preventDefault();

    adicionar.style.left = "5px"
    adicionar2.style.left = "450px"

}
button3.onclick = function (e) {
    e.preventDefault();

    adicionar2.style.left = "-450px"
    adicionar3.style.left = "5px"

}

button4.onclick = function (e) {
    e.preventDefault();

    adicionar2.style.left = "5px"
    adicionar3.style.left = "450px"
}

buttonRemover.onclick = function (e) {
    e.preventDefault();

    menu.style.left = "-450px"
    remover.style.left = "5px"
}

button6.onclick = function (e) {
    e.preventDefault();

    remover.style.left = "450px"
    menu.style.left = "5px"


}
buttonAtualizar.onclick = function (e) {
    e.preventDefault();

    menu.style.left = "-450px"
    update.style.left = "5px"
}
button8.onclick = function (e) {
    update.style.left = "450px"
    menu.style.left = "5px"


}

button9.onclick = function (e) {
        update.style.left = "-450px"
        update2.style.left = "5px"
        e.preventDefault()
    
}

button10.onclick = function (e) {
    e.preventDefault();

    update.style.left = "5px"
    update2.style.left = "450px"

}
button11.onclick = function (e) {
    e.preventDefault();

    update2.style.left = "-450px"
    update3.style.left = "5px"

}

button12.onclick = function (e) {
    e.preventDefault();

    update2.style.left = "5px"
    update3.style.left = "450px"
}

buttonVizualizar.onclick = function (e) {
    e.preventDefault();
    adicionar.style.top = "450px"
    adicionar2.style.top = "450px"
    adicionar3.style.top = "450px"
    remover.style.top = "450px"
    update.style.top = "450px"
    update2.style.top = "450px"
    update3.style.top = "450px"
    setTimeout(function(){    
    box.style.right = "300px"
    menu.style.top = "450px"
    box.style.width = "1000px"
    vizualizar.style.top = "-2590px"
    }, 100);


}
button_menu.onclick = function (e) {
     window.location.href = ("./index.html")
}
