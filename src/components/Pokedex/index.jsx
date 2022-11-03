import "./style.css"
export function Pokedex({ info }) {
    const types = [...info.types]
    const ability = [...info.abilities]
    console.log(ability)
    return (
        <section className={`pokedex ${types[0].type.name}`}>
            <div className="headerInfo">
                <div>
                    <h1>{info.name}</h1>
                    <div className="types">
                        {types.map(i => <span className={i.type.name}>{i.type.name}</span>)}
                    </div>
                </div>
                <span id="numberID">#{info.id}</span>
            </div>
            <div className="pokemonImg">
                <img src={info.sprites.other.dream_world.front_default} alt={info.name} />
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
                            <td>{ability.map(el => el.ability.name).join(", ")}</td>
                            <td>{info.height}</td>
                            <td>{info.weight}</td>
                            <br />
                            <br />
                            <br />
                            <td>{info.stats[0].base_stat}</td>
                            <td>{info.stats[1].base_stat}4</td>
                            <td>{info.stats[2].base_stat}</td>
                            <td>{info.stats[3].base_stat}</td>
                            <td>{info.stats[4].base_stat}</td>
                            <td>{info.stats[5].base_stat}</td>
                        </tr>
                    </tbody>
                </table>
                <h4></h4>
            </div>
        </section>
    )
}