const searchNode = document.querySelector('.search');
const input = document.querySelector('.input')

searchNode.addEventListener('click',()=> handleClick());

function handleClick(){
    searchNode.classList.toggle('active')
    input.focus()
}