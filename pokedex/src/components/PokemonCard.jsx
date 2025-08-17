export default function PokemonCard({ name, image, type }) {
  return (
    <div className="pokemon-card">
      {/* Name */}
      <h2 className="name-pokemon">{name}</h2>
      
      {/* Image */}
      <img 
        src={image} 
        alt={name} 
        className="image-pokemon"
      />

      {/* Type characteristic  */}
      <p className="type-pokemon">{type}</p>
    </div>
  );
}
