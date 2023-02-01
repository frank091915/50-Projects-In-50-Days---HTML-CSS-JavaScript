const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        // use css tricks to implement the requirements first
        toggle.parentNode.classList.toggle('active')
    })
})