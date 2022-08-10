document.querySelector("form").addEventListener("submit", addMovie)
let message = document.querySelector('#message')



function addMovie(event){
    event.preventDefault()
    const inputField = document.querySelector('input')

    const movie = document.createElement('li')

    const movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movie.appendChild(movieTitle)
    movieTitle.addEventListener('click', crossOffMovie)


    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = "X"
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    const list = document.querySelector('ul')
    list.appendChild(movie)
    inputField.value = ""

}
function deleteMovie(event){
    message.textContent = "Movie deleted!"
    revealMessage()

    event.target.parentNode.remove();
}

function crossOffMovie(event){
    event.target.classList.toggle('checked')

    if(event.target.classList.contains('checked') === true) {
        message.textContent = "Movie watched!"
    }else{
        message.textContent = "Movie added back!"

    }
    revealMessage()
}

document.querySelector("form").addEventListener('submit', addMovie)

function revealMessage() {
    // message.classList.remove('hide')
    
    setTimeout(() => {
        message.classList.add('hide')
    }, 1000)
}