export default function PokemonDisplay({pokemon}) {

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
      return <h1>Waiting for Pokemon to form...</h1>;
    };
  
    return pokemon ? loaded() : loading();
  }