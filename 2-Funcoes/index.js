// function

function calcularImc(peso, altura) {
  return (peso / (altura * altura))
}

var pessoa1 = {
  peso: 90,
  altura: 2,
}

var pessoa2 = {
  peso: 50,
  altura: 1.5
}

var imcpessoa1 = calcularImc(pessoa1.peso, pessoa1.altura)
var imcpessoa2 = calcularImc(pessoa2.peso, pessoa2.altura)

console.log('IMC 1 = ',imcpessoa1)
console.log('IMC 2 = ',imcpessoa2)


 
// arrow function

calcularMedia = (n1, n2) => {
  var media = (n1 + n2) / 2
  return media
}

var x = 12;
var y = 30;
var resultado = calcularMedia(x, y)

console.log(`Media dos numeros: ${x} e ${y} = ${resultado}`)