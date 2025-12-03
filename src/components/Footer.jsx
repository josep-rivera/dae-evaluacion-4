const Footer = () => {
  return (
    <footer className="bg-white/80 backdrop-blur shadow-inner border-t border-transparent mt-10">
      <div className="max-w-6xl mx-auto px-4 py-5 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} JSON Placeholder — Desarrollo de Aplicaciones Empresariales.
      </div>
    </footer>
  );
};

export default Footer;
