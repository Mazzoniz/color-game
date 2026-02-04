const colors = ['blue', 'red', 'purple', 'green', 'bisque'] 
var btn = document.getElementById('btn')

btn.addEventListener('click', function() {
    document.body.style.background = colors[RandomColors()]

    document.querySelector('.color').textContent = document.body.style.background
})

function RandomColors() {
    return Math.floor(Math.random() * colors.length)
}