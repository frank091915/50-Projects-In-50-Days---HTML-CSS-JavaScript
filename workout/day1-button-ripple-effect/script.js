const rippleButtons = document.querySelectorAll('.ripple');

function rippleClick(e){
    console.log(123)
    const clientX = e.clientX
    const clientY = e.clientY

    const target = e.target
    const offsetLeft = target.offsetLeft
    const offsetTop = target.offsetTop

    const xInside = clientX - offsetLeft;
    const yInside = clientY - offsetTop;

    const spanNode = document.createElement('span');
    spanNode.classList.add('rippleCircle');
    // type of value style.left is a string
    spanNode.style.left = xInside + 'px'
    spanNode.style.top = yInside + 'px'

    target.appendChild(spanNode)

    setTimeout(()=>{
        spanNode.remove()
    },500)
}

console.log(rippleButtons,'rippleButtons')
rippleButtons.forEach((ele) =>{
    ele.addEventListener('click',rippleClick)
})