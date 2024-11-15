import {useState, useEffect} from "react";
import "./App.css";

import PokemonDisplay from "./components/PokemonDisplay"
import Form from "./components/Form"
import getAllPokemon from './utilites/api'

export default function App() {
    const [pokemon, setPokemon] = useState(null);

    const getPokemon = async(searchTerm) => {
        try {
            const data = await getAllPokemon(searchTerm);
            if (data) {
                setPokemon(data);
            } else {
                setPokemon(null);
            }
        } catch (err) {
            console.error("Could not retrieve Pokemon data: ", err);
        }
    }
    useEffect(() => {
        getPokemon('');
    }, []);

    return (
        <div className="App">
            <Form pokemonSearch={getPokemon}/>
            <PokemonDisplay pokemon={pokemon} />
        </div>
    )
} 

