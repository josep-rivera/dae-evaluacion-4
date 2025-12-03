import { FiTag, FiHash, FiAperture } from "react-icons/fi";

const formatHeight = (h) => `${(h / 10).toFixed(1)} m`;
const formatWeight = (w) => `${(w / 10).toFixed(1)} kg`;

const Card = ({ pokemon }) => {
  const { name, sprites, height, weight, types, id } = pokemon;

  return (
    <article className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
      <div className="flex flex-col items-center justify-center pt-6 pb-2">
        <img
          src={
            sprites?.other?.["official-artwork"]?.front_default ||
            sprites?.front_default
          }
          alt={name}
          className="w-24 h-24 object-contain drop-shadow-sm"
        />
      </div>

      <div className="px-6 pb-5 flex flex-col gap-3">
        <h3 className="text-center font-semibold text-slate-800 text-lg capitalize">
          {name}
        </h3>

        <div className="flex flex-col gap-2 text-xs text-slate-600">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1">
              <FiHash className="text-slate-400" />
              Altura
            </span>
            <span className="font-medium">{formatHeight(height)}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1">
              <FiTag className="text-slate-400" />
              Peso
            </span>
            <span className="font-medium">{formatWeight(weight)}</span>
          </div>

          <div>
            <span className="inline-flex items-center gap-1 mb-1 text-xs">
              <FiAperture className="text-slate-400" />
              Tipos
            </span>
            <div className="flex flex-wrap gap-2 mt-1">
              {types?.map((t) => (
                <span
                  key={t.slot}
                  className="px-3 py-1 rounded-full text-[0.7rem] font-medium bg-indigo-50 text-indigo-700"
                >
                  {t.type.name}
                </span>
              ))}
            </div>
          </div>

          <p className="text-[0.65rem] text-right text-slate-400 mt-1">
            ID #{id}
          </p>
        </div>
      </div>
    </article>
  );
};

export default Card;
