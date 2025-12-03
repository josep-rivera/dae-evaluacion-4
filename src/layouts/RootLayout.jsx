import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="max-w-6xl mx-auto px-4">{<Outlet />}</div>
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
