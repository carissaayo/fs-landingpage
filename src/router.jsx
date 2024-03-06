import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Buy from "./pages/Buy";
import GadgetPage from "./pages/GadgetPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/buy",
    element: <Buy />,
  },
  {
    path: "/gadgets/:id",
    element: <GadgetPage />,
  },
]);

export default router;
