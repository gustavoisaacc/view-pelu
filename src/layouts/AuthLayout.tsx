import { Outlet, Link } from "react-router-dom";
import Logo from "../components/Logo";
import { ToastContainer } from "react-toastify";

function AuthLayout() {
  return (
    <>
      <div className=" bg-lightpurple min-h-screen ">
        <div className=" mx-auto w-[100%] " /*md:w-[450px]*/>
          <div className="grid place-content-center">
            <div className="w-64">
              <Link to="/">
                <Logo />
              </Link>
            </div>
          </div>
          <div className="">
            <Outlet />
          </div>
        </div>
      </div>
      <ToastContainer pauseOnFocusLoss={false} pauseOnHover={false} />
      <div className="footer-copyright footer ">
        &copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos
        reservados.
      </div>
    </>
  );
}

export default AuthLayout;
