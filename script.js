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
    const buy = document.querySelector('.prod1')
    const newBuy = buy.children[0].cloneNode(true)
    const car = document.querySelector('.purchase')
    car.appendChild(newBuy)
    
}
function addFeijao(){
    const buy = document.querySelector("#feijao")
    const newBuy = buy.children[0].cloneNode(true)
    const car = document.querySelector('.purchase')
    car.appendChild(newBuy)
    
    }
    function addMacarrao(){
        const buy = document.querySelector("#macarrao")
        const newBuy = buy.children[0].cloneNode(true)
        const car = document.querySelector('.purchase')
        car.appendChild(newBuy)
        
        }
        function addPringle(){
              
            const buy = document.querySelector("#pringle")
            const newBuy = buy.children[0].cloneNode(true)
            const car = document.querySelector('.purchase')
            car.appendChild(newBuy)
            
            }
            function addNutela(){
              
                const buy = document.querySelector("#nutela")
                const newBuy = buy.children[0].cloneNode(true)
                const car = document.querySelector('.purchase')
                car.appendChild(newBuy)
                
                }
                function addOreo(){
              
                    const buy = document.querySelector("#oreo")
                    const newBuy = buy.children[0].cloneNode(true)
                    const car = document.querySelector('.purchase')
                    car.appendChild(newBuy)
                    
                    }
                    function addClube(){
              
                        const buy = document.querySelector("#clube-social")
                        const newBuy = buy.children[0].cloneNode(true)
                        const car = document.querySelector('.purchase')
                        car.appendChild(newBuy)
                        
                        }
                        function addCream(){
              
                            const buy = document.querySelector("#creamcrack")
                            const newBuy = buy.children[0].cloneNode(true)
                            const car = document.querySelector('.purchase')
                            car.appendChild(newBuy)
                            
                            }