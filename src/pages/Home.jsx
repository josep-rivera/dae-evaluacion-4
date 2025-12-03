import { Link } from "react-router-dom";
import { FiArrowRight, FiZap } from "react-icons/fi";
import { useEffect } from "react";
import { usePokemonStore } from "../store/store";
import CardList from "../components/CardList";

const Home = () => {
  const { pokemons, fetchPokemons, loading } = usePokemonStore();

  useEffect(() => {
    if (pokemons.length === 0) {
      fetchPokemons(1);
    }
  }, [fetchPokemons, pokemons.length]);

  const featured = pokemons.slice(0, 6);

  return (
    <div className="flex flex-col gap-10">
      {/* Hero */}
      <section className="bg-white rounded-3xl shadow-sm border border-slate-100 px-6 sm:px-10 py-10 flex flex-col items-center text-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center mb-2 shadow">
          <FiZap className="text-2xl" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
          PokeDex Explorer
        </h1>
        <p className="max-w-xl text-slate-500 text-sm sm:text-base">
          Explora el mundo de los Pokémon de forma clara y ordenada. Descubre
          sus tipos, habilidades y estadísticas principales usando la PokéAPI.
        </p>

        <Link
          to="/entities"
          className="mt-4 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-800 text-slate-100 text-sm font-medium shadow hover:bg-slate-700 transition"
        >
          Ver todos los Pokémon
          <FiArrowRight className="text-sm" />
        </Link>
      </section>

      {/* Destacados */}
      <section className="bg-white rounded-3xl shadow-sm border border-slate-100 px-6 sm:px-10 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
            Pokémon Destacados
          </h2>
          <span className="text-xs sm:text-sm text-slate-400">
            Mostrando algunos de la primera página
          </span>
        </div>

        {loading ? (
          <div className="py-10 text-center text-slate-500 text-sm">
            Cargando Pokémon...
          </div>
        ) : (
          <CardList pokemons={featured} fixedGrid={true} />
        )}
      </section>
    </div>
  );
};

export default Home;
