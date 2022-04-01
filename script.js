 const menu = document.querySelector('.active-menu')
const openMenu = document.querySelector('.login')
menu.addEventListener('click', ()=>{
    openMenu.classList.toggle('active')
})