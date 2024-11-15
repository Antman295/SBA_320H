import {useState} from "react";

export default function Form({pokemonSearch}) {
    const [searchName, setSearchName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        pokemonSearch(searchName)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Enter Pokemon name in the text field below:</h3>
                <input 
                type="text"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                 />
                <button type="submit">Seach</button>
            </form>
        </div>
    )
}