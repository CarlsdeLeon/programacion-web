export default function PokemonCard({ name, image, type }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 flex flex-col items-center w-60">
      
      {/* Name */}
      <h2 className="text-xl font-bold capitalize mb-2">{name}</h2>
      
      {/* Image */}
      <img 
        src={image} 
        alt={name} 
        className="w-32 h-32 object-contain mb-4"
      />

      {/* Type characteristic */}
      <p className="text-gray-600 text-sm">{type}</p>
    </div>
  );
}
