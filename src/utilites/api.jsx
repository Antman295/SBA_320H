export async function getAllPokemon(name) {
    const url = `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`;

    try {

        const response = await fetch(url);
        if (!response.ok) {
            // Log the status and error text for more details
            const errorText = await response.text();
            console.error('Error fetching data:', response.status, errorText);
            return null;
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        return null;
    }
}

export default getAllPokemon;