import {useState} from "react";

export default function Form(props) {
    const [formData, setFormData] = useState({
        searchName: "",
    });

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.pokemonSearch(formData.searchName)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                name="searchName"
                onChange={handleChange}
                value={formData.searchName} />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}