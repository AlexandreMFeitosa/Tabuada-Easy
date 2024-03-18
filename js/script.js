

function calcular () {

    let numeroDaTabuada = document.querySelector("#tabuadaDo");
    let numeroDaMultiplicacao = document.querySelector("#multiplicarAte");
    let resultado = document.querySelector(".resultado");
    
    
    for(let i = 0; i < numeroDaMultiplicacao; i++) {
        
        resultado = console.log(`${numeroDaTabuada} x ${i} = ${numeroDaTabuada * i}`);

    }
    resultado.innerHTML = `${resultado}`

}