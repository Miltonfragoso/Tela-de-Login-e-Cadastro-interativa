var btnentrar = document.querySelector("#entrar");
var btncadastrar = document.querySelector("#cadastrar");


var body = document.querySelector("body");

btnentrar.addEventListener("click", function () {
    body.className = "entrar-js";
});

btncadastrar.addEventListener("click", function () {
    body.className = "cadastrar-js";
})

