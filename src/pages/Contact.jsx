import { useState } from "react";
import { FiMail, FiUser, FiMessageCircle, FiCheckCircle } from "react-icons/fi";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "El nombre es requerido.";
    if (!form.email.trim()) {
      newErrors.email = "El email es requerido.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Ingresa un email válido.";
    }

    if (!form.message.trim()) {
      newErrors.message = "El mensaje es requerido.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setSent(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSent(true);
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="max-w-xl mx-auto">
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 px-6 sm:px-8 py-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center">
            <FiMail />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold text-slate-900">
              Contacto
            </h1>
            <p className="text-sm text-slate-500">
              Envíanos tus dudas o comentarios sobre PokeDex Explorer.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nombre */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-700 flex items-center gap-1">
              <FiUser className="text-slate-400" />
              Nombre
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={`w-full rounded-xl border px-3 py-2 text-sm outline-none bg-slate-50 focus:bg-white focus:border-indigo-500 ${
                errors.name ? "border-red-400" : "border-slate-200"
              }`}
              placeholder="Ingresa tu nombre completo"
            />
            {errors.name && (
              <p className="text-xs text-red-500">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-700 flex items-center gap-1">
              <FiMail className="text-slate-400" />
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={`w-full rounded-xl border px-3 py-2 text-sm outline-none bg-slate-50 focus:bg-white focus:border-indigo-500 ${
                errors.email ? "border-red-400" : "border-slate-200"
              }`}
              placeholder="correo@ejemplo.com"
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Mensaje */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-700 flex items-center gap-1">
              <FiMessageCircle className="text-slate-400" />
              Mensaje
            </label>
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              className={`w-full rounded-xl border px-3 py-2 text-sm outline-none bg-slate-50 focus:bg-white focus:border-indigo-500 resize-none ${
                errors.message ? "border-red-400" : "border-slate-200"
              }`}
              placeholder="Escribe tu mensaje aquí..."
            />
            {errors.message && (
              <p className="text-xs text-red-500">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="mt-2 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition"
          >
            Enviar mensaje
          </button>

          {sent && (
            <div className="mt-3 inline-flex items-center gap-2 text-xs text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-xl px-3 py-2">
              <FiCheckCircle />
              Mensaje enviado correctamente. ¡Gracias por contactarnos!
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
