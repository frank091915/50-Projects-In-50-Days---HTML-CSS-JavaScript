const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        // e is an event object
        // clientx provides the horizontal coordinate within the viewport (currently being shown) 
        // at which the event occur( as opposed to the coordinate within the page)
        const x = e.clientX
        const y = e.clientY

        // event.target provides the reference to the object onto which the event was dispatched 触发事件
        // it is different from event.currentTarget when the handler is called during the bubbling or capturing phase of the event

        // five values that position can take : static, absolute, relative, fixed, sticky.
        // offsetTop is the distance between the current node and the closest offset parent( whose position is non-static )
        // if there is on offset parent, return body
        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const xInside = x - buttonLeft
        const yInside = y - buttonTop
        console.log(e,x,y,'x,y',buttonLeft,buttonTop,'offsetTop,offsetLeft')
        console.log(this === e.target,'this')
        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)
    })
})