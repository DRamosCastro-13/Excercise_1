const inputMonedaLocal = document.getElementById('inputMonedaLocal');
const inputDolar = document.getElementById('inputDolar');
const convertir = document.getElementById('convertir');
const borrar = document.getElementById('borrar');

convertir.addEventListener('click', () => {
    if(inputDolar.value != ''){
        let resultado = inputDolar.value * 500
        inputMonedaLocal.value = resultado
    } else if(inputMonedaLocal.value != ''){
        let resultado2 = inputMonedaLocal.value/500
        inputDolar.value = resultado2
    }
})

borrar.addEventListener('click', () => {
    inputDolar.value = ''
    inputMonedaLocal.value = ''
})