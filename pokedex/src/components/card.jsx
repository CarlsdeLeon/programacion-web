export default function PokemonCard({ name, image, extra }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 flex flex-col items-center w-60">
      {/* Imagen */}
      <img 
        src={image} 
        alt={name} 
        className="w-32 h-32 object-contain mb-4"
      />

      {/* Nombre */}
      <h2 className="text-xl font-bold capitalize mb-2">{name}</h2>

      {/* Característica extra (ej. tipo, peso, etc.) */}
      <p className="text-gray-600 text-sm">{extra}</p>
    </div>
  );
}
