import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutApp from "./layouts/LayoutApp";
import Dashboard from "./view/Dashboard";
import Categories from "./view/Categories";
import Service from "./view/Service";
import AuthLayout from "./layouts/AuthLayout";
import LoginView from "./view/auth/LoginView";
import RegisterView from "./view/auth/RegisterView";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutApp />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/category" element={<Categories />} />
          <Route path="/category/:categoryId" element={<Service />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/auth/login" element={<LoginView />} />
          <Route path="/auth/register" element={<RegisterView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
