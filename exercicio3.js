// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML
var buttons = document.querySelectorAll(".botao-expandir-retrair")

buttons.forEach((btn)=>{
    btn.addEventListener('click',showMoreInfo)
})

function showMoreInfo(evt){
    console.log("Aqui");
    let btn = evt.currentTarget
    let p = btn.closest('p');
    p.classList.toggle('expandido')

}