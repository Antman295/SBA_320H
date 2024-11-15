import {useState, useEffect} from "react";
import "./App.css";

import PokemonDisplay from "./components/PokemonDisplay"
import Form from "./components/Form"
import getAllPokemon from './utilites/api'

export default function App() {
    const [pokemon, setPokemon] = useState('');
    const [searchName, setSearchName] = useState("");

    const getPokemon = async(name) => {
        setSearchName(name);
        try {
            const data = await getAllPokemon(name);
            if (data) {
                setPokemon(data);
            } else {
                setPokemon(null);
            }
        } catch (err) {
            console.error("Could not retrieve Pokemon data: ", err);
            setPokemon(null);
        }
    }
    useEffect(() => {
        getPokemon('');
    }, []);

    return (
        <div className="App">
            <Form pokemonSearch={getPokemon}/>
            <PokemonDisplay pokemon={pokemon} searchName={searchName} />
        </div>
    )
} 

