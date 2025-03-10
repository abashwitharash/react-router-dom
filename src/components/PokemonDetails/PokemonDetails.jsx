import { useParams } from "react-router";


const PokemonDetails = (props) => {

    const { pokemonId } = useParams();
 
      // New code: Find a single pokemon object from the array of pokemon
  //           using the pokemonId from the URL params.
  const singlePokemon = props.pokemon.find((poke) => (
    poke._id === Number(pokemonId)
  ));
  
    return (
      <>
        <h2>Pokemon Details</h2>
        <dl>
          <dt>Weight:</dt>
          <dd>{ singlePokemon.weight }</dd>
          <dt>Height:</dt>
          <dd>{ singlePokemon.height }</dd>
        </dl>
      </>
    );
  };
  
  export default PokemonDetails;
  