import { createBrowserRouter } from "react-router-dom";
import CompaniesPage from "./pages/CompaniesPage";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

export const router = createBrowserRouter([
  { index: true, path: "/", Component: HomePage },
  { path: "/jobs", Component: JobsPage },
  { path: "/companies", Component: CompaniesPage },
  { path: "/register", Component: RegisterPage },
  { path: "/login", Component: LoginPage },
]);
