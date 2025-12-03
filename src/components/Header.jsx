import { NavLink, Link } from "react-router-dom";
import { FiGrid, FiHome, FiMail } from "react-icons/fi";

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50 bg-white/90 backdrop-blur shadow-sm border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-slate-900 text-white shadow-sm">
            <FiGrid className="text-lg" />
          </div>
          <span className="font-semibold text-slate-700 text-lg tracking-tight">
            JSON Placeholder API
          </span>
        </Link>

        {/* Navegación */}
        <nav className="flex items-center gap-3">
          {[
            { to: "/", label: "Home", icon: <FiHome /> },
            { to: "/entities", label: "Pokémon", icon: <FiGrid /> },
            { to: "/contact", label: "Contacto", icon: <FiMail /> },
          ].map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `inline-flex items-center gap-1 px-3 py-2 rounded-xl transition text-sm font-medium border ${
                  isActive
                    ? "bg-slate-900 text-white border-slate-900 shadow"
                    : "bg-white text-slate-600 border-slate-200 hover:bg-slate-100"
                }`
              }
            >
              {icon} {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
