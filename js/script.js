const turnOn = document.querySelector('#turnOn')
const turnOff = document.querySelector('#turnOff')
const lamp = document.querySelector('#lampada')
let img = document.querySelector('#image')

const lampOn = () => {
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
    img.setAttribute ('src','./imagens/acesa.png') 
    
}
turnOn.addEventListener('click', lampOn)
img.addEventListener('click', lampOn)


const lampOff = () => {
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white'
    img.setAttribute ('src','./imagens/Picture1.png') 

    
}
turnOff.addEventListener('click', lampOff)
img.addEventListener('click', lampOff)
