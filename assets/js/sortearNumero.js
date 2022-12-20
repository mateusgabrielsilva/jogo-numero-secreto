

const menorValor = 1
const maiorValor = 200

// Número aleatório com Math.random()
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor + 1)
}

//console.log('Numero secreto ' + numeroSecreto)

// Busacando elementos no HTML 
const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor