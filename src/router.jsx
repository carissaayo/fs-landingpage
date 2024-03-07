import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Buy from "./pages/Buy";
import GadgetPage from "./pages/GadgetPage";
import Checkout from "./pages/Checkout";

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
  {
    path: "/checkout",
    element: <Checkout />,
  },
]);

export default router;
