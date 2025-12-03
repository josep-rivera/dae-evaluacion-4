import { create } from "zustand";

const API_BASE = "https://jsonplaceholder.typicode.com";

export const usePokemonStore = create((set, get) => ({
  usuarios: [],
  page: 1,
  pageSize: 8,
  total: 0,
  loading: false,
  error: null,

  fetchUsuario: async (page = get().page) => {
    const pageSize = get().pageSize;
    const offset = (page - 1) * pageSize;

    set({ loading: true, error: null });

    try {
      const res = await fetch(
        `${API_BASE}/posts?limit=${pageSize}&offset=${offset}`
      );
      if (!res.ok) throw new Error("Error al obtener la informacion");
      const data = await res.json();

      // Obtener detalles de cada usuario
      const detailed = await Promise.all(
        data.results.map(async (poke) => {
          const r = await fetch(poke.url);
          return await r.json();
        })
      );

      set({
        pokemons: detailed,
        total: data.count,
        page,
        loading: false,
        error: null,
      });
    } catch (err) {
      console.error(err);
      set({ loading: false, error: "No se pudo cargar la informacion" });
    }
  },

  nextPage: () => {
    const { page, pageSize, total, fetchPokemons } = get();
    const maxPage = Math.ceil(total / pageSize);
    if (page < maxPage) {
      fetchPokemons(page + 1);
    }
  },

  prevPage: () => {
    const { page, fetchPokemons } = get();
    if (page > 1) {
      fetchPokemons(page - 1);
    }
  },
}));
