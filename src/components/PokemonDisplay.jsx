export default function PokemonDisplay({pokemon, searchName}) {

    const loaded = () => {
      return (
        <>
        <h1>{pokemon.name}</h1>
        <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
        <h2>Abilities:</h2>
            <ul>
                {pokemon.abilities?.map((ability, index) => (
                    <li key={index}>{ability.ability.name}</li>
                ))}
            </ul>
        </>
      )
    };
  
    const loading = () => {
    return <>
        <h1>{searchName} does not exist!</h1>
        <h2>Make sure this Pokemon actually exist and check your spelling.</h2>
    </>
      
    };
  
    return pokemon ? loaded() : loading();
  }