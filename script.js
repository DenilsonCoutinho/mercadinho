 const menu = document.querySelector('.active-menu')
const openMenu = document.querySelector('.login')
menu.addEventListener('click', ()=>{
    openMenu.classList.toggle('active')
})

const prod = document.getElementById('car-active')
const openProd = document.querySelector('.car')
prod.addEventListener('click', ()=>{
    openProd.classList.toggle('active')
})

function addArroz(){
const arroz = document.getElementById('arroz')
const addarroz = arroz.children[1].cloneNode(true)
const arrozPosition = addarroz.children.length + 1
addarroz.querySelector('.produtos').innerText = "produto" + arrozPosition + ""
arroz.appendChild(addarroz)
console.log(arroz.children)
}