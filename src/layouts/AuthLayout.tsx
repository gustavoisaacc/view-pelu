import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import { ToastContainer } from "react-toastify";
import { Copyright } from "lucide-react";

function AuthLayout() {
  return (
    <>
      <div className=" bg-lightpurple min-h-screen ">
        <div className=" mx-auto w-[100%] " /*md:w-[450px]*/>
          <Logo />
          <div className="">
            <Outlet />
          </div>
        </div>
      </div>
      <ToastContainer pauseOnFocusLoss={false} pauseOnHover={false} />
      <div className="footer-copyright footer ">
            &copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.
        </div>
    </>
  );
}

export default AuthLayout;
