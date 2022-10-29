const elem = document.getElementById('meme')

function getMeme(){
    fetch('https://meme-api.herokuapp.com/gimme/ProgrammerHumor')
    .then(res => res.json())
    .then(data => {
        elem.src = data.url
    })
}
getMeme()