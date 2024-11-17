import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import { ToastContainer } from "react-toastify";

function AuthLayout() {
  return (
    <>
      <div className=" bg-lightpurple min-h-screen ">
        <div className="pt-16 mx-auto w-[100%] lg:pt-20" /*md:w-[450px]*/ >
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
