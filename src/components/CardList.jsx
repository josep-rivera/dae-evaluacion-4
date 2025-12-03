import Card from "./Card";

const CardList = ({ pokemons, fixedGrid = false }) => {
  const gridClass = fixedGrid
    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    : "grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";

  return (
    <div className={gridClass}>
      {pokemons.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default CardList;
