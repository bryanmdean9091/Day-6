const url = 'https://cat-fact.herokuapp.com/facts/random'

fetch(url).then(catFact => catFact.json()).then(catData => {
    console.log(catData)
    alert(catData.text)
})

