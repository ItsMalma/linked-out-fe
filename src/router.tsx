import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";

export const router = createBrowserRouter([
  { index: true, path: "/", Component: HomePage },
  { path: "/jobs", Component: JobsPage },
]);
