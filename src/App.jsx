import {useState, useEffect} from "react";
import "./App.css";

import PokemonDisplay from "./components/PokemonDisplay"
import Form from "./components/Form"
import getAllPokemon from './utilites/api'

export default function App() {
    const [pokemon, setPokemon] = useState('');

    const getPokemon = async(searchName) => {
        try {
            const data = await getAllPokemon(searchName);
            if (data) {
                setPokemon(data);
            } else {
                setPokemon('');
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

