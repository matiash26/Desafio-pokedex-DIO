import { useState, useEffect } from "react";
import { Pokedex } from "../components/Pokedex"
import "./style.css"
function Home() {
    const [pokemon, setPokemon] = useState([])
    const [offset, setOffset] = useState(0)

    const getDetails = (data) => {
        return fetch(data.url).then(response => response.json())
    }
    useEffect(() => {
        const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=12`
        fetch(url)
            .then(response => response.json())
            .then(data => data.results.map(getDetails))
            .then(detailPokemon => Promise.all(detailPokemon))
            .then(pokemonDetails => setPokemon(pokemonDetails))
            .catch(error => console.error(error))
    }, [offset])
    return (
        <div className="container">
            <main className="home">
                <div className="Content">
                    {
                       pokemon.map((el, i) => <Pokedex key={i} info={el} />)
                    }
                </div>
                <div className="btn-load">
                    <button onClick={() => setOffset(offset + 10)}>Load more</button>
                </div>
            </main>
        </div>
    )
}
export default Home;