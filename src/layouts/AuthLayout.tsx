import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import { ToastContainer } from "react-toastify";

function AuthLayout() {
  return (
    <>
      <div className=" bg-black min-h-screen ">
        <div className="py-16 mx-auto w-[90%] lg:py-20 md:w-[450px] lg:w-[600px] ">
          <Logo />
          <div className="mt-10">
            <Outlet />
          </div>
        </div>
      </div>
      <ToastContainer pauseOnFocusLoss={false} pauseOnHover={false} />
    </>
  );
}

export default AuthLayout;
