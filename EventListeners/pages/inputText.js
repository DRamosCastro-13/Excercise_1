const caja = document.getElementById('caja');
const input = document.getElementById('input');
const reset = document.getElementById('reset');

input.addEventListener('input', () => {
    caja.innerHTML = `<p class=" w-10/12 text-lg mx-6 my-4 text-justify">${input.value}</p>`;
});

reset.addEventListener('click', e => {
    input.value = '';
    caja.innerHTML = input.value;
})