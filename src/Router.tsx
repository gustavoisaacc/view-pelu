import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutApp from "./layouts/LayoutApp";
import Dashboard from "./view/Dashboard";
import Categories from "./view/Categories";
import Service from "./view/Service";
import AuthLayout from "./layouts/AuthLayout";
import LoginView from "./view/auth/LoginView";
import RegisterView from "./view/auth/RegisterView";
import ConfirmAccountView from "./view/auth/ConfirmAccountView";
import RequestNewCodeView from "./view/auth/RequestNewCodeView";
import ForgotPasswordView from "./view/auth/ForgotPasswordView";
import NewPasswordView from "./view/auth/NewPasswordView";
import EditarProfileView from "./view/EditarProfileView";
import NewCiteView from "./view/NewCiteView";
import ProfileView from "./view/ProfileView";
import PeluqueroDetailView from "./view/PeluqueroDetailView";
import NotFound from "./components/home/pages/NotFound";
import Home from "./components/home/pages/Home";
import DetailView from "./view/DetailView";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutApp />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/category" element={<Categories />} />
          <Route path="/category/:categoryId" element={<Service />} />
          <Route path="/edit-profile" element={<EditarProfileView />} />
          <Route path="/cita" element={<NewCiteView />} />
          <Route path="/detail" element={<DetailView />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/profile" element={<ProfileView />} />
          <Route path="/auth/login" element={<LoginView />} />
          <Route path="/auth/register" element={<RegisterView />} />
          <Route
            path="/auth/confirm-account"
            element={<ConfirmAccountView />}
          />
          <Route path="/auth/request-code" element={<RequestNewCodeView />} />
          <Route
            path="/pelu/:namelastName/:id"
            element={<PeluqueroDetailView />}
          />
          <Route
            path="/auth/forgot-password"
            element={<ForgotPasswordView />}
          />
          <Route path="/" element={<Home />} />
          <Route path="/auth/new-password" element={<NewPasswordView />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
