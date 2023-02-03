const panels = document.querySelectorAll('.panel')
const ACTIVE_NAME = 'active'
panels.forEach(panel => {
    panel.addEventListener('click',(e)=>{
        // remove classname of all panels first
        // add active classname to e.target
        // add or delete classname by calling add or remove method in classList object
        removeActiveClasses()
        e.target.classList.add(ACTIVE_NAME)
    })
})

function removeActiveClasses() {
    panels.forEach((panel)=>{
        panel.classList.remove(ACTIVE_NAME)
    })
}

// in Vue or React, we could set dynamic classname with its reactivity system