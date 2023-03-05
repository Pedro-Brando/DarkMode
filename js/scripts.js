
const trocaTemaBtn = document.querySelector("#troca-tema");

//Toggle do modo escuro
function toggleModoEscuro(){
    document.body.classList.toggle("dark");
}

//Carregar modo claro ou escuro
function carregarModo(){
    const modoEscuro = localStorage.getItem("dark")

    if(modoEscuro){
        toggleModoEscuro();
    }
}

carregarModo();

trocaTemaBtn.addEventListener("change", function() {
    toggleModoEscuro();

    //salvar ou remover modo escuro
        localStorage.removeItem("dark");

            if(document.body.classList.contains("dark")){
            localStorage.setItem("dark", 1);
            }
});