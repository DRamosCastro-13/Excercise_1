const cambiarBoton = document.getElementById('cambiar');
const caja = document.getElementById('caja');
const textoCaja = document.getElementById('texto-caja');

cambiarBoton.addEventListener('click', e => {
    if(caja.classList.contains('bg-gray-400', 'border-gray-500' )){
        caja.classList.remove('bg-gray-400', 'border-gray-500');
        caja.classList.add('bg-sky-200', 'border-sky-300');
        textoCaja.textContent = 'Azul';
    } else if(caja.classList.contains('bg-sky-200', 'border-sky-300')){
        caja.classList.remove('bg-sky-200', 'border-sky-300');
        caja.classList.add('bg-red-300', 'border-red-400');
        textoCaja.textContent = 'Rojo';
    } else if(caja.classList.contains('bg-red-300', 'border-red-400')){
        caja.classList.remove('bg-red-300', 'border-red-400');
        caja.classList.add('bg-gray-400', 'border-gray-500');
        textoCaja.textContent = 'Gris';
    }
} 
)

console.log(caja.classList)