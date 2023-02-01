const rippleButtons = document.querySelectorAll('.ripple');

function rippleClick(e){

    // e is an event object
    // clientx provides the horizontal coordinate within the viewport (currently being shown) 
    // at which the event occur( as opposed to the coordinate within the page)
    const clientX = e.clientX
    const clientY = e.clientY

    // event.target provides the reference to the object onto which the event was dispatched 触发事件
    // it is different from event.currentTarget when the handler is called during the bubbling or capturing phase of the event

    // five values that position can take : static, absolute, relative, fixed, sticky.
    // offsetTop is the distance between the current node and the closest offset parent( whose position is non-static )
    // if there is on offset parent, return body
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