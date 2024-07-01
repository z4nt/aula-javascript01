var peso = parseFloat(prompt('Qual seu peso?'))
var altura = parseFloat(prompt('qual sua altura?'))
var imc = peso / (altura ** 2)
console.log(imc.toFixed(2))


if (imc <= 18.5) {
    alert('magreza ' + imc.toFixed(2));
} else if (imc => 18.5 && imc <= 24.9) {
    alert('seu peso é normal ' + imc.toFixed(2));
}