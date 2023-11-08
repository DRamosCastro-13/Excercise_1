//1
const titulo = document.getElementById("h1_titulo")

//2
const tituloPrincipal = "Frutas"
titulo.innerHTML = tituloPrincipal


//3
const headerFooter = document.querySelectorAll(`.headerFooter`)

for(properties of headerFooter){
    properties.classList.add("bg-orange-500")
}

//4
const pFooter = document.getElementById("pFooter")
pFooter.innerHTML = "Daniela Ramos Castro - Cohort 52"


//5
const divCard = document.getElementById("contenedor")


//6

const mainId = document.getElementById("mainId")
function crearCard(frutas) {
    const article = document.createElement("article");

    article.className = "flex-col border-box h-80 w-29 p-4 border-solid border-black border-2 rounded-xl justify-items-center"
    article.innerHTML = `
        <image src="${frutas.foto}" alt="${frutas.nombre}" class="w-30 h-40 object-cover mx-auto">
        <h3 class="font-bold text-center">${frutas.nombre}</h3>
        <p class="pt-7 text-xs">${frutas.descripcion}</p>
    `
   return article
}


//7
function pintarArticles(frutas, divCard) {
    
    const div = document.createElement(`div`)

    for (const fruta of frutas) {
        const article = crearCard(fruta)
        divCard.appendChild(article)
    }
    
    divCard.appendChild(div)
}

//8
pintarArticles(frutas, divCard)

//9
const lista = document.getElementById("lista")
lista.innerHTML = `Frutas Dulces`

lista.className ="font-bold text-2xl"

//10
const frutasDulces = frutas.filter( fruta => fruta.esDulce === true)

function crearLista(frutasDulces) {
    const ul = document.createElement(`ul`);

    ul.innerHTML = `
        <li class="font-light text-sm list-disc list-inside ml-8">${frutasDulces.nombre}</li>
    `
    return ul
    
}

function pintarLista(frutasDulces, lista) {
    for (const fruta of frutasDulces) {
        const li = crearLista(fruta)
        lista.appendChild(li)
    }
}

pintarLista(frutasDulces, lista)