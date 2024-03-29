const elem = document.getElementById('meme')

function getMeme(){
    fetch('https://meme-api.com/gimme')
    .then(res => res.json())
    .then(data => {
        elem.src = data.url
    })
}
getMeme()
