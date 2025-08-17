import { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "./components/PokemonCard";
import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");
        const results = response.data.results;

        const detailedPokemons = await Promise.all(
          results.map(async (poke) => {
            const details = await axios.get(poke.url);
            return {
              name: details.data.name,
              image: details.data.sprites.other["official-artwork"].front_default,
              type: details.data.types.map((t) => t.type.name).join(", "),
            };
          })
        );

        setPokemons(detailedPokemons);
      } catch (error) {
        console.error("Error al obtener pokémon:", error);
      }
    };

    fetchPokemons();
  }, []);

  return (
    <div className="pokemon-container">
      {pokemons.length === 0 ? (
        <p className="loading-text">Loading pokémon...</p>
      ) : (
        pokemons.map((p) => (
          <PokemonCard 
            key={p.name} 
            name={p.name} 
            image={p.image} 
            type={`Type: ${p.type}`} 
            className="pokemon-card"
          />
        ))
      )}
    </div>
  );
}

export default App;
