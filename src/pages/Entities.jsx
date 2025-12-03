import { useEffect } from "react";
import { usePokemonStore } from "../store/store";
import CardList from "../components/CardList";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Entities = () => {
  const {
    pokemons,
    page,
    total,
    pageSize,
    loading,
    error,
    fetchPokemons,
    nextPage,
    prevPage,
  } = usePokemonStore();

  useEffect(() => {
    fetchPokemons(page);
  }, [fetchPokemons, page]);

  const maxPage = total ? Math.ceil(total / pageSize) : 0;

  return (
    <section className="flex flex-col gap-6">
      <div className="mb-2">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">
          Listado de posts
        </h1>
        <p className="text-sm text-slate-500">
          Explora el listado completo de posts con paginación usando el api de JSON Placeholder y Zustand.
        </p>
      </div>

      {loading && (
        <div className="py-6 text-center text-slate-500 text-sm">
          Cargando informacion...
        </div>
      )}

      {error && (
        <div className="py-4 text-center text-red-500 text-sm">{error}</div>
      )}

      {!loading && !error && <CardList pokemons={pokemons} />}

      {/* Paginación */}
      <div className="flex items-center justify-between mt-6 bg-white rounded-2xl border border-slate-100 px-4 py-3 text-sm">
        <div className="flex items-center gap-2">
          <button
            onClick={prevPage}
            disabled={page <= 1}
            className="inline-flex items-center gap-1 px-3 py-2 rounded-lg border border-slate-200 bg-white text-slate-600 disabled:opacity-40 hover:bg-slate-50 transition"
          >
            <FiChevronLeft />
            Anterior
          </button>

          <button
            onClick={nextPage}
            disabled={page >= maxPage}
            className="inline-flex items-center gap-1 px-3 py-2 rounded-lg border border-slate-200 bg-white text-slate-600 disabled:opacity-40 hover:bg-slate-50 transition"
          >
            Siguiente
            <FiChevronRight />
          </button>
        </div>

        <div className="text-xs text-slate-500">
          Página <span className="font-semibold text-slate-700">{page}</span>
          {maxPage > 0 && (
            <>
              {" "}
              de <span className="font-semibold text-slate-700">{maxPage}</span>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Entities;
