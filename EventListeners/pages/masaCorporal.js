const altura = document.getElementById('inputAltura');
const peso = document.getElementById('inputPeso');
const calcular = document.getElementById('calcular');
const caja3 = document.getElementById('caja3')
const resultadoIMC = document.getElementById('inputResultado');

calcular.addEventListener('click', () => {
    let resultado = peso.value / Math.pow(altura.value, 2);
    resultado *= 10000;
    
    resultadoIMC.value = `${resultado.toFixed(2)}`; 
})    
 
caja3.addEventListener('keypress', e => {
    e.preventDefault();
})
