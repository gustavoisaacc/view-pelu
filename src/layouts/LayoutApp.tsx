import { Link, Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import { NavMenu } from "../components/NavMenu";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LayoutApp() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-darkpurple py-5">
        <section className="max-w-screen-2xl m-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="w-64">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <nav className="lg:w-24">
            <NavMenu />
          </nav>
        </section>
      </header>

      {/* Asegúrate de que el main tenga un ancho del 100% */}
      <main className="flex-grow w-full max-w-screen-2xl m-auto">
        <Outlet />
      </main>

      <footer className="text-center py-5">
        <p>Todos los derechos reservados {new Date().getFullYear()}</p>
      </footer>

      <ToastContainer pauseOnFocusLoss={false} pauseOnHover={false} />
    </div>
  );
}

export default LayoutApp;
