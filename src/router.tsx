import { createBrowserRouter } from "react-router-dom";
import CompaniesPage from "./pages/CompaniesPage";
import CompanyPage from "./pages/CompanyPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import HomePage from "./pages/HomePage";
import JobPage from "./pages/JobPage";
import JobsPage from "./pages/JobsPage";
import LoginPage from "./pages/LoginPage";
import OnboardingPage from "./pages/OnboardingPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";

export const router = createBrowserRouter([
  { index: true, path: "/", Component: HomePage },
  { path: "/jobs", Component: JobsPage },
  { path: "/companies", Component: CompaniesPage },
  { path: "/register", Component: RegisterPage },
  { path: "/login", Component: LoginPage },
  { path: "/forgot-password", Component: ForgotPasswordPage },
  { path: "/onboarding", Component: OnboardingPage },
  { path: "/job/:id", Component: JobPage },
  { path: "/profile", Component: ProfilePage },
  { path: "/company/:id", Component: CompanyPage },
]);
