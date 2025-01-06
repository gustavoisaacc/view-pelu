import { Link, Navigate, Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import { NavMenu } from "../components/NavMenu";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../hooks/useAuth";
import { Copyright } from "lucide-react";

function LayoutApp() {
  const { data, isError, isLoading } = useAuth();

  if (isLoading)
    return (
      <p className="grid min-h-screen place-content-center text-2xl">
        Cagando...
      </p>
    );
  if (isError) return <Navigate to="/auth/login" />;

  if (data)
    return (
      <div className="min-h-screen flex flex-col  bg-lightpurple">
        <header className="bg-darkpurple ">
          <section className="max-w-screen-2xl m-auto flex flex-col lg:flex-row items-center justify-between">
            <div className="grid place-content-center">
              <div className="w-64">
                <Link to="/dashboard">
                  <Logo />
                </Link>
              </div>
            </div>
            <nav className="lg:w-24">
              <NavMenu name={data.name} />
            </nav>
          </section>
        </header>

        {/* Asegúrate de que el main tenga un ancho del 100% */}
        <main className="flex-grow w-full max-w-screen-2xl m-auto">
          <Outlet />
        </main>

        <footer className="text-center py-5  footer-copyright"></footer>
        <div className="footer-copyright footer ">
          &copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos
          reservados.
        </div>

        <ToastContainer pauseOnFocusLoss={false} pauseOnHover={false} />
      </div>
    );
}

export default LayoutApp;
