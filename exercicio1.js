// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML
var calcularBotao = document.querySelector("#calcular");

calcularBotao.addEventListener('click',()=>{
    
    var gravidade = parseFloat(document.querySelector("#constante").value)
    var massa1 = parseInt(document.querySelector("#massa1").value)
    var massa2 =  parseInt(document.querySelector("#massa2").value)
    var distancia =  parseInt(document.querySelector("#distancia").value)
    var resultado = calculoGravidade(gravidade,massa1,massa2,distancia)
    var resultadoInput = document.querySelector("#resultado");
    resultadoInput.value=resultado
})


function calculoGravidade(G,M1,M2,D){
    console.log(G,M1,M2,D);
    return (G*M1*M2)/(Math.pow(D,2))
}