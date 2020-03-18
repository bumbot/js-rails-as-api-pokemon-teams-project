const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

document.addEventListener("DOMContentLoaded", pageSetup)




function pageSetup() {
    fetch(TRAINERS_URL)
    .then(res => res.json())
    .then(trainerArray => trainerArray.forEach(trainer => makeTrainerCard(trainer)))
}

function makeTrainerCard(trainerObj) {
    let mainTag = document.querySelector('main')
    let trainerCard = document.createElement('div')
        trainerCard.classList.add("card")
        trainerCard.dataset.id = trainerObj.id

    let trainerName = document.createElement('p')
        trainerName.innerText = trainerObj.name

    let addPokeButton = document.createElement('button')
        addPokeButton.innerText = "Add Pokemon"
        addPokeButton.dataset.trainerId = trainerObj.id

    let pokeList = document.createElement('ul')

    trainerCard.append(trainerName, addPokeButton, pokeList)

    trainerObj.pokemons.forEach(pokemon => {
        let pokeItem = document.createElement('li')
            pokeItem.innerText = `${pokemon.nickname} (${pokemon.species})`
        let releasePokeButton = document.createElement('button')
            releasePokeButton.classList.add("release")
            releasePokeButton.dataset.pokemonId = pokemon.id
            releasePokeButton.innerText = "Release"

        pokeItem.append(releasePokeButton)
        pokeList.append(pokeItem)
    })

    mainTag.append(trainerCard)
}



/*
    <div class="card" data-id="1"><p>Prince</p>
  <button data-trainer-id="1">Add Pokemon</button>
  <ul>
    <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
    <li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
    <li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
    <li>Rosetta (Eevee) <button class="release" data-pokemon-id="150">Release</button></li>
    <li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li>
  </ul>
</div>
*/