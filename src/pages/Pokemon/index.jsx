import { useState, useEffect } from "react";
import "./index.css";

const Pokemons = () => {
    const [pokemons, setPokemons] = useState([]);

    const [types, setTypes] = useState([]);

    const fetchTypes = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/type/");
        const data = await response.json();
        setTypes(data.results);
    };

    const fetchPokemons = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        const data = await response.json();
        setPokemons(data.results);
    };

    const handleOnChangePokemon = async (e) => {
        setPokemons([]);
        const response = await fetch(
            `https://pokeapi.co/api/v2/type/${e.target.value}`
        );
        const data = await response.json();
        setPokemons(data.pokemon);
    };

    const getIdByUrl = (url) => {
        const parts = url.split("/");
        return parts[parts.length - 2];
    };

    useEffect(() => {
        fetchPokemons();
    }, []);

    useEffect(() => {
        fetchTypes();
    }, []);

    return (
        <div className="Rotomdex">
            <div className="container-title">
                <h1>Lista De Pokémons</h1>
            </div>
            <div className="dropdown">
                <select name="" id="" onChange={handleOnChangePokemon}>
                    {types.length > 0 &&
                        types.map((type) => (
                            <>
                                <option value={type.name}>{type.name}</option>
                            </>
                        ))}
                </select>
            </div>
            <div className="container">
                {pokemons.length > 0 &&
                    pokemons.map((pokemon) => (
                        <div>
                            <img
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getIdByUrl(
                                    pokemon.url ?? pokemon.pokemon.url
                                )}.png`}
                                alt=""
                                width={300}
                            />
                            <h4>{pokemon.name ?? pokemon.pokemon.name}</h4>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Pokemons;