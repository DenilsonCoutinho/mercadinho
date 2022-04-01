 const menu = document.querySelector('.active-menu')
const openMenu = document.querySelector('.login')
menu.addEventListener('click', ()=>{
    openMenu.classList.toggle('active')
})
const prod = document.querySelector('.active-prod')
const openProd = document.querySelector('.list')
prod.addEventListener('click', ()=>{
    openProd.classList.toggle('active')
})