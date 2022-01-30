var area = document.querySelector('#imagem')
var areaDois = document.querySelector('#imagemDois')

function card(){
      

      area.innerHTML = "<style>h2#inner{font-family: 'Dancing Script', cursive;border-bottom: 1px #606060 solid;color: black;text-align: center; margin-top:80px; margin-botton:50px; } p#fonteInner{font-family: 'Comfortaa', cursive; font-size: 12pt;width:85%; heigth:auto; margin-left:5%; text-align:justify;}</style> <h2 id='inner'>Saber</h2> </br> <p id='fonteInner'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere distinctio debitis dicta officiis deserunt officia accusantium nam doloremque reprehenderit maiores aut quia, molestiae nemo, commodi excepturi sit cum necessitatibus et Lorem"
      area.style.background = '#74f886'
      area.style.width ='35vw'
      area.style.opacity = '0.7'
      area.style.transitionDuration = '1s'  
      
}
function sair(){
      area.style.opacity = '0.0'
      area.innerText = ''
      area.style.width ='40vw'
      area.style.transitionDuration = '1.5s'
}
