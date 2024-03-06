import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Buy from "./pages/Buy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/buy",
    element: <Buy />,
  },
]);

export default router;
