

function calcular () {

    let numeroDaTabuada = document.querySelector("#tabuadaDo").value ;
        let numeroDaMultiplicacao = document.querySelector("#multiplicarAte").value ;
        let resultado = document.querySelector("#resultado");
    
        let tabuada = ""

    if(numeroDaMultiplicacao === '' || numeroDaTabuada === '') {
        alert("Campo em branco, favor preenchar corretamente somente com numeros!")
    } else {
    
        for(let i = 0; i <= numeroDaMultiplicacao; i++) {
        
            tabuada += `${numeroDaTabuada} x ${i} = ${numeroDaTabuada * i} <br>`;
        }

        resultado.innerHTML = tabuada ;
    }

    

}