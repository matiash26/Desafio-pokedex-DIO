import "./style.css"
export function Pokedex({ info }) {
    const pokeObjt = (data) => {
        return {
            types: data?.types.map(el => el?.type?.name),
            id: data.id,
            name: data.name,
            image: data.sprites.other.dream_world.front_default,
            height: data.height,
            weight: data.weight,
            ability: data.abilities.map(el => el.ability.name),
            stats: data.stats.map(el => el.base_stat)
        }
    }
    const pokemon = pokeObjt(info);
    return (
        <section className={`pokedex ${pokemon.types[0]}`}>
            <div className="headerInfo">
                <div>
                    <h1>{pokemon.name}</h1>
                    <div className="types">
                        {pokemon.types.map(name => <span className={name}>{name}</span>)}
                    </div>
                </div>
                <span id="numberID">#{pokemon.id}</span>
            </div>
            <div className="pokemonImg">
                <img src={pokemon.image} alt={pokemon.image} />
            </div>
            <div className="about">
                <table>
                    <thead>
                        <tr>
                            <th>Abilities:</th>
                            <th>Height:</th>
                            <th>Weigth:</th>
                            <br />
                            <h4>status base</h4>
                            <br />
                            <th>HP:</th>
                            <th>Attack:</th>
                            <th>Defense:</th>
                            <th>Sp.Attack:</th>
                            <th>Sp.Defense:</th>
                            <th>Speed:</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{pokemon.ability.map(ability => ability).join(", ")}</td>
                            <td>{pokemon.height}</td>
                            <td>{pokemon.weight}</td>
                            <br />
                            <br />
                            <br />
                            {pokemon.stats.map(stats => <td>{stats}</td>)}
                        </tr>
                    </tbody>
                </table>
                <h4></h4>
            </div>
        </section>
    )
}