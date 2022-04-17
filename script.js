 const menu = document.querySelector('.active-menu')
 const openMenu = document.querySelector('.login')
 menu.addEventListener('click', () => {
     openMenu.classList.toggle('active')
 })

 const car = document.getElementById('car-active')
 const openProd = document.querySelector('.car')
 car.addEventListener('click', () => {
     openProd.classList.toggle('active')
 })

 

  const prods = [
    {
        
        nome:'arroz',
        img:'produtos/arroz.png'
        ,
    quantidade:0
    },
      {
      id:1,
      nome:'feijao',
      img:'produtos/feijao.png'
      ,
      quantidade:0,
      preco:10
  },
  {
  id:2,
  nome:'macarrao',
  img:'produtos/macarrao.png'
  ,
  quantidade:0,
  preco:7
}
,
{
    id:3,
    nome:'pringle',
    img:'produtos/pringle.png'
    ,
    quantidade:0
    
  }
  ,
  {
    id:4,
    nome:'nutela',
    img:'produtos/nutela.png'
    ,
    quantidade:0
    
  }
  ,
  {
    id:5,
    nome:'oreo',
    img:'produtos/oreo.png.png'
    ,
    quantidade:0
  }
  ,
  {
    id:6,
    nome:'club-social',
    img:'produtos/club-social.png'
    ,
    quantidade:0
  }
  ,
  {
    id:7,
    nome:'creamcrack',
    img:'produtos/creamcrack.png'
    ,
    quantidade:0
  }
  ,
  {
    id:8,
    nome:'cenoura',
    img:'produtos/cenoura.png'
    ,
    quantidade:0
   
  }
  ,
  {
    id:9,
    nome:'cebola',
    img:'produtos/cebola.png'
    ,
    quantidade:0
  }
  ,
  {
    id:10,
    nome:'alho',
    img:'produtos/alho.png'
    ,
    quantidade:0
  }
  ,
  {
    id:11,
    nome:'tomate',
    img:'produtos/tomate.png'
    ,
    quantidade:0
  }
  ,
  {
    id:12,
    nome:'alface',
    img:'produtos/alface.png'
    ,
    quantidade:0
  }
  ,
  {
    id:13,
    nome:'pimentão',
    img:'produtos/pimentão.png'
    ,
    quantidade:0
  }
  ,
  {
    id:14,
    nome:'repolho',
    img:'produtos/repolho.png'
    ,
    quantidade:0
  }
  ,
  {
    id:15,
    nome:'batata',
    img:'produtos/batata.png'
    ,
    quantidade:0
  }
  ,
  {
    id:16,
    nome:'banana',
    img:'produtos/banana.png'
    ,
    quantidade:0
  }
  ,
  {
    id:17,
    nome:'maçã',
    img:'produtos/maca.png'
    ,
    quantidade:0
  }
  ,
  {
    id:18,
    nome:'laranja',
    img:'produtos/laranja.png'
    ,
    quantidade:0
    
  }
  ,
  {
    id:19,
    nome:'abacaxi',
    img:'produtos/abacaxi.png'
    ,
    quantidade:0
  }
  ,
  {
    id:20,
    nome:'pera',
    img:'produtos/pera.png'
    ,
    quantidade:0
  }
  ,
  {
    id:21,
    nome:'uva',
    img:'produtos/uva.png'
    ,
    quantidade:0
  }
  ,
  {
    id:22,
    nome:'pessego',
    img:'produtos/pessego.png'
    ,
    quantidade:0
  }
  
  ,
  {
    id:23,
    nome:'morango',
    img:'produtos/morango.png'
    ,
    quantidade:0
  }
  ,
  {
    id:24,
    nome:'coca-cola',
    img:'produtos/coca-cola.png'
    ,
    quantidade:0
  }
  ,
  {
    id:25,
    nome:'sprite',
    img:'produtos/sprite.png'
    ,
    quantidade:0,
    preco:5
  }
  ,
  {
    id:26,
    nome:'fanta-laranja',
    img:'produtos/fanta-laranja.png'
    ,
    quantidade:0,
    preco:8
  }
  ,
  {
    id:27,
    nome:'sprite-lata',
    img:'produtos/sprite-lata.png'
    ,
    quantidade:0,
    preco:5
  }
  ,
  {
    id:28,
    nome:'coca-lata',
    img:'produtos/coca-lata.png'
    ,
    quantidade:0
    ,
    preco:5
  }
  ,
  {
    id:29,
    nome:'heineken',
    img:'produtos/heineken.png'
    ,
    quantidade:0,
    preco:15
  }
  ,
  {
    id:30,
    nome:'budweiser',
    img:'produtos/budweiser.png'
    ,
    quantidade:0,
    preco:6
  }
  ,
  {
    id:31,
    nome:'vodka',
    img:'produtos/vodka.png' ,
    quantidade:0

  }
  ,{
    id:32,
    nome:'eisenbahn',
    img:'produtos/eisenbahn.png',
    quantidade:0
    ,
    preco:13
  }
]
AttCar = () => {
var prodIndeCar = document.querySelector('.purchase')
var price = document.querySelector('.price')
prodIndeCar.innerHTML = ""
price.innerHTML= ""
prods.map((val)=>{
  if(val.quantidade > 0) {
  prodIndeCar.innerHTML += `
  <div class="stylePurchase">
  <img src="`+val.img+`"/>
  <p>`+val.nome+`</p>
  <p>`+val.quantidade+`x</p>
  
`  
   
  }
})
}
var links = document.querySelectorAll('.btn')
for (var i = 0; i <links.length; i++) {
  links[i].addEventListener('click',function(){
    price0 =0
    let key = this.getAttribute('key')
    prods[key].quantidade++ 
   
    AttCar()
  })
}
