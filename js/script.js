

function calcular () {

    let numeroDaTabuada = document.querySelector("#tabuadaDo").value ;
        let numeroDaMultiplicacao = document.querySelector("#multiplicarAte").value ;
        let resultado = document.querySelector("#resultado");
    
        let tabuada = ""

    if(numeroDaMultiplicacao === '' || numeroDaTabuada === '') {
        alert("Campo em branco, favor preenchar corretamente somente com numeros!")
    } else {
        
        resultado.style.border = '2px solid black'
        resultado.style.padding = '20px'

        for(let i = 0; i <= numeroDaMultiplicacao; i++) {
            
            tabuada += `${numeroDaTabuada} x ${i} = ${numeroDaTabuada * i} <br>`;
            
        }
        
        resultado.innerHTML = tabuada ;
    }

}